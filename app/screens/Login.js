import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert,Keyboard  } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 

  const handleLogin = async () => {
    Keyboard.dismiss(); 
    if(email===null ){
      Alert.alert('Email empty', "Enter your email");
    }
    if(password===null ){
      Alert.alert('Password empty', "Enter your password");
    }
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email: email,
        password: password
      });
      console.log(response)
      if (response.status === 200) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Wrong Credentials', "Verify email and password");
        throw new Error('Failed to login');
      }
    } catch (error) {
      Alert.alert('Wrong Credentials', "Verify email and password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        secureTextEntry={false}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={()=>{
        handleLogin
      }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GetStarted')} style={styles.signup}>
        <Text style={styles.forgotPasswordText}>Don't have an account? <Text style={styles.register}>Register</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    color: 'black',
    fontSize: 24,
  },
  logo: {
    marginTop:0,
    width: 450, 
    height: 450, 
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputIcon: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 18,
    paddingVertical: 10,
  },
  loginButton: {
    marginTop:15,
    width: "80%",
    alignSelf:"center",
    backgroundColor: 'black',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: "center"
  },
  forgotPasswordText: {
    color: 'grey',
    fontSize: 16,
  },
  signup:{
    marginTop:10,
  },
  register:{
    color:"green"
  }
});