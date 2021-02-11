import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ProgressBar from "../ProgressBar/ProgressBar";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
});

class VetMatches extends Component {
  state = {
    heading: "Vet Matches",
  };

  contactOrg = (event) => {
    console.log("Contacting Org");
  };

  // componentDidMount() {
  //   this.props.dispatch({ type: "FETCH_CATEGORY" });
  //   this.props.dispatch({ type: "FETCH_MATCH" });
  // }

  render() {

    const { classes } = this.props;
    const matches = this.props.store.vetMatchReducer;

    return (
        <div>
          <h2>{this.state.heading}</h2>
          <FormControl className={classes.formControl}>
            <InputLabel id="search-category-label">Category</InputLabel>
            <Select
              labelId="search-category-label"
              id="search-category"
              value={matches}
              input={<Input />}
            >
              {matches.map((match, i) => (
                <MenuItem key={i} value={match.name} >
                  {match.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                {matches.map((match, i) => (
                  <React.Fragment>
                    <Grid item key={i} xs={2}>
                      <Paper className={classes.paper}>
                        <img
                          className="resource-icon"
                          alt={match.title}
                          src="https://www.redcross.org/content/dam/redcross/imported-images/redcross-logo.png.img.png"
                        />
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        {match.name}
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        {match.description}
                      </Paper>        
                    </Grid>
                    <Grid item key={i} xs={3}>
                      <Paper className={classes.paper}>
                        <button onClick={(event) => this.contactOrg(event)}>
                          CONTACT ORG
                        </button>
                      </Paper>        
                    </Grid>              
                  </React.Fragment>            
                ))}
              </Grid>
            </Grid>
          </div>
        
        <ProgressBar value={30} />
        <button onClick={(event) => this.props.history.push("/home")}>
          BACK TO HOME
        </button>
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStoreToProps)
)(withRouter(VetMatches));
