// import Immutable from 'immutable';
// import PropTypes from 'prop-types';
// import React, { PureComponent } from 'react';
// import { generateRandomList } from './utils';
// import styles from './VirtualizedListContainer.css';

// import NotesList from './NotesList';

// const list = Immutable.List(generateRandomList());

// export default class VirtualizedFixedWidthContainer extends PureComponent {
//   static childContextTypes = {
//     list: PropTypes.instanceOf(Immutable.List).isRequired,
//     customElement: PropTypes.any,
//     isScrollingCustomElement: PropTypes.bool.isRequired,
//     setScrollingCustomElement: PropTypes.func
//   };

//   state = {
//     isScrollingCustomElement: true
//   };

//   constructor(props) {
//     super(props);
//     this.setScrollingCustomElement = this.setScrollingCustomElement.bind(this);
//   }

//   setScrollingCustomElement(custom) {
//     this.setState({ isScrollingCustomElement: custom });
//   }

//   getChildContext() {
//     const { customElement, isScrollingCustomElement } = this.state;
//     return {
//       list,
//       customElement,
//       isScrollingCustomElement,
//       setScrollingCustomElement: this.setScrollingCustomElement
//     };
//   }

//   render() {
//     const { isScrollingCustomElement } = this.state;
//     const bodyStyle = isScrollingCustomElement ? styles.ScrollingBody : styles.Body;
//     return (
//       <div className={styles.demo}>
//         <div className={bodyStyle} ref={(e) => this.setState({ customElement: e })}>
//           <div className={styles.column}>
//             <NotesList />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
