import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

class UserDetail extends Component {
  state = {
    avatar_url: "",
    name: null,
    location: null
  };
  async componentDidMount() {
    const userDetail = await this.getGihubInfo(
      this.props.match.params.username
    );
    this.setState({
      ...userDetail
    });
  }

  getGihubInfo = async username => {
    const { data: { avatar_url, name, location } } = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return {
      avatar_url,
      name,
      location
    };
  };

  render() {
    const { avatar_url, name, location } = this.state;
    return (
      <div>
        <Header text="Person" showBackLink />
        <div style={{ margin: 30, display: "flex" }}>
          <div style={{ marginRight: 20, alignSelf: "center" }}>
            <img
              src={avatar_url}
              alt={name}
              className="img-circle"
              style={{ width: 40, height: 40 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              flex: 1,
              borderBottom: "1px solid #ccc"
            }}
          >
            <p style={{ marginBottom: 5 }}>{name}</p>
            <div>
              <p style={{ fontSize: 12, color: "#ccc", marginBottom: 5 }}>
                {location ? location : "No location"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetail;
