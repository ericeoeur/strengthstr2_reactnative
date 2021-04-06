import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'

export default class WelcomeScreen extends Component {
    state = {
        email: '',
        password: ''
    }
    constructor(props) {
        super(props);
        // this.state = {email: ''};
        // this.state = {password: ''};
    }



  render() {
    return(
        <View style={{flex:1, backgroundColor: '#6AB04A', paddingTop:200 }}>
         
         <Text>Welcome Screen!!!!</Text>
          
          
        </View>
      );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      marginHorizontal: 20 ,
      color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#218F76',
        marginHorizontal: 20 ,
        paddingVertical: 15,
        marginVertical: 5,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
  });