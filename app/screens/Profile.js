import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function Profile() {

  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [changePassword, setChangePassword] = useState(false);


  const handleChangePassword =()=>{
    if(changePassword == true){
      Keyboard.dismiss();
      setPassword('');
      setComfirmPassword('');
    }
    setChangePassword(!changePassword);
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.greeting}>My Profile</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰ User details</Text>
        </TouchableOpacity>


        {/* 
        This is where the map function has to come in. To loop through that different elements in the database!!!
        */}
        <View style={styles.balanceContainer}>
          <View style={styles.lastcontainer2}>
            <Text style={styles.amount}>First name</Text>
            <Text style={styles.amount}>Alex</Text>
          </View>
          <View style={styles.lastcontainer2}>
            <Text style={styles.amount}>Last name</Text>
            <Text style={styles.amount}>Joseph</Text>
          </View>
          <View style={styles.lastcontainer2}>
            <Text style={styles.amount}>Email</Text>
            <Text style={styles.amount}>Joseph@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton1}>
          <Text style={styles.menuText}><MaterialIcons
            name={'settings'}
            size={30}
            color={"black"}

          />Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton1} onPress={handleChangePassword}>
          <Text style={styles.menuText}> Change password</Text>
        </TouchableOpacity>
          {changePassword ? <View>
            <View style={styles.balanceContainer}>
          <View style={styles.lastcontainer2}>
            <Text style={styles.amount}>Password</Text>
          </View>
          <View style={styles.lastcontainer2}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}
            />
          </View>
          <View style={styles.lastcontainer2}>
            <Text style={styles.amount}>Confirm Password</Text>
          </View>
          <View style={styles.lastcontainer2}>
            <TextInput
              style={styles.input}
              placeholder="Comfirm passord"
              onChangeText={setComfirmPassword}
              secureTextEntry={true}
              value={comfirmPassword}
            />
          </View>
          <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Update</Text>
        </TouchableOpacity>
        </View>
          </View>:<View></View>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5', // This is the background color of the screen
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 18,
    padding: 10,
    color: "#fff"
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  greeting: {
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  menuButton: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  menuButton1: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10
  },
  menuText: {
    fontSize: 18,
  },
  balanceContainer: {
    width: '90%',
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  balance: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  amount: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lastcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  lastcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20
  },
  balance: {
    fontSize: 16,
    color: '#fff',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  proceedButton: {
    alignItems:"center",
    width:"100%",
    borderColor:'#fff',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  proceedButtonText: {
    color: 'black',
    fontSize: 18,
  }
});
