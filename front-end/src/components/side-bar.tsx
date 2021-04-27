import * as React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import Text from './text';
import Wrapper from './wrapper';
import Logo from './logo';
import SubTitle from './sub-title';

import {
  LogoUrl,
  wellbeingActiveUrl,
  wellbeingUrl,
  metabolismActiveUrl,
  metabolismUrl,
  alertActiveUrl,
  alertsUrl,
} from '@App/constants/images';
import theme from '@App/constants/colors';
const { primaryGreen, primaryBlue } = theme;

import { EventType } from '../types';
import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';
import {
  globalPathSelector,
  setDashboardPath,
} from '@App/store/slices/dashboard';

interface TabProp {
  active?: boolean;
}

const SideBarWrapper = styled(Wrapper)`
  width: 20%;
  background-color: white;
  padding-left: 40px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const SideBarItem = styled(Wrapper)<TabProp>`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Tab = styled(Text)<TabProp>`
  color: ${props => (props.active ? primaryGreen : primaryBlue)};
  font-size: 14px;
  font-weight: 700;
`;

const TabLogo = styled(Logo)`
  height: 50px;
  width: 80px;
  margin-bottom: 20px;
`;

const TabIcon = styled(Logo)`
  height: 20px;
  width: 20px;
  margin-right: 20px;
`;

interface StateType {
  id: string;
  name: string;
}

interface SideBarProp {
  active: EventType;
  setActive: React.Dispatch<React.SetStateAction<EventType>>;
}

const Sidebar = ({ active, setActive }: SideBarProp) => {
  const wellbeingActive = active === 'wellbeing';
  const metabolismActive = active === 'metabolism';
  const alertActive = active === 'alert';

  const history = useHistory();
  const dispatch = useAppDispatch();
  const path = useAppSelector(globalPathSelector);

  if (!path) {
    history.goBack();
  }

  const handleTabSelect = (tab: EventType, recipient: string) => {
    setActive(tab);
    dispatch(setDashboardPath({ id: recipient, tab }));
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
        {wellbeingActive ? (
          <TabIcon src={wellbeingActiveUrl} />
        ) : (
          <TabIcon src={wellbeingUrl} />
        )}
        <Tab active={wellbeingActive}>Wellbeing</Tab>
      </SideBarItem>
      <SideBarItem
        active={metabolismActive}
        onClick={() => handleTabSelect('metabolism', id)}
      >
        {metabolismActive ? (
          <TabIcon src={metabolismActiveUrl} />
        ) : (
          <TabIcon src={metabolismUrl} />
        )}
        <Tab active={metabolismActive}>Metabolism</Tab>
      </SideBarItem>
      <SideBarItem
        active={alertActive}
        onClick={() => handleTabSelect('alert', id)}
      >
        {alertActive ? (
          <TabIcon src={alertActiveUrl} />
        ) : (
          <TabIcon src={alertsUrl} />
        )}
        <Tab active={alertActive}>Alerts</Tab>
      </SideBarItem>
    </SideBarWrapper>
  );
};

export default Sidebar;
