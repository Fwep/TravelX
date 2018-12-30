import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../utils/routes_utils';
import HelloWorld from './HelloWorld';
// import SignUpFormContainer from './user/SignUpFormContainer';
// import LogInFormContainer from './session/LogInFormContainer';
// import Page404Container from './404/Page404Container';
// import ComingSoonContainer from './404/ComingSoonContainer';
// import HomeFooter from './homepage/HomeFooter';
// import Home from './homepage/Home';
// import ProductResultsRoot from './productResults/ProductResultsRoot';
// import ProductDetailsContainer from './product_details/ProductDetailsContainer';

const RootRoutes = () => {
   return (
      <>
         <Switch>
            <Route path="/" component={HelloWorld} />
            {/* <Route exact path="/" component={Home} />
            <Route
               path="/item/:productId"
               component={ProductDetailsContainer}
            />
            <Route path="/search" component={ProductResultsRoot} />
            <Route exact path="/comingsoon" component={ComingSoonContainer} />
            <AuthRoute path="/register" component={SignUpFormContainer} />
            <AuthRoute path="/signin" component={LogInFormContainer} />
            <Route path="*" component={Page404Container} /> */}
         </Switch>
         <HomeFooter />
      </>
   );
};
export default RootRoutes;
