import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem } from '../components/RowItem';

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
  },
  top: {
    flex: 1,
    alignItems: "center",
    marginBottom: 100
  },
  addWorkoutButton: {
    width: screen.width * 0.85,
    borderRadius: 25,
    height: 65,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.blue,
    fontFamily: colors.fontFamily
  },

  workoutButtonText: {
    fontSize: 30,
    color: 'white',
    fontFamily: colors.fontFamily,
  },

});


export default class Workouts extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      workouts: [],
      listLoaded: false,
      currentWorkout: [],
      exerciseLoaded: false
    }
    this.handleAddWorkout = this.handleAddWorkout.bind(this)
    this.handleDeleteWorkout = this.handleDeleteWorkout.bind(this)
  }

  componentDidMount() {
    const { navigation } = this.props;

    fetch("https://strengthstr-mobile.herokuapp.com/workouts/")
      .then(data => {
        return data.json()
      },
        err => console.log(err))
      .then(parsedData =>
        this.setState({
          listLoaded: true,
          workouts: parsedData
        }),
        err => console.log(err))

    this.focusListener = navigation.addListener('focus', () => {

      fetch("https://strengthstr-mobile.herokuapp.com/workouts/")
        .then(data => {
          return data.json()
        },
          err => console.log(err))
        .then(parsedData =>
          this.setState({
            listLoaded: true,
            workouts: parsedData
          }),
          err => console.log(err))
    });
  }

// Add a workout 
  handleAddWorkout() {
    fetch('https://strengthstr-mobile.herokuapp.com/workouts/', {
      method: 'POST',
      body: JSON.stringify({
        note: '',
        image: '',
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(res => res.json())
      .then((resJson) =>
        this.setState({
          exerciseLoaded: true,
          currentWorkout: resJson.data
        }),
        err => console.log(err)

      ).then((resJson) =>
        this.props.navigation.navigate('Exercises', { workoutId: this.state.currentWorkout.id })

      ).then(
        this.componentDidMount()

      ).catch(error => console.log({ 'Error': error }))
  }

  // == Delete a workout and associated exercises based off Workout ID== //
  handleDeleteWorkout(id) {
    console.log("deleted button")
    console.log(id)

    fetch('https://strengthstr-mobile.herokuapp.com/workouts/' + id + "/exercises", {
      method: 'DELETE',
    }).then(res => {
      console.log("deleted exercises")
    }).then(
      fetch('https://strengthstr-mobile.herokuapp.com/workouts/' + id, {
        method: 'DELETE',
      }).then(res => {
        console.log("deleted Workout")
        this.componentDidMount()
      })
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <View style={styles.top}>
          <TouchableOpacity
            style={styles.addWorkoutButton}
            onPress={this.handleAddWorkout}>
            <Text style={styles.workoutButtonText}>Add Workout</Text>
          </TouchableOpacity>
        </View>

        {this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.workouts.data}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) =>

                <RowItem
                  text={"Workout " + item.created_at}
                  onPress={() => this.props.navigation.navigate('Exercises', { workoutId: item.id })}

                  trashIcon={
                    <Ionicons
                      name="trash-bin-outline"
                      onPress={() => this.handleDeleteWorkout(item.id)}
                      size={30}
                      color={colors.dangerred} />
                  }

                  rightIcon={
                    <Ionicons
                      name="chevron-forward-outline"
                      onPress={() => this.props.navigation.navigate('Exercises', { workoutId: item.id })}
                      size={30}
                      color={colors.bulma} />
                  } />

              }
            />
          </View>
        )}

        {!this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> LOADING </Text>
          </View>
        )}
      </View>
    );
  }
};
