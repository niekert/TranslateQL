import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router as BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider as ReduxProvider } from 'react-redux';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { GRAPHQL_AUTH_TOKEN_KEY } from 'app-constants';
import history from 'util/history';
import createStore from 'redux/createStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHCOOL_URL,
});

const middlewareLink = setContext(() => ({
  headers: {
    authorization: localStorage.getItem(GRAPHQL_AUTH_TOKEN_KEY)
      ? `Bearer ${localStorage.getItem(GRAPHQL_AUTH_TOKEN_KEY)}`
      : null,
  },
}));

const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const store = createStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <ReduxProvider store={store}>
          <BrowserRouter history={history}>
            <Component />
          </BrowserRouter>
        </ReduxProvider>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};
registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
