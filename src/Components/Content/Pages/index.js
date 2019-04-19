import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Schedule from "../../../Container/Schedule/index";

const Pages = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Schedule} />
        <Route path="/workouts" render={() => <div>Under Development</div>} />
        <Route path="/exercises" render={() => <div>Under Development</div>} />
        <Route path="/meals" render={() => <div>Under Development</div>} />
        <Route path="/programs" render={() => <div>Under Development</div>} />
        <Route path="/messages" render={() => <div>Under Development</div>} />
        <Route path="/profile" render={() => <div>Under Development</div>} />
      </Switch>
    </div>
  );
};

export default Pages;
