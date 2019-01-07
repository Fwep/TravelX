import { attractions, attraction } from '../reducers/TEMP_data';
import getRandCityItinerary from "../utils/itinerary_ajax_utils";

const testPlan = {
  id: 123,
  attractions: attractions.slice(0, 5)
};

export const FETCH_PLAN = 'FETCH_PLAN';

export const receivePlan = (plan) => ({
  type: FETCH_PLAN,
  plan
});

export const fetchPlan = (city) => (dispatch) => {
  // Notes: As of time of this wiriting 1-6-18, the name of the city cannot
  // be found on the frontend. Need to write for it eventually
  
  getRandCityItinerary(city)
    .then(plan => {
      console.log(plan)
      debugger
      dispatch(receivePlan(plan));
    })
    .catch(err => console.log(err));
}