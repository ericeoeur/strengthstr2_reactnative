import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, TextInput, InputView, TouchableOpacity, ImageBackground, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import WelcomeScreen from './components/welcome';

import Options from './screens/Options'
import Home from './screens/Home'

import Navigation from "./config/Navigation"; 

// export default () => <Options />;
// export default () => <Home />;
export default () => <Navigation />


// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {/* <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> */}

//       <Button
//         title="Welcome"
//         onPress={() => navigation.navigate('WelcomeScreen')}
//       />

//       <Button
//         title="Sign In"
//         onPress={() => navigation.navigate('SignIn')}
//       />

//       <Button
//               title="Create An Account"
//               onPress={() => navigation.navigate('SignIn')}
//             />



//     </View>
//   );
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate('Home', { post: postText });
//         }}
//       />
//     </>
//   );
// }


// const Stack = createStackNavigator();




// export default function App() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
      
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
//         <Stack.Screen name="CreatePost" component={CreatePostScreen} />
//         <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//         <Stack.Screen name="SignIn" component={SignIn} />
        
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   image: {
//     marginTop: 100,
//     marginBottom: 20,
//     width: 300,
//     height: 220,
//   },
//   inputView: {
//     backgroundColor: "lightblue",
//     borderRadius: 30,
//     width: "60%",
//     height: 75,
//     marginBottom: 20,
//     alignItems: "center",
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//   },

//   loginBtn: {
//     width: "75%",
//     borderRadius: 25,
//     height: 50,
//     padding: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     backgroundColor: "tan",
//   },

//   ImageBackground: { flex: 1, width: '100%', height: '125%', alignItems: "center" },



// });





//What was in the return previously 
      // {/* <Text numberOfLines={1} onPress={handlePress}>Hi Matt! I love you a lot!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae earum at accusantium, illum illo amet repellendus dolore libero doloremque porro ad vero possimus. Illo rem quia ipsa, ullam nemo in?</Text>
      // <StatusBar style="auto" /> */}

      // <Text>Hello React Native!!</Text>
      // <TouchableHighlight onPress={() => console.log("Image Tapped")}>

      // <Image 
      // blurRadius={4}
      // source={{  
      //   width: 200, 
      //   height: 300,
      //   uri: "https://www.nme.com/wp-content/uploads/2016/12/POTY_Pikachu_3.jpg"}} />

      // </TouchableHighlight>


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { 
//           createSwitchNavigator,
//           createAppContainer,
//         } from '@react-navigation/native';

// import SignIn from './components/SignIn';
// // import DashboardScreen from './components/DashboardScreen';

// // TODO:
// // redirect user to dashboard if already in AsyncStorage

// const AppSwitchNavigator = createSwitchNavigator({
//   SignIn: {screen: SignIn},
//   // Dashboard: {screen: DashboardScreen}
// }, {
//   initialRouteName: "Welcome"
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);
// class App extends React.Component {

//   render() {
//     return (
//       // <AppContainer/>
//       <View>
//         <Text>Test</Text>
//       </View>
//     );
//   }
// }

// export default App;