import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import ScheduleShowContainer from "./schedule_show_container";
import LoginFormContainer from '../session/login_form_container';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '33%',
    padding: '0'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: '42%'
  }
});

class PlanShowNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      modal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleNewPlan = this.handleNewPlan.bind(this);
  };

  handleChange(event, value) {
    this.setState({ value });
  };

  handleSaveClick() {
    if (this.props.session) {
      console.log('save plan to user')
    } else {
      console.log('not logged in')
      this.props.openModal('login');
      console.log(this.state)
    }
  };

  handleNewPlan() {
    // Will need to store city name before commenting this out
    // this.props.fetchPlan(city)
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <LoginFormContainer/>

        <AppBar position="sticky">
          <Toolbar className={classes.toolbar}>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Schedule" />
              <Tab label="Map" />
            </Tabs>
            <Toolbar className={classes.buttonContainer}>
              <Button
                onClick={this.handleSaveClick}
                color="secondary"
                variant="contained"
                className={classes.button}
              >
                Save
              </Button>
              <Button
                onClick={this.handleNewPlan}
                color="secondary"
                variant="contained"
                className={classes.button}
              >
                New Plan
              </Button>
            </Toolbar>
          </Toolbar>
        </AppBar>
        {value === 0 && <TabContainer><ScheduleShowContainer/></TabContainer>}
        {value === 1 && <TabContainer>Map placeholder</TabContainer>}
      </div>
    );
  }
}

PlanShowNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlanShowNavBar);
