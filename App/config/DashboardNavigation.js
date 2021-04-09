import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Options from '../screens/Options';
import Registration from '../screens/Registration';
import SignIn from '../screens/SignIn';
import Dashboard from '../screens/Dashboard';



const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
  <AppTabs.Screen
      name="Dashboard"
      // component={Dashboard}
      children={(props) => <Dashboard {...props} AppTabsScreen={AppTabsScreen} />}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="bar-chart"
            size={props.size} color={props.color} />
        ),
      }} />

    <AppTabs.Screen
      name="Workouts"
      component={MainStackScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="barbell"
            size={props.size} color={props.color} />
        ),
      }} />
    <AppTabs.Screen
      name="Options"
      component={Options}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="cog" size={props.size} color={props.color} />
        ),
      }} />
  </AppTabs.Navigator>
);






export default () => (
  // adds information for our navigation to render our screens
  <NavigationContainer >
    <AppTabsScreen />
  </NavigationContainer >
);



