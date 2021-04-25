import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@App/pages/home';
import Dashboard from '@App/pages/dashboard';

interface AppProps {}

interface AppState {}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Router>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </AppContainer>
      </>
    );
  }
}

export default App;
