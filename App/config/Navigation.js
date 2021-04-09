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
import Workouts from '../screens/Workouts';
import Exercises from '../screens/Exercises';
import ExerciseDetail from '../screens/ExerciseDetail';



const AppTabs = createBottomTabNavigator();
const AppTabsScreen = (props) => (
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
      component={Options}
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





const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // headerMode="none" 
  // initialRouteName="Dashboard"
  >
    <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen name="Registration" component={Registration} />
    <MainStack.Screen name="SignIn" component={SignIn} />
    <MainStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    <MainStack.Screen name="Workouts" component={Workouts} />
    <MainStack.Screen name="Exercises" component={Exercises} />
    <MainStack.Screen name="ExerciseDetail" component={ExerciseDetail} />
  </MainStack.Navigator>
);




export default () => (
  // adds information for our navigation to render our screens
  <NavigationContainer>
    <MainStackScreen/>
    {/* <AppTabsScreen /> */}
  </NavigationContainer>
);



