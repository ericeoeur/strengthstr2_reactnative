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
        text="About the Creator"
        onPress = {() => alert('Todo!')}
        rightIcon = { 
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        } />
          

      <RowSeperator />

      <RowItem
        text="Portfolio"
        onPress = {() => alert('Todo!')}
        rightIcon = { 
          <Entypo name="export" size={20} color={colors.blue} />
        } />

      <RowSeperator />

      <RowItem
        text="Contact"
        onPress = {() => alert('Todo!')}
        rightIcon = { 
          <Entypo name="export" size={20} color={colors.blue} />
        } />

</ScrollView>
    </SafeAreaView>
  );
};