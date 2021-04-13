import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Linking
} from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
import colors from '../constants/colors';
import {RowItem, RowSeperator} from '../components/RowItem';


export default () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <ScrollView>
      <RowItem
        text="About the Creator: Eric Oeur"
        onPress = {() => Linking.openURL('https://ericeoeur.github.io/portfolio/index.html').catch((err) => console.error('An error occurred', err))}
        rightIcon = { 
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        } />
          

      <RowSeperator />

      <RowItem
        text="LinkedIn"
        onPress = {() => Linking.openURL('https://linkedin.com/in/ericoeur').catch((err) => console.error('An error occurred', err))}
        rightIcon = { 
          <Entypo name="export" size={20} color={colors.blue} />
        } />

      <RowSeperator />

      <RowItem
        text="Contact"
        onPress = {() => Linking.openURL('https://ericeoeur.myportfolio.com/contact').catch((err) => console.error('An error occurred', err))}
        rightIcon = { 
          <Entypo name="export" size={20} color={colors.blue} />
        } />

</ScrollView>
    </SafeAreaView>
  );
};