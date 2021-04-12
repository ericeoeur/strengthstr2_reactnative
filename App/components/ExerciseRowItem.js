import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../constants/colors';


const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-evenly', //maximize space between two icons in this row 
    alignItems: 'center', //text and icon are aligned with each other 
    flexDirection: 'row',
    backgroundColor: colors.lightwhite,
  },
  title: {
    color: colors.gray,
    fontSize: 20,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const ExerciseRowItem = ({ text, trashIcon, rightIcon, onPress }) => {
  return (

    <TouchableOpacity
      style={styles.row}
      onPress={onPress}>

      

      <Text style={styles.title}> {text}</Text>

      {trashIcon}
      {rightIcon}

    </TouchableOpacity>
  )
}


export const ExerciseRowSeperator = () => <View style={styles.separator} />;