import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@symbols/core/withStyles';
import Grid from '@symbols/grid/Grid';
import FormLabel from '@symbols/v1/Form/FormLabel';
import FormControlLabel from '@symbols/v1/Form/FormControlLabel';
import RadioGroup from '@symbols/v1/RadioGroup';
import Radio from '@symbols/v1/Radio';
import Paper from '@symbols/v1/Paper';
import { styles } from './styles';

class Gutters extends React.Component {
  state = {
    spacing: '16'
  };

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="Spacing"
                  value={spacing}
                  onChange={this.handleChange('spacing')}
                  row
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel value="24" control={<Radio />} label="24" />
                  <FormControlLabel value="32" control={<Radio />} label="32" />
                  <FormControlLabel value="40" control={<Radio />} label="40" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Gutters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Gutters);
