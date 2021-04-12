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

import { useFocusEffect } from '@react-navigation/native';
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

export default class Exercises extends Component {
  static navigationOptions = {
    header: null
  };


  constructor(props) {
    super(props)
    this.state = {
      exercises: [],
      exerciselistLoaded: false,
      currentExerciseLoaded: false,
      currentExercise: [],
      workoutId: this.props.route.params.workoutId
    }
    this.handleAddExercise = this.handleAddExercise.bind(this)
    this.handleDeleteExercise = this.handleDeleteExercise.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

  }

  componentDidMount() {
    let workoutId = this.props.route.params.workoutId;

    fetch("http://localhost:8000/workouts/" + workoutId + "/exercises")
      .then(data => {
        return data.json()
      },
        err => console.log(err))
      .then(parsedData =>
        this.setState({
          exerciselistLoaded: true,
          exercises: parsedData,
        }),
        err => console.log(err))
  }




  

  handleAddExercise() {
    console.log(this.state.workoutId);
    fetch('http://localhost:8000/workouts/' + this.state.workoutId + "/exercises", {
      method: 'POST',
      body: JSON.stringify({
        lift_name: '',
        weight: 0,
        sets: 0,
        reps: 0,
        note: '',
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(res => res.json())
      .then((resJson) =>

        // console.log(resJson)

        this.setState({
          currentExerciseLoaded: true,
          currentExercise: resJson.data
        }),
        err => console.log(err)

      ).then((resJson) =>
        this.props.navigation.navigate('ExerciseDetail', { exerciseId: this.state.currentExercise.id, 
        workoutId: this.state.workoutId,
        componentDidMount: this.componentDidMount.bind(this)
       })
        // console.log("added exercise")



      ).then(
        this.componentDidMount()

      ).catch(error => console.log({ 'Error': error }))
  }


   // == Delete a workout and associated exercises based off Workout ID== //
   handleDeleteExercise(id) {
    console.log("deleted button")
    console.log(id)

    fetch('http://localhost:8000/workouts/' + this.state.workoutId + "/exercises/" +id, {
      method: 'DELETE',
    }).then(res => {
      console.log("deleted exercise")
    }).then(res => {
      this.componentDidMount()
    })
    
  }



  render() {
    const { navigate } = this.props.navigation;

    

    return (
      <View>

        <TouchableOpacity
          onPress={this.handleAddExercise}
        >
          <Text style={{
            justifyContent: 'center', alignItems: 'center', padding: 20,
          }}>Add Exercise</Text>
        </TouchableOpacity>



        {this.state.exerciselistLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.exercises.data}
              renderItem={({ item }) =>
                <ExerciseItem
                  navigate={navigate}
                  exerciseId={item.id}
                  workoutId={this.state.workoutId}
                  lift_name={item.lift_name}
                  note={item.note}
                  reps={item.reps}
                  sets={item.sets}
                  weight={item.weight}
                  handleDeleteExercise={this.handleDeleteExercise.bind(this)}
                  componentDidMount={this.componentDidMount.bind(this)}
                />

              }
            />
          </View>
        )}

        {!this.state.exerciselistLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> LOADING </Text>
          </View>
        )}
      </View>
    );
  }
};


export class ExerciseItem extends React.Component {


  onPress = () => {
    console.log(this.props.exerciseId)
    this.props.navigate('ExerciseDetail', { 
      exerciseId: this.props.exerciseId, 
      workoutId: this.props.workoutId, 
      weight: this.props.weight, 
      sets: this.props.sets, 
      reps: this.props.reps,
      componentDidMount: this.props.componentDidMount
    });
  };

  onDelete = () => {

    this.props.handleDeleteExercise(this.props.exerciseId)


  }




  render() {
    return (

      <View style={{ paddingTop: 20, alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Text>
            Exercise ID: {this.props.exerciseId}
            lift_name: {this.props.lift_name}
            note: {this.props.note}
            reps: {this.props.reps}
            sets: {this.props.sets}
            weight: {this.props.weight}
          </Text>
        </TouchableWithoutFeedback>

        <TouchableOpacity onPress={this.onDelete}>
          <Ionicons name="trash" size={25} color={colors.blue} />
        </TouchableOpacity>

      </View>







    )
  }

}
