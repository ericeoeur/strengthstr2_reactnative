import React, { Component, useState, useEffect } from 'react';
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
  StatusBar,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
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

export default class ExerciseDetail extends Component {
  static navigationOptions = {
    header: null
  };

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      currentExerciseLoaded: false,
      currentExercise: [],
    }
    // this.handleAddExercise = this.handleAddExercise.bind(this)

  }

  componentDidMount() {
    let workoutId = this.props.route.params.workoutId;
    let exerciseId = this.props.route.params.exerciseId;

    fetch("http://localhost:8000/workouts/" + workoutId + "/exercises/" + exerciseId)
      .then(data => {
        return data.json()
      },
        err => console.log(err))
      .then(parsedData =>
        this.setState({
          currentExerciseLoaded: true,
          currentExercise: parsedData.data,
        }),
        err => console.log(err))
  }

 

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <TouchableOpacity>
          <Text style={{
            justifyContent: 'center', alignItems: 'center', padding: 20,
          }}>Test</Text>
        </TouchableOpacity>



        {this.state.currentExerciseLoaded && (
          <View style={{ paddingTop: 30 }}>
           <Text>
             {this.state.currentExercise.lift_name}
           </Text>
          </View>
        )}

        {!this.state.currentExerciseLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> LOADING </Text>
          </View>
        )}
      </View>
    );
  }
};


// export class ExerciseDetails extends React.Component {
//   onPress = () => {
//     console.log(this.props.id)
//     // this.props.navigate('Exercises', {workoutId: this.props.id});
//   };

//   render() {
//     return (
//       <TouchableWithoutFeedback onPress={this.onPress}>
//         <View style={{ paddingTop: 20, alignItems: 'center' }}>
//           <Text>
//             Exercise ID: {this.props.id}
//             lift_name: {this.props.lift_name}
//             note: {this.props.note}
//             reps: {this.props.reps}
//             sets: {this.props.sets}
//             weight: {this.props.weight}
//           </Text>
//         </View>



//       </TouchableWithoutFeedback>
//     )
//   }

// }
