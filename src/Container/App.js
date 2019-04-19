import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
        {/*
          Put the sequent code when i have created the dashboard and the elanding page. The landing page 
          comes first if the user is signed in
          
          Landing page: <Route path="/" exact render={() => <div>landing Page</div>} />
          Dashboard: <Route path="/dashboard" exact render={() => <div>Dashboard</div>} />
        */}
      </BrowserRouter>
    );
  }
}

export default App;
