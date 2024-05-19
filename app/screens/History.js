import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/category/all')
      .then(response => {
        setCategories(response.data);
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

  const renderCategory = ({ item }) => {
    const [expenses, setExpenses] = useState([]);
    const [loadingExpenses, setLoadingExpenses] = useState(true);

    useEffect(() => {
      axios.get(`http://localhost:3001/expense/all?id=${item.categoryId}`)
        .then(response => {
          setExpenses(response.data);
          setLoadingExpenses(false);
        })
        .catch(error => {
          console.error(error);
          setLoadingExpenses(false);
        });
    }, [item.categoryId]);

    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{item.category}</Text>
        {loadingExpenses ? (
          <Text style={styles.loadingText}>Loading expenses...</Text>
        ) : expenses.length === 0 ? (
          <Text style={styles.noExpensesText}>No expenses for this category</Text>
        ) : (
          <FlatList
            data={expenses}
            renderItem={renderExpense}
            keyExtractor={(expense, index) => index.toString()}
            style={styles.expenseList}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Alex Jonas</Text>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>☰ Transactions</Text>
      </TouchableOpacity>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : categories.length === 0 ? (
        <Text style={styles.noCategoriesText}>There are no categories</Text>
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => index.toString()}
          style={styles.categoryList}
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
  menuText: {
    fontSize: 18,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  noCategoriesText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  noExpensesText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  categoryList: {
    width: '90%',
  },
  categoryContainer: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  expenseList: {
    marginTop: 10,
  },
  expenseContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  expenseText: {
    color: '#fff',
    fontSize: 16,
  },
});
