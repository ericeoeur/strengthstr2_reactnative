import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';

import { Entypo } from '@expo/vector-icons'; 

import colors from '../constants/colors';

import {RowItem, RowSeperator} from '../components/RowItem';




export default () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <ScrollView>
      <RowItem
        text="Themes"
        onPress = {() => alert('Todo!')}
        rightIcon = { 
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        } />
          

      <RowSeperator />

      <RowItem
        text="React Native Basics"
        onPress = {() => alert('Todo!')}
        rightIcon = { 
          <Entypo name="export" size={20} color={colors.blue} />
        } />

      <RowSeperator />

      <RowItem
        text="React Native By Example"
        onPress = {() => alert('Todo!')}
        rightIcon = { 
          <Entypo name="export" size={20} color={colors.blue} />
        } />

</ScrollView>
    </SafeAreaView>
  );
};