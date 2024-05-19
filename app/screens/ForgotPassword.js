import React,{useState} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text,ScrollView, Keyboard } from 'react-native';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async() =>{
    Keyboard.dismiss(); 
  }
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#000000" /> */}
      {/* <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity> */}
      {/* <Image
        source={logo} // Replace './path_to_your_logo.png' with the path to your logo file
        style={styles.logo}
      /> */}
      <Text style={styles.title}>Forgot Password!</Text>
      <View style={styles.inputContainer}>
        {/* <Image
          source={require('./icon_password.png')} // Replace './icon_password.png' with your password icon
          style={styles.inputIcon}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry={false}
          onChangeText={setEmail}
          value={email}
        />
        
        
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleForgetPassword}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
      
    </View>
  );
};
Keyboard.dismiss(); 
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
    backgroundColor: 'black',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: 'green',
    fontSize: 16,
  }
});