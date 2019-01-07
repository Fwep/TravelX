import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// MUI stuff
import NavBar from "./navbar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "absolute",
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  header: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  CreateNewPlanButton: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Plan extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    document.title = "TravelX | My Plans"
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      // REACT FRAGMENT IS WAY BETTER THAN DIV
      <React.Fragment> 
        <NavBar/>
        <article>
          <div>
            <div className={classes.header}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                My Plans
              </Typography>
  
              <div className={classes.CreateNewPlanButton}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Create a New Plan
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
  
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {cards.map(card => (
                <Grid item key={card} sm={6} md={6} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={require('./machu.jpg')}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      8 days in Cusco
                      </Typography>
                      <Typography>
                       Machu Machu Machu Machu Machu Machu Machu Machu Machu Machu
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </article>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            LinkedIns
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

Plan.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Plan);