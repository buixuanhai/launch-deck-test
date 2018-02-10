import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={UserList} />
          <Route path="/user-detail/:username" component={UserDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
