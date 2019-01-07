import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import PlanShowNavBar from "./plan_show_nav_bar";
import { openModal } from '../../actions/modal_actions';
import {selectPlan} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  const planId = parseInt(ownProps.match.params.planId);
  console.log(planId)
  // Comment this out when there is a plans table up
  // const plan = selectPlan(state.entities, planId);
  
  return {
    planId,
    // Comment this out when there is a plans table up
    // plan
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchPlan: (city) => dispatch(fetchPlan(city)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShowNavBar));
