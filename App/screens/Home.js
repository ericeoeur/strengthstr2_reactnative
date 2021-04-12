import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';


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
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: 'Avenir-Light'    
  },
  ImageBackground: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    alignItems: "center",
    justifyContent: 'center'
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    height: 110,
  },
  buttonContainers: {
    backgroundColor: colors.blue,
    borderRadius: 30,
    width: "60%",
    height: 75,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: 'center',
    color: 'white'
  },
  buttonContainersRegister: {
    backgroundColor: colors.bulma,
    borderRadius: 30,
    width: "60%",
    height: 75,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: 'center',
    color: 'white'
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Avenir-Light'    
  }

});



export default ({ navigation }) => {


  return <View style={styles.container}>

    <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.push('Options')}>
        <Entypo name="cog" size={32} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>

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

      <TouchableOpacity 
      style={styles.buttonContainers}
      onPress={() => navigation.push('SignIn')}>
      <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonContainersRegister}
      onPress={() => navigation.push('Registration')}
      >
              <Text style={styles.buttonText}>Register</Text>

      </TouchableOpacity>

      {/* <Button
        style={styles.introButton}
        title="Dashboard"
        onPress={() => navigation.push('Dashboard')}
      /> */}

    </ImageBackground>
  </View>
};