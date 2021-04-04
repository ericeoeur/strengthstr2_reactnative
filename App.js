import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, TextInput, InputView, TouchableOpacity } from 'react-native';

export default function App() {
  let x = 1;
  let z = 2;
  console.log("App Working!");
  // const handlePress = () => console.log("Text Pressed");
  // console.log(require("./assets/favicon.png"));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  return (
    <SafeAreaView style={styles.container}>

      <Text numberOfLines={1}>
        StrengthSTR
      </Text>

      <Image
        source={require("./assets/ss_barbell_mono.png")}
        style={styles.image}
      />


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>





    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 20,
    width: 300,
    height: 220,
  },
  inputView: {
    backgroundColor: "lightblue",
    borderRadius: 30,
    width: "60%",
    height: 75,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  loginBtn: {
    width:"75%", 
    borderRadius:25, 
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20, 
    backgroundColor: "tan",
  }



});


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