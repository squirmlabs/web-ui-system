const path = require('path');
const webpackConfiguration = require('./webpack.config.js');

const overrideSystemComponents = require('./src/system/index.js');
const ignores = require('./src/system/ignores.js');

// TODO build configuration api layer that allows the ui library
module.exports = {
  title: 'Web UI System',
  template: path.resolve('src/entry/index.html'),
  components: 'src/components/**/*.js',
  pagePerSection: true,
  showSidebar: true,
  styleguideComponents: overrideSystemComponents.styleguideComponents,
  contextDependencies: [path.resolve(__dirname, 'src/components')],
  configureServer(app) {
    // `app` is the instance of the express server running Styleguidist
    app.get('/hello', (req, res) => {
      res.status(200).send({ response: 'Server invoked' });
    });
  },
  // How to display the source code of any file?
  // updateExample(props, exampleFilePath) {
  //   const { settings, lang } = props
  //   if (typeof settings.file === 'string') {
  //     const filepath = path.resolve(exampleFilePath, settings.file)
  //     delete settings.file
  //     return {
  //       content: fs.readFileSync(filepath, 'utf8'),
  //       settings,
  //       lang
  //     }
  //   }
  //   return props
  // },
  editorConfig: {
    type: 'object',
    process: (value, config) => {
      const defaults = {
        theme: 'base16-light',
        mode: 'jsx',
        lineWrapping: true,
        smartIndent: false,
        matchBrackets: true,
        viewportMargin: Infinity,
        lineNumbers: false
      };
      return Object.assign(
        {},
        defaults,
        config.highlightTheme && { theme: config.highlightTheme },
        value
      );
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return `${name} from '${dir}';`;
  },
  ignore: ignores,
  require: [path.join(__dirname, 'dist/app.css')],
  theme: {
    baseBackground: '#fdfdfc',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    font: ['Roboto', 'sans-serif']
  },
  sections: [
    {
      name: 'Grid',
      content: 'src/components/grid/grid.md',
      components: 'src/components/grid/**/*.js'
    },
    {
      name: 'UI Components',
      content: 'src/components/ui/ui.md',
      components: 'src/components/ui/**/*.js'
    },
    {
      name: 'Fundamentals',
      content: 'src/components/fundamentals/fundamentals.md',
      components: 'src/components/fundamentals/**/*.js'
    },
    // {
    //   name: 'Vendor Components',
    //   content: 'src/components/vendor/vendor.md',
    //   components: 'src/components/vendor/**/*.js'
    // },
    {
      name: 'Web Components',
      content: 'src/components/web/web.md',
      components: 'src/components/web/**/*.js'
    }
  ],
  styles: {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 20,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
        border: 0
      }
    },
    Markdown: {
      pre: {
        border: 0,
        background: 'none'
      },
      code: {
        fontSize: 14
      }
    },
    StyleGuide: {
      content: {
        backgroundColor: '#fafafa',
        maxWidth: '100%',
        fontFamily: 'Roboto',
        padding: '50px'
      },
      footer: {
        display: 'none'
      }
    }
  },
  webpackConfig: webpackConfiguration,
  serverPort: 6060
};
