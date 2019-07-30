import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import shortcuts from '@key-shortcuts';
import styles from './FileUpload.scss';

export class FileUpload extends Component {
  state = { visible: false };

  componentDidMount() {
    shortcuts('Ctrl+Shift+Alt+U', () => {
      this.handleDisplayShoulder();
      this.initializeFileBrowser();
    });
  }

  handleDisplayShoulder = () => this.setState((prevState) => ({ visible: !prevState.visible }));

  initializeFileBrowser = () => {
    const elem = document.getElementById('fileInput');
    if (elem && document.createEvent) {
      const evt = document.createEvent('MouseEvents');
      evt.initEvent('click', true, false);
      elem.dispatchEvent(evt);
    }
  };

  render() {
    return (
      <div className={styles.uploader}>
        <form action="/upload" encType="multipart/form-data" method="post">
          <input id="fileInput" type="file" name="upload" multiple />
          <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}
