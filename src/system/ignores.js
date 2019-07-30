const path = require('path');

module.exports = [
  '**/components/**/propTypes.js',
  '**/components/**/**/utils.js',
  '**/components/**/**/styles.js',
  '**/components/**/classNames.js',
  '**/components/**/**/createData.js',
  // Fundamentals
  '**/components/grid/**/styles.js',
  '**/components/fundamentals/**/styles.js',
  // UI Components
  '**/components/ui/**/withRoot.js',
  '**/components/ui/**/styles.js',
  '**/components/ui/**/tileData.js',
  '**/components/ui/EditorReadOnly/EditorReadOnly.js',
  // Web Components
  '**/components/web/**/styles.js',
  '**/components/web/**/index.js',
  '**/components/web/**/EnhancedTableHead.js',
  '**/components/web/**/EnhancedTableToolbar.js',
  '**/components/web/TextInput/Input.js',
  '**/components/web/DropDown/Input.js',
  '**/components/web/List/utils.js',
  '**/components/web/Button/IconButton.js',
  '**/components/web/Button/IconButtonPrimary.js',
  '**/components/web/Button/MoveToStoryButton.js',
  // Layout
  '**/components/Layout/LayoutVipBStyles.js',
  '**/components/Layout/withRoot.js',
  '**/components/Layout/tileData.js',
  // Raphael
  '**/components/RaphaelExample/data/index.js',
  '**/components/ShapeCircle/data/index.js',
  '**/components/ShapeRectangle/data/index.js',
  '**/components/ShapeText/data/index.js',
  '**/components/ShapeEllipse/data/index.js',
  // Vendor
  '**/components/vendor/NotesList/VirtualizedList/utils.js',
  '**/components/vendor/ContentBox/ContentBox.js',
  '**/components/vendor/NotesList/VirtualizedListContainer.js',
  // Others
  '**/components/CardExampleCard/CardExampleCard.js',
  '**/components/LabeledInput/LabeledInput.js'
];
