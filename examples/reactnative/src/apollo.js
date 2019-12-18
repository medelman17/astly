import React from 'react';
import {PrismicLink} from 'apollo-link-prismic';
import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

import {ApolloProvider} from '@apollo/react-hooks';

export const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://fabulasrntest.prismic.io/graphql',
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export const query = gql`
  query GetPages {
    allPages {
      edges {
        node {
          ... on Page {
            title
            content
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;

export const Provider = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);
