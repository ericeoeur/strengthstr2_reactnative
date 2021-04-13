import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import colors from '../constants/colors';
const screen = Dimensions.get('window');


export default class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  // Handle the Login Button Action here // 
  handleLogin = () => {
    fetch("https://strengthstr-mobile.herokuapp.com/lifter/login", {
      method: 'POST',

      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then((resp) => {
        return resp.json();
      })
      .then((jsonData) => {
        console.log(JSON.stringify(jsonData));
        if (!Object.keys(jsonData["data"]).length) {
          alert("Wrong username/password. Try again");
        }
        else {
          alert("Login Successful!")
          this.props.navigation.navigate('Dashboard', { myJSON: jsonData }
          );
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render() {
    return (
      <View style={styles.container}>

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



          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              autoCapitalize='none'
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              autoCapitalize='none'
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.textHeader} onPress={() => this.props.navigation.push('Registration')}> Don't have an account?</Text>
        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: colors.blue,
    borderRadius: 30,
    width: "65%",
    height: 75,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontFamily: colors.fontFamily,
    color: 'white',
    fontSize: 20
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 65,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.bulma,
    fontFamily: colors.fontFamily,

  },
  loginText: {
    fontSize: 35,
    color: 'white',
    fontFamily: colors.fontFamily,
    fontWeight: 'bold',

  },

  ImageBackground: { flex: 1, width: '100%', height: '125%', alignItems: "center" },

  buttonContainers: {
    backgroundColor: colors.blue,
    borderRadius: 30,
    width: "70%",
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
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
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
    fontSize: 20,
    marginVertical: 30,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
});


