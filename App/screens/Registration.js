import React, { Component, useState } from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import colors from '../constants/colors';
import { RegistrationInput } from '../components/RegistrationInput';
import { color } from 'react-native-reanimated';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    paddingTop: 10,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 15,
    textAlign: "center"
  },
  loginButton: {
    margin: 30,
    height: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 1,
  },


});



export default class Register extends Component  {

  state = {
    username: '', 
    email: '',
    password: '',
    age: 0, 
    weight: 0,
}

 


// Handles the Registration of the user 
userRegister = () => { 
  // alert("Registration Button Pressed"); 
  // const navigation = useNavigation();


  const {username} = this.state;
  const {email} = this.state;
  const {password} = this.state;
  const {age} = this.state;
  const {weight} = this.state;

  console.log(username);

  let lifter = JSON.stringify({
      username: username,
      email: email,
      password: password,
      age: Number(age),
      weight: Number(weight),
  })

  console.log(lifter);

  fetch('http://localhost:8000/lifter/register', {
    method: 'post',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:(lifter)
  })
  .then((response) => response.text())  
    .then((responseJson) =>{
    console.log(responseJson);
    alert("Account Successfully Created!");
    this.props.navigation.goBack()
    })
    .catch((error)=>{
      console.error(error);
      alert(error);
    });
  
}


render () {
 return(
 <View style={styles.container}>
  <ScrollView>

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
      value= {this.username}
      onButtonPress={() => alert("Add your name!")}
      onChangeText={username => this.setState({username})}
    />

    <RegistrationInput
      text="Email"
      value= {this.email}
      onButtonPress={() => alert("Add your email!")}
      onChangeText={email => this.setState({email})}

    />

    <RegistrationInput
      text="Password"
      value= {this.password}
      onButtonPress={() => alert("Add your password!")}
      onChangeText={password => this.setState({password})}

    />

    <RegistrationInput
      text="Age"
      value= {this.age}
      onButtonPress={() => alert("Add your age!")}
      keyboardType="numeric"
      onChangeText={age => this.setState({age})}
    />

    <RegistrationInput
      text="Weight"
      value= {this.weight}
      onButtonPress={() => alert("Add your Weight!")}
      keyboardType="numeric"
      onChangeText={weight => this.setState({weight})}
    />

    <TouchableOpacity
      onPress={this.userRegister}
      style={styles.loginButton}>
      <Text style={{
        color: color.blue, justifyContent: 'center', alignItems: 'center', padding: 20,
      }}>Signup</Text>
    </TouchableOpacity>




  </ScrollView>

</View>
 )

}


};