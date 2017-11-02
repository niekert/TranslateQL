import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';
import { GRAPHQL_AUTH_TOKEN_KEY } from 'app-constants';
import createStore from 'redux/createStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7je9lu000kw0195jyji5cps',
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      const token = localStorage.getItem(GRAPHQL_AUTH_TOKEN_KEY);
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    },
  },
]);

const client = new ApolloClient({
  networkInterface,
});

const store = createStore(client);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
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
