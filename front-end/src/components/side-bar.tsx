import * as React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Text from './text';
import Wrapper from './wrapper';
import Logo from './logo';
import SubTitle from './sub-title';

import { LogoUrl } from '@App/constants/images';
import theme from '@App/constants/colors';
const { primaryGreen, primaryBlue } = theme;

import { EventType } from '../types';

interface TabProp {
  active?: boolean;
}

const SideBarWrapper = styled(Wrapper)`
  width: 20%;
  background-color: white;
  padding-left: 40px;
`;

const SideBarItem = styled(Wrapper)<TabProp>`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const Tab = styled(Text)<TabProp>`
  color: ${props => (props.active ? primaryGreen : primaryBlue)};
`;

const TabLogo = styled(Logo)`
  height: 50px;
  width: 80px;
  margin-bottom: 20px;
`;

interface StateType {
  id: string;
  name: string;
}

const Sidebar = () => {
  const [active, setActive] = React.useState<EventType>('wellbeing');
  const wellbeingActive = active === 'wellbeing';
  const metabolismActive = active === 'metabolism';
  const alertActive = active === 'alert';
  const medicationActive = active === 'medication';

  const handleTabSelect = (tab: EventType, recipient: string) => {
    setActive(tab);
  };

  const {
    state: { name, id },
  } = useLocation<StateType>();
  return (
    <SideBarWrapper>
      <TabLogo src={LogoUrl} />
      <SubTitle color={primaryBlue}>
        {`${name.split(' ')[0]}'s Profile`}
      </SubTitle>
      <SideBarItem
        active={wellbeingActive}
        onClick={() => handleTabSelect('wellbeing', id)}
      >
        <Tab active={wellbeingActive}>Wellbeing</Tab>
      </SideBarItem>
      <SideBarItem
        active={metabolismActive}
        onClick={() => handleTabSelect('metabolism', id)}
      >
        <Tab active={metabolismActive}>Metabolism</Tab>
      </SideBarItem>
      <SideBarItem
        active={alertActive}
        onClick={() => handleTabSelect('alert', id)}
      >
        <Tab active={alertActive}>Alerts</Tab>
      </SideBarItem>
      <SideBarItem
        active={medicationActive}
        onClick={() => handleTabSelect('medication', id)}
      >
        <Tab active={medicationActive}>Medication</Tab>
      </SideBarItem>
    </SideBarWrapper>
  );
};

export default Sidebar;
