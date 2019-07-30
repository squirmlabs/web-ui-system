const path = require('path');

module.exports = {
  // Override Styleguidist components
  styleguideComponents: {
    SectionsRenderer: path.join(__dirname, 'components/SectionsRenderer'),
    SectionHeadingRenderer: path.join(__dirname, 'components/SectionHeadingRenderer'),
    ComponentsRenderer: path.join(__dirname, 'components/ComponentsRenderer'),
    SectionRenderer: path.join(__dirname, 'components/SectionRenderer'),
    HeadingRenderer: path.join(__dirname, 'components/HeadingRenderer'),
    // PathlineRenderer: path.join(__dirname, 'components/PathlineRenderer'),
    StyleGuideRenderer: path.join(__dirname, 'components/StyleGuideRenderer'),
    Wrapper: path.join(__dirname, 'components/Wrapper'),
  }
};
