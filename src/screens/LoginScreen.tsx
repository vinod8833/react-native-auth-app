// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.card}>
        <LoginForm navigation={navigation} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(135deg, #6A11CB, #2575FC)', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#A70C57',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    marginBottom: 30,
  },
  card: {
    width: '90%',
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
