import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'; 
import colors from '../constants/colors'; 


const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between', //maximize space between two icons in this row 
    alignItems: 'center', //text and icon are aligned with each other 
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
}); 

export const RowItem = ({ text, rightIcon, onPress}) => {
  return (

    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.title}> {text}</Text>
      { rightIcon }
    </TouchableOpacity>
  )
}


export const RowSeperator = () =>   <View style={styles.separator} />;