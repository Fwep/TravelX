import axios from 'axios';

const getRandCityItinerary = (city) =>
   axios.post('/api/places/city', { city });

   export default getRandCityItinerary
