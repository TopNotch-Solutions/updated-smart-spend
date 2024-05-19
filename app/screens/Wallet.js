import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Wallet() {
  const [isLimitSet, setLimit] = useState(true);
  const [isCategorySet, setCategoryLimit] = useState(true);
  const [isExpenses, setExpensesLimit] = useState(true);
  return (
    <View style={styles.container}>
      {/* <Image
        source={logo} 
        style={styles.logo}
      /> */}
      <Text style={styles.greeting}>Alex Jonas</Text>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>☰ Budget</Text>
      </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <View style={styles.lastcontainer}>
            <Text style={styles.amount}>Set monthly limit</Text>
            {isLimitSet ?<View></View> : <Text style={styles.amount}>N$ 0.00</Text>}
        </View>
        {isCategorySet ? <View></View> : <View>
        <View style={styles.lastcontainer}>
            <Text style={styles.amount}>Set category</Text>
        
        </View>
        </View>
        }
        {isExpenses ? <View></View> : <View>
        <View style={styles.lastcontainer}>
            <Text style={styles.amount}>Set expenses</Text>
        
        </View>
        </View>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5', // This is the background color of the screen
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  greeting: {
    marginTop:80,
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  menuButton: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  menuButton2: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
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
  balanceContainer1: {
    width: '90%',
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
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
    marginBottom:10,
    flexDirection: 'row', // Aligns children horizontally
    justifyContent: 'space-between', // Puts space between children
    alignItems: 'center', // Centers children vertically in the container
     // Adds padding around the children
    // Optional background color for the container
    width: '100%', // Sets the width of the container to fill its parent
  },
  balance: {
    fontSize: 16, // Set the font size for the balance text
    color: '#fff', // Sets the text color
  },
  amount: {
    fontSize: 16, // Set the font size for the amount
    fontWeight: 'bold', // Makes the amount text bold
    color: '#fff', // Sets the text color
  }
});