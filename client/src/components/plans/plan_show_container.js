import { connect } from "react-redux";
import { fetchPlan } from "../../actions/plan_actions";
import PlanShow from "./plan_show";

const mapStateToProps = (state, ownProps) => ({
  plans: state.entities.plans,
  planId: ownProps.match.params.planId
});

const mapDispatchToProps = dispatch => ({
  fetchPlan: (city) => dispatch(fetchPlan(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShow);
