export const styles = (theme) => ({
  gridContainer: {
    alignSelf: 'center',
    display: 'grid',
    backgroundColor: '#666666',
    gridTemplateColumns: '39px 20px 350px 150px',
    gridTemplateRows: '38px 26px 26px 0px',
    gridTemplateAreas: '"avatar flag subject icons" ". author author date" ". byline tags tags"',
    // gridTemplateColumns: '40px 50px auto 50px 40px',
    // gridTemplateRows: '25% 100px auto'
    // gridColumnGap: '10px'
    justifyContent: 'stretch',
    justifyItems: 'start',
    alignItems: 'center',
    width: '100%'
  },
  area: {
    // justifySelf: 'stretch',
    placeSelf: 'center stretch'
  },
  avatar: {
    gridArea: 'avatar',
    position: 'relative',
    width: '38px',
    height: '38px',
    marginRight: '8px',
    borderRadius: '100px',
    backgroundColor: '#f7f7f7',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 0 1px 4px 0 rgba(0,0,0,.2)',
    flexShrink: 0
  },
  flag: {
    gridArea: 'flag',
    backgroundColor: 'magenta'
  },
  subject: {
    gridArea: 'subject',
    backgroundColor: 'red',
    fontSize: ' 1.3em',
    lineHeight: '1.2em',
    fontWeight: '700',
    paddingBottom: '4px',
    color: '#333',
    wordWrap: 'break-word',
    display: 'block'
  },
  icons: {
    gridArea: 'icons',
    backgroundColor: 'orange'
  },
  author: {
    gridArea: 'author',
    backgroundColor: 'yellow'
  },
  date: {
    gridArea: 'date',
    backgroundColor: 'blue'
  },
  byline: {
    gridArea: 'byline',
    backgroundColor: 'blue'
  },
  tags: {
    gridArea: 'tags',
    backgroundColor: 'green'
  },
  editorialHeader: {
    boxSizing: 'borderBox',
    display: 'block',
    fontFamily: 'proxima-nova, "Roboto", sans-serif',
    height: '65px',
    lineHeight: '18.4px',
    marginBottom: '20px',
    textSizeAdjust: '100%',
    width: '750px',
    fontSmoothing: 'antialiased'
  }
});
