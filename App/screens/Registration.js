import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';

import colors from '../constants/colors';
import { RegistrationInput } from '../components/RegistrationInput';

const screen = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.80,
    height: screen.width * 0.80,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.75,
    height: screen.width * 0.75,
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30, 
    marginVertical: 20, 
    textAlign: "center"
  
  },
});



export default () => {
  return <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <View style={styles.logoContainer}>

      <Image
        source={require('../assets/images/background.png')}
        style={styles.logoBackground}
        resizeMode="contain"
        />

      <Image
        source={require('../assets/images/ss_barbell_mono.png')}
        style={styles.logo} 
        resizeMode="contain"
        />

</View>

<Text style={styles.textHeader}> StrengthSTR Registration</Text>

        <RegistrationInput 
        text="User Name"
        value="username"
        onButtonPress = {() => alert("Add your name!")}
        onChangeText={text => console.log("text", text)}
        />

        <RegistrationInput 
        text="Email"
        value="email"
        onButtonPress = {() => alert("Add your email!")}
        onChangeText={text => console.log("text", text)}

        />

        <RegistrationInput 
        text="Password"
        value="password"
        onButtonPress = {() => alert("Add your password!")}
        onChangeText={text => console.log("text", text)}

        />

        <RegistrationInput 
        text="Age"
        value="age"
        onButtonPress = {() => alert("Add your age!")}
        keyboardType="numeric"
        onChangeText={text => console.log("text", text)}
        />

        <RegistrationInput 
        text="Height"
        value="height"
        onButtonPress = {() => alert("Add your height!")}
        keyboardType="numeric"
        onChangeText={text => console.log("text", text)}
        />

        <RegistrationInput 
        text="Weight"
        value="Weight"
        onButtonPress = {() => alert("Add your Weight!")}
        keyboardType="numeric"
        onChangeText={text => console.log("text", text)}
        />




   
  </View>
};