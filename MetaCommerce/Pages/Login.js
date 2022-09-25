/* Libraries */
import React from "react";
import { StyleSheet, Text, View,ImageBackground,Dimensions,TextInput,Button } from 'react-native';
/* Variables and fucntions */
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
/* main function */
export default function Login({navigation}){
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <ImageBackground source={require('../images/login.png')}  style={styles.image}>
        <View style={styles.textList}>
          <TextInput style={styles.textInput} placeholder='Enter your E-mail ID'></TextInput>
          <TextInput style={styles.textInput} placeholder='Enter your password'></TextInput>
          <View style={styles.spacing}></View>
          <Button title='SignUp' onPress={()=>navigation.navigate('SignUp')}/>
          <View style={styles.spacing}></View>
          <Button title='Signin' onPress={()=>navigation.navigate('Home')}/>
        </View>
      </ImageBackground>
    </View>
    );
}

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
  