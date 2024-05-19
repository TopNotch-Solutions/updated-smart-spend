import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import GetStarted from './screens/GetStarted';
import ForgotPassword from './screens/ForgotPassword';
import LandingPage from './screens/LandingPage';
import Tabs from './screens/Tabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerTitle: ''}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle: ''}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
