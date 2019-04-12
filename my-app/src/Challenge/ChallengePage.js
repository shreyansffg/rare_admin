import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const base64 = require('base-64');

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
   table: {
    minWidth: 700,
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
      mediaType: 'photos',
      description: '',
      startDate: '',
      endDate: '',
      active: 1,
      hashtagName: null,
      hashtagList: [],
      hashtagName: '',
      challengeList: []
    };
  componentWillMount(){
    this.getAllHashtags();
    this.getAllChallenges();
  };

  handleChange = fieldName => event => {
    console.log(event.target.value);
  
    this.setState({ [fieldName]: event.target.value });
  
  };
  
  submitButton = () => {
    alert("submitted");
    // var url = "https://murmuring-chamber-85644.herokuapp.com/addChallenge?"
    var headers = new Headers();  
    headers.append("Authorization", "Basic " + base64.encode("admin:passwd123"));

    var url = "http://localhost:4000/admin/addChallenge?"
    url+='&challengeName='+this.state.name;
    url+='&description='+this.state.description;
    url+='&startDate='+this.state.startDate;
    url+='&endDate='+this.state.endDate;
    url+='&active='+this.state.active;
    url+='&hashtagName='+this.state.hashtagName;
    url+='&mediaType='+this.state.mediaType;
    url+='&multiplier='+this.state.multiplier;

    console.log(url);
    fetch(url,{
      method: "POST",
      mode: "cors",
      headers: headers
    }).then(response => {
       console.log(response);
    }).catch(err => {
      alert("Something went wrong with Challenge addition");
    });
  };

  getAllHashtags = () => {
    let url = "http://localhost:4000/admin/getAllHashtags";
    let headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode("admin:passwd123"));

    fetch(url,{
      method: "GET",
      mode: "cors",
      headers: headers,

    }).then(res =>{
      return res.json();
    })
      .then(response => {
        // console.log(response.data);
        this.setState({ ['hashtagList']: response } );
        console.log(this.state.hashtagList);
      }).then(data =>{
      // console.log(data);
    }).catch(err => {
      // Do something for an error here
      alert("Something went wrong");
    });
  };

  getAllChallenges = () => {
    var url = "http://localhost:4000/admin/getAllChallenges";
    var headers = new Headers();  
    headers.append("Authorization", "Basic " + base64.encode("admin:passwd123"));

    fetch(url,{
      method: "GET",
      mode: "cors",
      headers: headers, 
    }).then(res =>{
      return res.json();
    })
    .then(response => {
      this.setState({ ['challengeList']: response } );
      console.log(this.state.challengeList);
    }).catch(err => {
      // Do something for an error here
      alert("Something went wrong");
    });
  };
  addHashtag = () => {
    var headers = new Headers();  
    headers.append("Authorization", "Basic " + base64.encode("admin:passwd123"));

    var url = "https://murmuring-chamber-85644.herokuapp.com/addHashtag?"
    url+='&hashtag_name='+this.state.hashtagName;
    url+='&points=10';
    
    console.log(url);
    fetch(url,{
      method: "POST",
      mode: "cors",
      headers: headers
    }).then(response => {
      return response.json();
    }).catch(err => {
      // Do something for an error here
      alert("Something went wrong");
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="challenge-name"
          label="Challenge Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="dense"
        />
       
        <TextField
          required
          id="challenge-description"
          label="Challenge Description"
          style={{ margin: 8 }}
          multiline
          rows="3"
          onChange={this.handleChange('description')}
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
          onChange={this.handleChange('startDate')}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="date"
          label="End Date"
          type="date"
          onChange={this.handleChange('endDate')}
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
        
        <TextField
          id="select-hashtag-type"
          label = 'Hashtags'
          select
          className={classes.textField}
          value={this.state.hashtagName}
          onChange={this.handleChange('hashtagName')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
        >
          {(this.state.hashtagList).map(option => (
            <option key={option.id} value={option.hashtag_name}>
              {option.hashtag_name}
            </option>
          ))}
        </TextField>
        <Switches/>
        <Button onClick={() =>this.submitButton()} variant="contained" color="primary" className={classes.button} style={{margin: '1em'}}>Create Challenge</Button>
      </form>

      <div>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Hashtag Name</TableCell>
            <TableCell align="right">Media Type</TableCell>
            <TableCell align="right">Multipler</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.challengeList.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.challenge_name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.start_date}</TableCell>
              <TableCell align="right">{row.end_date}</TableCell>
               <TableCell align="right">{row.hashtags_name}</TableCell>
              <TableCell align="right">{row.media_type}</TableCell>
              <TableCell align="right">{row.multiplier}</TableCell>
              <TableCell align="right">{row.active}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);
