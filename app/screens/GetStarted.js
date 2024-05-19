import React,{useState} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text,ScrollView } from 'react-native';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function GetStarted() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#000000" /> */}
      
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Start your smart spending</Text>
      <TextInput
        style={styles.input}
        placeholder="First name"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        onChangeText={setLastName}
        value={lastName}
       
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    marginTop:10,
    fontSize: 38,
    alignSelf: "center",
    fontWeight: 'bold',
    alignItems:"center"
  },
  subtitle:{
    marginBottom:60,
    alignSelf: "center",
    fontWeight: 'bold',
    alignItems:"center"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
  },
  proceedButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 18,
  }
});