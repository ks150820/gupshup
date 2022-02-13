// import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DashboardNavigator, {AboutUSNavigator} from './ScreenStackNavigation';

const DrawerNav = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen
        name="Home"
        component={DashboardNavigator}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="aboutUs"
        component={AboutUSNavigator}
        options={{
          headerShown: false,
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
