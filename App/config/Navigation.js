import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Options from '../screens/Options';
import Registration from '../screens/Registration'; 
import SignIn from '../screens/SignIn'; 
import Dashboard from '../screens/Dashboard'; 

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // headerMode="none" 
  initialRouteName="Dashboard"
  > 
    <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen name="Registration" component={Registration}/>
    <MainStack.Screen name="SignIn" component={SignIn}  />
    <MainStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
  </MainStack.Navigator>
);



export default () => (
  // adds information for our navigation to render our screens
  <NavigationContainer>
    <MainStackScreen/>
  </NavigationContainer>
);



