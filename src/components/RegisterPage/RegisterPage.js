import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AccountRegisterForm from '../AccountRegisterForm/AccountRegisterForm';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div>
        <AccountRegisterForm />

        <center>
          <Button
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: '#AFFA3D',
              fontFamily: 'orbitron',
            }}
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Login
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(RegisterPage));
