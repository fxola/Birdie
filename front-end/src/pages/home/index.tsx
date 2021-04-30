import * as React from 'react';
import styled from 'styled-components';

import RecipientCard from '@App/components/RecipientCard';
import RowWrapper from '@App/components/RowWrapper';
import Wrapper from '@App/components/WrapperComponent';
import SubTitle from '@App/components/Subtitle';
import Logo from '@App/components/Logo';
import { LogoUrl } from '@App/constants/images';
import MediaQueryMwssage from '@App/components/MediaQueryMessage';

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    display: none;
  }
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
    <>
      <Container>
        <Logo src={LogoUrl} />
        <Content>
          <SubTitle>Choose a family member</SubTitle>
          <RecipientWrapper>
            <RecipientCard
              name={'Mereoleona Vermillion'}
              id={'e3e2bff8-d318-4760-beea-841a75f00227'}
            />
            <RecipientCard
              name={'Levi Ackerman'}
              id={'df50cac5-293c-490d-a06c-ee26796f850d'}
              color="white"
              textColor={'black'}
            />
            <RecipientCard
              name={'Isaac Netero'}
              id={'ad3512a6-91b1-4d7d-a005-6f8764dd0111'}
              color={'#00254d'}
            />
          </RecipientWrapper>
        </Content>
      </Container>
      <MediaQueryMwssage />
    </>
  );
};

export default Home;
