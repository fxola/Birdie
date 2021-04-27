import { LogoUrl } from '@App/constants/images';
import * as React from 'react';
import styled from 'styled-components';
import { CentralizedWrapper } from './centralized-wrapper';
import Logo from './logo';
import SubTitle from './sub-title';

const MediaQueryWrapper = styled(CentralizedWrapper)`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;

const MediaQueryContent = styled(CentralizedWrapper)`
  flex-direction: column;
`;

export default function MediaQueryMwssage() {
  return (
    <MediaQueryWrapper>
      <MediaQueryContent>
        <Logo src={LogoUrl} />
        <SubTitle>Please view on a desktop for a better experience</SubTitle>
      </MediaQueryContent>
    </MediaQueryWrapper>
  );
}
