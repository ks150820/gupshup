import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddChatScreen from '../screens/AddChatScreen';
import ChatScreen from '../screens/ChatScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

const defaultScreen = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'tomato' : '',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : 'tomato',
};

const MainScreenStackNavigator = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <MainScreenStackNavigator.Navigator screenOptions={defaultScreen}>
      <MainScreenStackNavigator.Screen
        name="Dashboard"
        component={HomeScreen}
      />
      <MainScreenStackNavigator.Screen
        name="AddUser"
        component={AddChatScreen}
      />
      <MainScreenStackNavigator.Screen name="Chat" component={ChatScreen} />
    </MainScreenStackNavigator.Navigator>
  );
};

const AboutUsStack = createNativeStackNavigator();

export const AboutUSNavigator = () => {
  return (
    <AboutUsStack.Navigator screenOptions={defaultScreen}>
      <AboutUsStack.Screen
        name="aboutus"
        component={AboutUsScreen}
        options={{
          headerStyle: {
            backgroundColor: 'rgba(255, 99, 57, 0.9)',
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerShadowVisible: false,
        }}
      />
    </AboutUsStack.Navigator>
  );
};

export default DashboardNavigator;
