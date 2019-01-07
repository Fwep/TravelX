import React from 'react';
import PlanShowHero from './plan_show_hero';
import PlanShowNavBarContainer from './plan_show_nav_bar_container';
import NavBar from './navbar'

export default class PlanShow extends React.Component {
  componentDidMount() {
    const { fetchPlan, city } = this.props;
    fetchPlan(city);
    document.title = "TravelX | Individual Plan"
  }

  render() {
    return (
      <div>
        <NavBar/>
        <PlanShowHero city={"Paris"}/>
        <PlanShowNavBarContainer />
      </div>
    );
  }
};