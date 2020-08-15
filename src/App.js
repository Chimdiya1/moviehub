import React from "react";
import Pricing from "./pages/pricing/pricing";
import Signup from "./pages/signup/Signup";
import Discover from "./pages/discover/discover";
import Home from "./pages/home/home";
import Signin from './pages/signin/Signin';
import MovieDetails from "./pages/movie-details/movie-details.jsx";
import Page404 from './pages/page404/page404';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path='/sign-in' component={Signin}/>
        <Route exact path="/view/:type/:id" component={MovieDetails}/>
        <Route exact path='/404' component={Page404}/>
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
