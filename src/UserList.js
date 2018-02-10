import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class UserList extends Component {
  state = {
    topFive: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
  };

  render() {
    return (
      <div>
        <Header />
        <div style={{ padding: 20 }}>
          <h4>Top 5 Github Users</h4>
          <p>Tap the username to see more information</p>
          <div style={{ marginLeft: -5 }}>
            {this.state.topFive.map(username => (
              <Link
                key={username}
                to={`/user-detail/${username}`}
                className="btn btn-primary"
                style={{ margin: 5 }}
              >
                {username}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
