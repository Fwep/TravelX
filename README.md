# TravelX
![landing page](https://github.com/Fwep/TravelX/blob/master/docs/readme/landing-page.png?raw=true)

[TravelX](http://travelx-app.herokuapp.com) is an attraction planning app that helps travelers create travel plans and discover popular attractions.
## Demo
![Demo](docs/readme/demo.gif)
## Technologies

### Backend

- MongoDB
- Express
- Node

### Backend APIs

- Google Places (for attraction information)
- Unsplash (for destination photos)

### Frontend:

- React
- Redux
- Axios (JS AJAX library)
- Material-UI (React components library that implements Google's Material Design UI philosophy)

## Key Features
- Generate a travel plan based on a destination city
- See a schedule of popular attractions for destination city
- View attractions in both schedule and map view
- Beautiful and intuitive user experience

### Dynamic Plan Saving and Regeneration

In order to allow the user to save their current itinerary or generate a new one if the current one was unsatisfactory a dynamic method of handling different actions was necessary. This feature, implemented in only a few lines of code, ties in many other key features of the app, including user authentication for saving new plans, viewing of all existing plans, and fetching a new itinerary to dynamically populate the URL path.

```js
  handleSaveClick() {
    const { session, saveItinerary, openModal, planId, history } = this.props;

    if (session) {
      saveItinerary(planId).then(history.push("/plans"));
    } else {
      openModal("login");
    }
  }

  handleNewPlan() {
    const { getRandCityItinerary, city } = this.props;

    getRandCityItinerary(city.name).then(res =>
      this.props.history.push(`/plans/${res.itinerary._id}`)
    );
  }
```

## Future Features

- Add, edit, and remove attractions from a generated plan
- Browse accomodations from Airbnb API
- Browse flights to and from destination via a flights API
- Generate an estimated cost of trip including accomodation and flights
- Customize the generated plan based on attraction tags

## Team Members

- [Steven Inouye]()
- [Micah Jaffe](https://github.com/micah-jaffe)
- [Taran Cacacho](https://linkedin.com/in/tarancacacho)
- [Josh Stroud]()
