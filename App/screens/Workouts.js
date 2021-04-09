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
  }

  componentDidMount() {
    fetch("http://localhost:8000/workouts/")
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
  }

  handleAddWorkout() {
    alert("add workout");
    fetch('http://localhost:8000/workouts/', {
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

        // console.log(resJson)
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


  



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <TouchableOpacity
          onPress={this.handleAddWorkout}
        >
          <Text style={{
            justifyContent: 'center', alignItems: 'center', padding: 20,
          }}>Add Workout</Text>
        </TouchableOpacity>

        {this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.workouts.data}
              renderItem={({ item }) =>
                <WorkoutItem
                  navigate={navigate}
                  id={item.id}
                  image={item.image}
                  note={item.note}
                />

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


export class WorkoutItem extends React.Component {
  onPress = () => {
    this.props.navigate('Exercises', { workoutId: this.props.id });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ paddingTop: 20, alignItems: 'center' }}>
          <Text>
            Workout ID: {this.props.id}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}











// export default class Workouts extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       workouts: []
//     }
//     this.handleWorkouts = this.handleWorkouts.bind(this);
//   }


  // componentDidMount() {
  //   this.handleWorkouts()
  // }
  // const [list, setList] = useState([]);

//   useEffect(() =>
//   fetch("http://localhost:8000/workouts/")
//   .then(data => {
//     return data.json()
//   },
//     err => console.log(err))
//   .then(parsedData =>
//     this.setState({ workouts: parsedData }),
//     err => console.log(err))
// );


//   handleLogOut = () => {
//     alert("You have logged out!")

//     fetch("http://localhost:8000/lifter/logout", {
//       method: 'GET'
//     })
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((jsonData) => {
//         console.log(JSON.stringify(jsonData));
//         this.props.navigation.push('Home')
//       })
//       .catch((e) => {
//         console.log(e);
//       })

//   }

//   handleWorkouts = () => {
//     fetch("http://localhost:8000/workouts/")
//       .then(data => {
//         return data.json()
//       },
//         err => console.log(err))
//       .then(parsedData =>
//         this.setState({ workouts: parsedData }),
//         err => console.log(err))

//   }



//   render() {

//     //Maybe need an async feature or a promise? 
//     console.log("workout")
//     console.log(this.state.workouts.data)
//     console.log("workouts")

//     return (
//       <View style={styles.container}>
//         <ImageBackground
//           source={require("../assets/images/tiny_grid.png")}
//           imageStyle={{ flex: 1 }}
//           resizeMode='repeat'
//           style={styles.ImageBackground}
//         >

//           <ScrollView>
//               <Text>Workouts Below</Text>
//           </ScrollView>

//       {/* {

//            this.state.workouts.data.map(workout => {
//             return (
//               <View style={styles.container}>
//                 <Text>WORKOUT</Text>
//               </View>
//             )
//           })
//       }  */}
//         </ImageBackground>
//       </View>

//     );



//   }
// };