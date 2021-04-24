import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// import Title from '@App/components/title';
// import Logo from '@App/components/logo';
// import SubTitle from '@App/components/sub-title';
import Home from '@App/pages/home';

// const LogoUrl = require('../assets/images/logo-birdie.svg');

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
          <Home />
          {/* <Logo src={LogoUrl} />
          <Title>Welcome to the birdie test</Title>
          <SubTitle>Best of luck!</SubTitle> */}
        </AppContainer>
      </>
    );
  }
}

export default App;
