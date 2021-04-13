import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  StatusBar
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeperator } from '../components/RowItem';


const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.linkblue,
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
    width: screen.width * 0.75,
    borderRadius: 25,
    height: 65,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.bulma,
    fontFamily: colors.fontFamily

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
    width: screen.width * 0.95,
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
    fontSize: 45,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
  textBody: {
    color: colors.bulma,
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 5,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
  textBodyFail: {
    color: colors.dangerred,
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 5,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
  textBodyComplete: {
    color: colors.linkblue,
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 5,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
  queryResultText: {
    color: colors.gray,
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    backgroundColor: colors.linkblue,
    height: 90,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }

});

export default class Dashboard extends Component {


  constructor(props) {
    super(props)
    this.state = {
      workoutCount: [],
      exercisesCompletedCount: [],
      exercisesFailedCount: []
    }

  }

  componentDidMount() {
    const { navigation } = this.props;

    fetch("https://strengthstr-mobile.herokuapp.com/workouts/" + this.props.route.params.myJSON.data.id + "/count")
        .then(data => {
          return data.json()
        },
          err => console.log(err))
        .then(parsedData =>
          this.setState({
            workoutCount: parsedData
          }),
          err => console.log(err))

    this.focusListener = navigation.addListener('focus', () => {

      fetch("https://strengthstr-mobile.herokuapp.com/workouts/" + this.props.route.params.myJSON.data.id + "/count")
        .then(data => {
          return data.json()
        },
          err => console.log(err))
        .then(parsedData =>
          this.setState({
            workoutCount: parsedData
          }),
          err => console.log(err))
    });

  }





  handleLogOut = () => {
    alert("You have logged out!")

    fetch("https://strengthstr-mobile.herokuapp.com/lifter/logout", {
      method: 'GET'
    })
      .then((resp) => {
        return resp.json();
      })
      .then((jsonData) => {
        console.log(JSON.stringify(jsonData));
        this.props.navigation.push('Home')
      })
      .catch((e) => {
        console.log(e);
      })

  }

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={this.handleLogOut}>
            <Entypo name="log-out" size={25} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

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


          <Text style={styles.textHeader}> Hello, {(this.props.route.params.myJSON.data.username).toUpperCase()}!</Text>

          <RowSeperator />

          {/* <Text style={styles.textBody}> Exercises Completed</Text>
          <Text style={styles.queryResultText}> 10</Text>
          <Text style={styles.textBodyFail}> Exercises Failed</Text>
          <Text style={styles.queryResultText}> 5</Text> */}
          <Text style={styles.textBodyComplete}> Workouts Total</Text>
          <Text style={styles.queryResultText}> {this.state.workoutCount.data}</Text>

{/* Need to add queries from backend here to count */}


          {/* <Text>Email: {this.props.route.params.myJSON.data.email}</Text>
            <Text>Weight: {this.props.route.params.myJSON.data.weight} </Text>
            <Text>Age: {this.props.route.params.myJSON.data.age}</Text>
            <Text>User Id: {this.props.route.params.myJSON.data.id}</Text> */}



          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('Workouts', { userData: this.props.route.params.myJSON })
              }>
              <Text style={styles.loginText}>Workouts</Text>
            </TouchableOpacity>
          </View>


        </ImageBackground>


      </View>






    );
  }
};