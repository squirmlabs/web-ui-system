import cn from 'classnames';
import Immutable from 'immutable';
import { EditorState, convertFromRaw } from 'draft-js';
import React, { PureComponent } from 'react';
import AutoSizer from 'react-virtualized/AutoSizer';
import List from 'react-virtualized/List';
import styles from './NotesList.css';
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../ContentBox/ContentBox';
import { LabeledInput, InputRow } from '../../ui/LabeledInput/LabeledInput';
import { EditorReadOnly } from '../../ui/EditorReadOnly/EditorReadOnly';
import { evalJson, generateRandomList, isDraftable } from './utils';

const list = Immutable.List(generateRandomList());

export default class NotesList extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      listHeight: 300,
      listRowHeight: 150,
      overscanRowCount: 10,
      list: Immutable.List(generateRandomList()),
      rowCount: list.size,
      scrollToIndex: undefined,
      showScrollingPlaceholder: true,
      useDynamicRowHeight: false
    };

    this._getRowHeight = this._getRowHeight.bind(this);
    this._noRowsRenderer = this._noRowsRenderer.bind(this);
    this._onRowCountChange = this._onRowCountChange.bind(this);
    this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
    this._rowRenderer = this._rowRenderer.bind(this);
  }
  _getDatum(index) {
    const { list } = this.state;

    return list.get(index % list.size);
  }

  _getRowHeight({ index }) {
    return this._getDatum(index).size;
  }

  _noRowsRenderer() {
    return <div className={styles.noRows}>No rows</div>;
  }

  _onRowCountChange(event) {
    const rowCount = parseInt(event.target.value, 10) || 0;

    this.setState({ rowCount });
  }

  _onScrollToRowChange(event) {
    const { rowCount } = this.state;
    let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10));

    if (isNaN(scrollToIndex)) {
      scrollToIndex = undefined;
    }

    this.setState({ scrollToIndex });
  }

  _rowRenderer({
    index, isScrolling, key, style
  }) {
    const { showScrollingPlaceholder, useDynamicRowHeight } = this.state;

    if (showScrollingPlaceholder && isScrolling) {
      return (
        <div className={cn(styles.row, styles.isScrollingPlaceholder)} key={key} style={style}>
          Scrolling...
        </div>
      );
    }

    const datum = this._getDatum(index);

    let additionalContent;

    if (useDynamicRowHeight) {
      switch (datum.size) {
        case 120:
          additionalContent = <div>It is minimum-sized.</div>;
          break;
        case 150:
          additionalContent = <div>It is medium-sized.</div>;
          break;
        case 200:
          additionalContent = (
            <div>
              It is large-sized.<br />It has a 3rd row.
            </div>
          );
          break;
      }
    }

    let editorState;
    if (isDraftable(evalJson(datum.editorState))) {
      editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(datum.editorState)));
    }

    return (
      <div className={styles.row} key={key} style={style}>
        <div
          className={styles.letter}
          style={{
            backgroundColor: datum.color
          }}
        >
          {datum.last_name.charAt(0)}
        </div>
        <div>
          <div className={styles.name}>{datum.slug}</div>
          <div className={styles.name}>
            {datum.last_name}, {datum.first_name}
          </div>
          <div className={styles.index}>This is row {index}</div>
          {additionalContent}
          <div className="Element__description">
            <EditorReadOnly editorState={editorState} open={open} />
          </div>
        </div>
        {useDynamicRowHeight && <span className={styles.height}>{datum.size}px</span>}
      </div>
    );
  }
  render() {
    const {
      listHeight,
      listRowHeight,
      overscanRowCount,
      rowCount,
      scrollToIndex,
      showScrollingPlaceholder,
      useDynamicRowHeight
    } = this.state;

    return (
      <ContentBox>
        {/* <ContentBoxParagraph>
          <label className={styles.checkboxLabel}>
            <input
          aria-label="Use dynamic row heights?"
          checked={useDynamicRowHeight}
          className={styles.checkbox}
          type="checkbox"
          onChange={event =>
          this.setState({ useDynamicRowHeight: event.target.checked })
          }
            />
            Use dynamic row heights?
          </label>

          <label className={styles.checkboxLabel}>
            <input
          aria-label="Show scrolling placeholder?"
          checked={showScrollingPlaceholder}
          className={styles.checkbox}
          type="checkbox"
          onChange={event =>
          this.setState({
          showScrollingPlaceholder: event.target.checked
          })
          }
            />
            Show scrolling placeholder?
          </label>
        </ContentBoxParagraph> */}

        {/* <InputRow>
          <LabeledInput
            label="Num rows"
            name="rowCount"
            onChange={this._onRowCountChange}
            value={rowCount}
          />
          <LabeledInput
            label="Scroll to"
            name="onScrollToRow"
            placeholder="Index..."
            onChange={this._onScrollToRowChange}
            value={scrollToIndex || ''}
          />
          <LabeledInput
            label="List height"
            name="listHeight"
            onChange={event =>
          this.setState({
          listHeight: parseInt(event.target.value, 10) || 1
          })
            }
            value={listHeight}
          />
          <LabeledInput
            disabled={useDynamicRowHeight}
            label="Row height"
            name="listRowHeight"
            onChange={event =>
          this.setState({
          listRowHeight: parseInt(event.target.value, 10) || 1
          })
            }
            value={listRowHeight}
          />
          <LabeledInput
            label="Overscan"
            name="overscanRowCount"
            onChange={event =>
          this.setState({
          overscanRowCount: parseInt(event.target.value, 10) || 0
          })
            }
            value={overscanRowCount}
          />
        </InputRow> */}

        <div>
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                ref="List"
                className={styles.List}
                height={listHeight}
                overscanRowCount={overscanRowCount}
                noRowsRenderer={this._noRowsRenderer}
                rowCount={rowCount}
                rowHeight={useDynamicRowHeight ? this._getRowHeight : listRowHeight}
                rowRenderer={this._rowRenderer}
                scrollToIndex={scrollToIndex}
                width={width}
              />
            )}
          </AutoSizer>
        </div>
      </ContentBox>
    );
  }
}
