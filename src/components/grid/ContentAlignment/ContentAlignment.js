import React from 'react';
import withStyles from '@symbols/core/withStyles';
import Grid from '@symbols/structure/Grid';
import FormControl from '@symbols/v1/Form/FormControl';
import FormLabel from '@symbols/v1/Form/FormLabel';
import FormControlLabel from '@symbols/v1/Form/FormControlLabel';
import RadioGroup from '@symbols/v1/RadioGroup';
import Radio from '@symbols/v1/Radio';
import Paper from '@symbols/v1/Paper';
import { styles } from './styles';
import { propTypes } from './propTypes';

class ContentAlignment extends React.Component {
  state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center'
  };

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={16}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper
                  className={classes.paper}
                  style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}
                >
                  {`Cell ${value + 1}`}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>direction</FormLabel>
                  <RadioGroup
                    name="direction"
                    aria-label="Direction"
                    value={direction}
                    onChange={this.handleChange('direction')}
                  >
                    <FormControlLabel value="row" control={<Radio />} label="row" />
                    <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                    <FormControlLabel value="column" control={<Radio />} label="column" />
                    <FormControlLabel
                      value="column-reverse"
                      control={<Radio />}
                      label="column-reverse"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>justify</FormLabel>
                  <RadioGroup
                    name="justify"
                    aria-label="Justify"
                    value={justify}
                    onChange={this.handleChange('justify')}
                  >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel
                      value="space-between"
                      control={<Radio />}
                      label="space-between"
                    />
                    <FormControlLabel
                      value="space-around"
                      control={<Radio />}
                      label="space-around"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>alignItems</FormLabel>
                  <RadioGroup
                    name="alignItems"
                    aria-label="Align items"
                    value={alignItems}
                    onChange={this.handleChange('alignItems')}
                  >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                    <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

ContentAlignment.propTypes = propTypes;
export default withStyles(styles)(ContentAlignment);
