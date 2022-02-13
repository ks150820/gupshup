import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DashboardNavigator from './ScreenStackNavigation';
import DrawerNavigator from './DrawerNavigation';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
