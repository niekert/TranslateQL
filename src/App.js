import React from 'react';
import { ThemeProvider } from 'styled-components';
import FadeTransition from 'components/transitions/Fade';
import AuthRoute from 'scenes/AuthenticatedRoute';
import LoginPage from 'scenes/LoginPage';
import Logout from 'scenes/Logout';
import { Route, Switch } from 'react-router-dom';
import Topbar from './scenes/Topbar';
import defaultTheme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Route path="/" component={Topbar} />
        <FadeTransition>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <Route path="*" component={LoginPage} />
          </Switch>
        </FadeTransition>
      </div>
    </ThemeProvider>
  );
}

export default App;
