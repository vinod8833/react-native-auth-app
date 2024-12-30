// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login', headerTitleAlign: 'center' }} 
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up', headerTitleAlign: 'center' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home', headerTitleAlign: 'center' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;