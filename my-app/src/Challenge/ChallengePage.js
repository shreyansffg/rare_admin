import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


const mediaType = [
  {
    value: 'photo',
    label: 'Photos',
  },
  {
    value: 'video',
    label: 'Video',
  },
  {
    value: 'both',
    label: 'Both',
  }
];

class Switches extends React.Component{
  state = {
    isActive: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return(

      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              id="select-is-active"
              checked={this.state.isActive}
              onChange={this.handleChange('isActive')}
              value="checkedA"
            />
          }
          label="Activate Challenge"
        />
      </FormGroup>

      )
  }
}

class TextFields extends React.Component {




  state = {
    name: '',
    points:0,
    multiplier: 0,
    multiline: 'Controlled',
    mediaType: 'photos'
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="challenge-name"
          label="Challenge Name"
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="dense"
        />
        <TextField
          required
          id="hashtag"
          label="Hashtags"
          className={classes.textField}
          helperText="Hashtag will be used to find posts."
          margin="dense"
        />

        <TextField
          required
          id="challenge-description"
          label="Challenge Description"
          style={{ margin: 8 }}
          multiline
          rows="3"
          placeholder="This description will be seen by users on challenge home page."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="challenge-instructions"
          label="Challenge Instructions"
          style={{ margin: 8 }}
          multiline
          rows="3"
          placeholder="Instructions will be seen by users playing the game."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="date"
          label="Start Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="date"
          label="End Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          id="max-points"
          label="Maximum Points Possible"
          onChange={this.handleChange('points')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          required
          id="multiplier"
          label="Multipier"
          onChange={this.handleChange('multiplier')}
          type="number"
          placeholder="Enter multiplier for streaks."
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <TextField
          id="select-media-type"
          select
          label="Media Type Allowed"
          className={classes.textField}
          value={this.state.mediaType}
          onChange={this.handleChange('mediaType')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
        >
          {mediaType.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Switches/>
        <Button variant="contained" color="primary" className={classes.button} style={{margin: '1em'}}>Create Challenge</Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);
