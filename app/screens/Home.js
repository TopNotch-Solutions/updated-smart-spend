import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/expense/all')
      .then(response => {
        setExpenses(response.data.slice(0, 5)); 
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderExpense = ({ item }) => (
    <View style={styles.expenseContainer}>
      <Text style={styles.expenseText}>Item: {item.item}</Text>
      <Text style={styles.expenseText}>Quantity: {item.quantity}</Text>
      <Text style={styles.expenseText}>Price: N$ {item.price.toFixed(2)}</Text>
      <Text style={styles.expenseText}>Total Price: N$ {item.totalPrice.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, Alex Jonas</Text>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>☰ Dashboard</Text>
      </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <View style={styles.lastcontainer}>
          <Text style={styles.balance}>Monthly limit</Text>
          <Text style={styles.amount}>N$ 0.00</Text>
        </View>
        <View style={styles.lastcontainer}>
          <Text style={styles.balance}>Available limit</Text>
          <Text style={styles.amount}>N$ 0.00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.menuButton2}>
        <Text style={styles.menuText}>Recent transactions</Text>
      </TouchableOpacity>
      
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : expenses.length === 0 ? (
        <Text style={styles.noExpensesText}>There are no expenses for the month</Text>
      ) : (
        <FlatList
          data={expenses}
          renderItem={renderExpense}
          keyExtractor={(item, index) => index.toString()}
          style={styles.expenseList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
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
  lastcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  noExpensesText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  expenseList: {
    width: '90%',
  },
  expenseContainer: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  expenseText: {
    color: '#fff',
    fontSize: 16,
  },
});
