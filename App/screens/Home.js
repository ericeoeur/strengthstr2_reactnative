import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import { RegistrationInput } from '../components/RegistrationInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.linkblue,
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
  introButton: {
    width: "75%",
    borderRadius: 25,
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "tan",
  },
  textHeader: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center"
  },
  ImageBackground: { 
    flex: 1, 
    width: screen.width,
    height: screen.height,
    alignItems: "center", 
    justifyContent: 'center'
  },

});



export default ({ navigation }) => {
  return <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ImageBackground
      source={require("../assets/images/tiny_grid.png")}
      imageStyle={{ flex: 1 }}
      resizeMode='repeat'
      style={styles.ImageBackground}
    >

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

      <Text style={styles.textHeader}> StrengthSTR Mobile</Text>

      <Button style={styles.introButton} title="Sign In"
        onPress={() => navigation.push('SignIn')}
      />

      <Button
        style={styles.introButton}
        title="Create An Account"
        onPress={() => navigation.push('Registration')}
      />

    </ImageBackground>
  </View>
};