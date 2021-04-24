import * as React from 'react';
import styled from 'styled-components';

import RecipientCard from '@App/components/recipient-card';
import RowWrapper from '@App/components/row-wrapper';
// import Title from '@App/components/title';
import Wrapper from '@App/components/wrapper';
import SubTitle from '@App/components/sub-title';
import Logo from '@App/components/logo';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled(Wrapper)`
  margin-top: 20%;
  text-align: center;
  width: 100%;
`;

const RecipientWrapper = styled(RowWrapper)`
  justify-content: space-between;
  margin-top: 5%;
`;

const Home = () => {
  return (
    <Container>
      <Logo src={LogoUrl} />
      <Content>
        <SubTitle>Choose Family member</SubTitle>
        <RecipientWrapper>
          <RecipientCard name={'Ray Penber'} id={'sdssd'} />
          <RecipientCard
            name={'Levi Ackerman'}
            id={'sdssd'}
            color="white"
            textColor={'black'}
          />
          <RecipientCard name={'Eren Jaeger'} id={'sdssd'} color={'#00254d'} />
        </RecipientWrapper>
      </Content>
    </Container>
  );
};

export default Home;
