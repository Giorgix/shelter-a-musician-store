import React from "react";
import PropTypes from "prop-types";
import Error from "./ErrorMessage";
import User from "./User";
import UserItems from "./UserItems";

class Account extends React.Component {
  render() {
    return (
      <User>
        {({ data: { me }, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <>
              <h2>{me.name}'s account</h2>
              <UserItems />
            </>
          );
        }}
      </User>
    );
  }
}

export default Account;
