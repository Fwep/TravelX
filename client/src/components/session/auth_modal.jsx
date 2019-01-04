import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormHelperText from "@material-ui/core/FormHelperText";

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
      password: ''
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  };

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  };

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password })//.then(this.handleClose);
  };

  handleDemoLogin(e) {
    e.preventDefault();
    this.setState({ email: "", password: "" });

    const demoEmail = "magellan@travelx.com".split("");
    const demoPassword = "password".split("");

    const animateDemoLogin = () => {
      const intervalId = setInterval(() => {
        let email = this.state.email;
        let password = this.state.password;

        if (demoEmail.length > 0) {
          email += demoEmail.shift();
          this.setState({ email });
        } else if (demoPassword.length > 0) {
          password += demoPassword.shift();
          this.setState({ password });
        } else {
          clearInterval(intervalId);
          this.props.login({
            email: "magellan@travelx.com",
            password: "password"
          });
        }
      }, 80);
    };

    animateDemoLogin();
  }

  renderErrorMessage(field) {
    const error = this.props.errors[field];
    if (error) return (<FormHelperText>{ error }</FormHelperText>);
  }

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open auth modal
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              required
              onChange={this.handleInput('email')}
              value={this.state.email}
              error={!!this.props.errors.email}
            />
            {this.renderErrorMessage('email')}
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              required
              onChange={this.handleInput('password')}
              value={this.state.password}
              error={!!this.props.errors.password}
            />
            {this.renderErrorMessage('password')}
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleLogin} 
              color="primary" 
              variant="outlined"
              fullWidth
            >
              Log in
            </Button>
          </DialogActions>
          <DialogContent>
            <DialogContentText>
              Don't have an account?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleClose} 
              color="primary"
              variant="outlined"
              fullWidth
            >
              Sign up
            </Button>
          </DialogActions>
          <DialogContent>
            <DialogContentText>
                or
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleDemoLogin} 
              color="primary"
              variant="outlined"
              fullWidth
            >
              Continue as guest
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
