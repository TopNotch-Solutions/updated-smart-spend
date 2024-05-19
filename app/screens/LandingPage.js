import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import logo from '../assets/logo.png'; 
import { useNavigation } from '@react-navigation/native';

export default function LandingPage() {

    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.image}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { marginBottom: 20 }]}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('GetStarted');
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop:50,
    width: 450, 
    height: 450, 
    backgroundColor: "#00000",
  },
  buttonsContainer: {
    width: '60%'
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius:10
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
