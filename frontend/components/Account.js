import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Error from "./ErrorMessage";
import User from "./User";
import UserItems from "./UserItems";
import OrderList from "./OrderList";

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
  }
`;

class Account extends React.Component {
  render() {
    return (
      <User>
        {({ data: { me }, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <>
              <h2>{me.name}'s account</h2>
              <Dashboard>
                <UserItems />
                <div>
                  <h2>Your orders</h2>
                  <OrderList />
                </div>
              </Dashboard>
            </>
          );
        }}
      </User>
    );
  }
}

export default Account;
