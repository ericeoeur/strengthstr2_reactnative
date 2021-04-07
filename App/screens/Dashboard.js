import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';


import colors from '../constants/colors';



export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text>This is where the dashboard will be</Text>
      </ScrollView>
    </SafeAreaView>
  );
};