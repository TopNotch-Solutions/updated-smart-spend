import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import History from './History';
import Wallet from './Wallet';
import Profile from './Profile';
import { MaterialIcons,FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName='Home'screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#000000', // Active icon color
      tabBarInactiveTintColor: 'grey', // Inactive icon color
    }} 
    
    >
      <Tab.Screen name="Home" component={Home}  options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons 
              name={focused ? 'home' : 'home'} 
              size={30} 
              color={color} 
              
            />
          )
        }} />
      <Tab.Screen name="Wallet" component={Wallet}  options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons 
              name={focused ? 'wallet' : 'wallet'} 
              size={30} 
              color={color} 
              
            />
          )
        }} />
      <Tab.Screen name="History" component={History}  options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons 
              name={focused ? 'history' : 'history'} 
              size={30} 
              color={color} 
              
            />
          )
        }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome 
              name={focused ? 'user-circle' : 'user-circle'} 
              size={30} 
              color={color} 
              
            />
          )
        }} />
    </Tab.Navigator>
  );
}
