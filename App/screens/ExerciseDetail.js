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
  ActivityIndicator
} from 'react-native';


import colors from '../constants/colors';
import { TextInput } from 'react-native-gesture-handler';
import { ExerciseInput, ExerciseNumberInput } from '../components/ExerciseInput';
import NumericInput from 'react-native-numeric-input';


import { Ionicons } from '@expo/vector-icons';

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
    marginBottom: 5,
  },
  logoBackground: {
    marginTop: 10,
    width: screen.width / 0.55,
    height: screen.width * 0.55,
  },
  textOverlayContainer: {
    position: 'absolute',
    textAlign: "center",
    width: screen.width * 0.5,
    height: screen.width * 0.3,
  },
  textOverlayLift: {
    position: 'absolute',
    textAlign: "center",
    width: screen.width * 0.5,
    height: screen.width * 0.9,
    paddingTop: 25,
    fontSize: 30,
    fontFamily: colors.fontFamily,
    color: colors.blue,
    fontWeight: 'bold',

  },
  textOverlayDetails: {
    position: 'absolute',
    textAlign: "center",
    paddingTop: 70,
    width: screen.width * 0.5,
    height: screen.width * 0.9,
    fontSize: 25,
    fontFamily: colors.fontFamily
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
  setCompletedContainer: {
    marginBottom: 20,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },

  completedLiftButton: {
    width: screen.width * 0.45,
    borderRadius: 25,
    height: 55,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.successgreen,
    fontFamily: colors.fontFamily
  },
  failedLiftButton: {
    width: screen.width * 0.45,
    borderRadius: 25,
    height: 55,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.dangerred,
    fontFamily: colors.fontFamily
  },
  numericInputContainer: {
    marginBottom: 20,
    alignItems: "center",
    textAlign: "left",
    
  },
  liftButtonText: {
    color: colors.lightwhite,
    fontSize: 20,
    textAlign: "left",
    marginBottom: 5,
    marginTop: 5
  },
  numericInputText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "left",
    marginBottom: 5,
    marginTop: 5
  },
  buttonContainersRegister: {
    backgroundColor: colors.bulma,
    borderRadius: 30,
    width: "60%",
    height: 60,
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
  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 10
  },
  addExerciseButton: {
    width: screen.width * 0.85,
    borderRadius: 25,
    height: 55,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.bulma,
    fontFamily: colors.fontFamily
  },

 

  workoutButtonText: {
    fontSize: 30,
    color: 'white',
    fontFamily: colors.fontFamily,

  },
  textBody: {
    color: colors.blue,
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: 'Avenir-Light'
  },

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
      lift_name: '',
      weight: this.props.route.params.weight,
      sets: this.props.route.params.sets,
      reps: this.props.route.params.reps,
      note: '',
      completed: false
    }
    this.handleUpdateExercise = this.handleUpdateExercise.bind(this)

  }

  componentDidMount() {
    let workoutId = this.props.route.params.workoutId;
    let exerciseId = this.props.route.params.exerciseId;

    fetch("https://strengthstr-mobile.herokuapp.com/workouts/" + workoutId + "/exercises/" + exerciseId)
      .then(data => {
        return data.json()
      },
        err => console.log(err))
      .then(parsedData =>
        this.setState({
          currentExerciseLoaded: true,
          currentExercise: parsedData.data,
          lift_name: parsedData.data.lift_name,
          weight: parsedData.data.weight,
          sets: parsedData.data.sets,
          reps: parsedData.data.reps,
          note: parsedData.data.note,
          completed: parsedData.data.completed
        }),
        err => console.log(err))
  }

  handleUpdateExercise() {
    let workoutId = this.props.route.params.workoutId;
    let exerciseId = this.props.route.params.exerciseId;

    const { lift_name } = this.state;
    const { weight } = this.state;
    const { sets } = this.state;
    const { reps } = this.state;
    const { note } = this.state;
    const { completed } = this.state;

    // console.log(username);

    let exercise = JSON.stringify({
      lift_name: lift_name,
      weight: Number(weight),
      sets: Number(sets),
      reps: Number(reps),
      note: note,
      completed: Boolean(completed),
    })

    console.log(exercise);

    fetch('https://strengthstr-mobile.herokuapp.com/workouts/' + workoutId + '/exercises/' + exerciseId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: (exercise)
    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        alert("Exercise Successfully Created!");
        // this.props.route.params.componentDidMount();
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>



        {this.state.currentExerciseLoaded && (
          <View style={{ paddingTop: 30 }}>


            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/background.png')}
                style={styles.logoBackground}
                resizeMode="contain"
              />

              <View style={styles.textOverlayContainer}>
                <Text style={styles.textOverlayLift} resizeMode="contain"> {this.state.lift_name}
                </Text>
                <Text style={styles.textOverlayDetails} resizeMode="contain"> {this.state.sets} x {this.state.reps} @ {this.state.weight}
                </Text>
              </View>
            </View>
          </View>
        )}

        {!this.state.currentExerciseLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> LOADING </Text>
          </View>
        )}

        <View style={styles.setCompletedContainer}>

        <TouchableOpacity
            style={styles.completedLiftButton}
            onPress={ () => {alert("Completed!")}}>
            <Text style={styles.liftButtonText}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.failedLiftButton}
            onPress={() => {alert("Failed!")}}>
            <Text style={styles.liftButtonText}>Failed</Text>
          </TouchableOpacity>
        </View> 


        <ExerciseInput
          text="Lift Name"
          value={this.state.lift_name}
          autoCapitalize='none'
          onButtonPress={() => alert("Add your name!")}
          onChangeText={lift_name => this.setState({ lift_name })}
        />

        <SafeAreaView style={styles.numericInputContainer}>
          <Text style={styles.numericInputText}>Weight</Text>
          <NumericInput
            totalWidth={screen.width * 0.9}
            totalHeight={40}
            value={this.state.weight}
            onChange={weight => this.setState({ weight })}
            step={5}
          />
          <Text style={styles.numericInputText}>Sets</Text>
          <NumericInput
            totalWidth={screen.width * 0.9}
            totalHeight={40}
            value={this.state.sets}
            onChange={sets => this.setState({ sets })}
          />
          <Text style={styles.numericInputText}>Reps</Text>
          <NumericInput
            totalWidth={screen.width * 0.9}
            totalHeight={40}
            value={this.state.reps}
            onChange={reps => this.setState({ reps })}
          />
        </SafeAreaView>

        <ExerciseInput
          text="Note"
          value={this.state.note}
          autoCapitalize='none'
          onButtonPress={() => alert("Add your name!")}
          onChangeText={note => this.setState({ note })}
        />


        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.addExerciseButton}
            onPress={this.handleUpdateExercise}>
            <Text style={styles.workoutButtonText}>Save Exercise</Text>
          </TouchableOpacity>
        </View>



        {/* <TouchableOpacity
          onPress={this.handleUpdateExercise}
          style={styles.loginButton}>
          <Text style={{
            color: colors.blue, justifyContent: 'center', alignItems: 'center', padding: 20,
          }}>Create Exercise</Text>
        </TouchableOpacity> */}



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
