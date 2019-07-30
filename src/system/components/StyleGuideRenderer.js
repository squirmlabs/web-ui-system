import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../rsg-components/Logo';
import Markdown from '../rsg-components/Markdown';
import Styled from '../rsg-components/Styled';
import logo from '../../assets/images/logo.png';

const xsmall = '@media (max-width: 600px)';

const styles = ({
  font, base, light, link, baseBackground, mq
}) => ({
  root: {
    color: base,
    backgroundColor: '#fafafa'
  },
  header: {
    color: '#fff',
    backgroundColor: link
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#254573',
    height: '86px',
    padding: '0px 50px',
    marginBottom: '25px',
    [xsmall]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  nav: {
    marginLeft: 'auto',
    marginRight: '-0.5em',
    [xsmall]: {
      margin: [[10, 0, 0]]
    }
  },
  headerLink: {
    '&, &:link, &:visited': {
      marginLeft: '0.5em',
      marginRight: '0.5em',
      fontFamily: font,
      color: '#efefef'
    },
    '&:hover, &:active': {
      color: '#fff',
      cursor: 'pointer'
    }
  },
  content: {
    width: '100%',
    padding: [[15, 30]],
    [mq.small]: {
      padding: 15
    },
    display: 'block'
  },
  components: {
    overflow: 'auto' // To prevent the pane from growing out of the screen
  },
  footer: {
    display: 'block',
    color: light,
    fontFamily: font,
    fontSize: 12
  },
  logo: {
    maxWidth: '200px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  sidebar: {
    maxWidth: '371px'
  }
});

export function StyleGuideRenderer(props) {
  console.log('​StyleGuideRenderer -> props', props);
  const {
    classes, hasSidebar, toc, title, homepageUrl, children
  } = props;
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.bar}>
          {/* <Logo>
            <img className={classes.logo} src={logo} />
          </Logo> */}
          <nav className={classes.nav}>
            {/* <a
								className={classes.headerLink}
								href="https://github.com/styleguidist/react-styleguidist/tree/master/docs"
							>
								Docs
							</a>
							<a
								className={classes.headerLink}
								href="https://github.com/styleguidist/react-styleguidist"
							>
								GitHub
							</a>
							<a className={classes.headerLink} href="https://gitter.im/styleguidist/styleguidist">
								Gitter
							</a> */}
          </nav>
        </div>
      </header>
      <div className={classes.container}>
        {hasSidebar && <div className={classes.sidebar}>{toc}</div>}
        <main className={classes.content}>
          {children}
          <footer className={classes.footer}>
            <Markdown text={`Created with [React Styleguidist](${homepageUrl}) ❤️`} />
          </footer>
        </main>
      </div>
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Styled(styles)(StyleGuideRenderer);
