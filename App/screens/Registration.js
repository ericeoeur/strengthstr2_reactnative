import React, { Component } from 'react';
import { View, StyleSheet,  Image, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';

import colors from '../constants/colors';
import { RegistrationInput } from '../components/RegistrationInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logoBackground: {
    width: screen.width / 0.50,
    height: screen.width * 0.50,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  textHeader: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 0,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
  loginButton: {
    margin: 30,
    height: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonContainers: {
    backgroundColor: colors.bulma,
    borderRadius: 30,
    width: "50%",
    height: 50,
    marginTop: 20, 
    marginBottom: 20,
    alignItems: "center",
    justifyContent: 'center',
    color: 'white'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Avenir-Light'
  }

});

export default class Register extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    age: 0,
    weight: 0,
  }

  userRegister = () => {
    const { username } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    const { age } = this.state;
    const { weight } = this.state;

    let lifter = JSON.stringify({
      username: username,
      email: email,
      password: password,
      age: Number(age),
      weight: Number(weight),
    })

    fetch('https://strengthstr-mobile.herokuapp.com/lifter/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: (lifter)
    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        alert("Account Successfully Created!");
        this.props.navigation.goBack()
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });

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



            <Text style={styles.textHeader}> StrengthSTR Registration</Text>

            <RegistrationInput
              text="User Name"
              value={this.username}
              autoCapitalize='none'
              onButtonPress={() => alert("Add your name!")}
              onChangeText={username => this.setState({ username })}
            />

            <RegistrationInput
              text="Email"
              value={this.email}
              autoCapitalize='none'
              onButtonPress={() => alert("Add your email!")}
              onChangeText={email => this.setState({ email })}

            />

            <RegistrationInput
              text="Password"
              value={this.password}
              autoCapitalize='none'
              onButtonPress={() => alert("Add your password!")}
              onChangeText={password => this.setState({ password })}

            />

            <RegistrationInput
              text="Age"
              value={this.age}
              autoCapitalize='none'
              onButtonPress={() => alert("Add your age!")}
              keyboardType="numeric"
              onChangeText={age => this.setState({ age })}
            />

            <RegistrationInput
              text="Weight"
              value={this.weight}
              autoCapitalize='none'
              onButtonPress={() => alert("Add your Weight!")}
              keyboardType="numeric"
              onChangeText={weight => this.setState({ weight })}
            />

            <TouchableOpacity
              onPress={this.userRegister}
              style={styles.buttonContainers}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>


          </ImageBackground>

      </View>
    )

  }


};