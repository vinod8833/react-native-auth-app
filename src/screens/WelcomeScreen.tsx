// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.glassCard}>
        <Text style={styles.title}>Welcome to Better Software</Text>
        <Text style={styles.subtitle}>Your journey begins here:</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            onPress={() => navigation.navigate('Sign Up')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(135deg, #74EBD5, #9FACE6)', 
  },
  glassCard: {
    width: '90%',
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, // For Android
    alignItems: 'center',
    backdropFilter: 'blur(10px)', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D65C97',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  loginButton: {
    backgroundColor: 'linear-gradient(135deg,rgb(207, 76, 56), #FF6A88)', 
  },
  signUpButton: {
    backgroundColor: 'linear-gradient(135deg, #96E6A1,rgb(172, 221, 59))', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default WelcomeScreen;
