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

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.linkblue,
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
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    backgroundColor: colors.linkblue,
    height: 110,
  }

});



export default class Dashboard extends Component {

  handleLogOut = () => { 
    alert("You have logged out!")

    fetch("http://localhost:8000/lifter/logout", {
      method: 'GET'
    })
      .then((resp)=> {
        return resp.json(); 
      })
      .then((jsonData) => {
        console.log(JSON.stringify(jsonData));
        this.props.navigation.push('Home')
      })

      .catch((e)=>{
        console.log(e);
    })

  }


  render() {
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




          <ScrollView>
            <Text>This is where the dashboard for TEST will be</Text>
            {/* <Text>This is where the dashboard for {this.props.route.params.myJSON.data.username} will be</Text> */}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
};


// export default class Dashboard extends Component  {

//   render() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView>
//         <Text>This is where the dashboard will be</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
//   }
// };