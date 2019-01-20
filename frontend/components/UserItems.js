import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import styled from "styled-components";

import SickButton from "./styles/SickButton";

const USER_ITEMS_QUERY = gql`
  query USER_ITEMS_QUERY {
    userItems(orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const UserItemsStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

class UserItems extends Component {
  render() {
    return (
      <Center>
        <Query query={USER_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <>
                <h4>Your items</h4>
                <div>
                  {data.userItems.map(item => (
                    <UserItemsStyles key={item.id}>
                      <img src={item.image} alt={item.title} height="100px" />
                      <div className="cart-item-details">
                        {" "}
                        <h3>
                          <Link
                            href={{
                              pathname: "/item",
                              query: { id: item.id }
                            }}
                          >
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                      </div>
                      <Link
                        href={{
                          pathname: "update",
                          query: { id: item.id }
                        }}
                      >
                        <SickButton>Edit</SickButton>
                      </Link>
                    </UserItemsStyles>
                  ))}
                </div>
              </>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default UserItems;
