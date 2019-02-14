import React from "react";
import Blog from "./Blog";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Navigation />
    <Switch>
      <Route path="/home" exact={true} component={Home} />
      {/* <Route path="/home/blog" component={Blog} /> */}
      <Route path="/home/blog/:id" component={Blog} />
      <Route path="/home/about" exact={true} component={About} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
</BrowserRouter>
);

export default AppRouter;