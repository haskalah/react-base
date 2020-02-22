import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import FirebaseContext from './components/Context/FirebaseContext';
import Firebase from './components/Helpers/Firebase';

import {ApolloProvider} from '@apollo/react-hooks'
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/'
});

const authLink = setContext((_, {headers}) => {
    // Get auth token from local storage
    const token = JSON.parse(localStorage.authUser).token;
    // Return the headers to context.
    return {
        headers: {
            ...headers,
            'Content-Type': 'application/graphql',
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
