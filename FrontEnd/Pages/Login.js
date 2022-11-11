/* Libraries */
import { StackActions } from "@react-navigation/native";
import {React, useState, useEffect} from "react";
import { StyleSheet, Text, View,ImageBackground,Dimensions,TextInput,Button, Alert } from 'react-native';
/* Variables and fucntions */
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

/* main function */
export default function Login({navigation}){
  
  /* useState and UseEffect */
  const [Name,setName] = useState(null);
  const [Password,setPassword] = useState(null);
  
  /* Functions */
  function Auth(){
    if (Name == null || Password == null) {
      Alert.alert('Warning','Fill your Details');
      return false;
    }
    if (Name == "Meta" && Password == "Meta") {
      return true;
    }else if(Password != "Meta"){
      Alert.alert('Warning','Worng Details, Check Password');
      return false;
    }else if(Name != "Meta"){
      Alert.alert('Warning','Worng Details, Check Name');
      return false;
    }
  }

  /*main function*/
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <ImageBackground source={require('../images/login.png')}  style={styles.image}>
        <View style={styles.textList}>
          <TextInput style={styles.textInput} placeholder='Enter your E-mail ID' onChangeText={(val) => setName(val)} />
          <TextInput style={styles.textInput} placeholder='Enter your password' onChangeText={(val) => setPassword(val)} />
          <View style={styles.spacing}></View>
          <Button title='Signin' onPress={()=> {
            if (!Auth()) {

              
              navigation.dispatch(StackActions.pop(1));
              navigation.dispatch(
                StackActions.replace("Home")
              );
            } else {
              Alert.alert("Warning","Enter correct details");
            }
          }}/>
        </View>
      </ImageBackground>
    </View>
    );
}

/*Styling*/
const styles = StyleSheet.create({
    image: {
      width:screenWidth,
      height:screenHeight,
    },
    title: {
      marginTop: '30%',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 30,
      alignItems: 'center',
      alignContent: 'center',
    },
    textInput: {
      height: '10%',
      width: '60%',
      backgroundColor: '#FFFFFF',
      alignSelf:'center',
      marginBottom: '5%',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 50,
      paddingStart: 20,
    },
    buttons:{
      width: '50%',
      borderRadius: 50,
    },
    spacing: {
      marginTop: '5%',
    },
    textList:{
      paddingTop: '20%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: '70%',
    },
    container:{
      height:'100%',
      width: '100%',
    }
  });
  