// src/components/SignUpForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    if (email && password && password === confirmPassword) {
      setMessage('Sign Up Successful');
    } else {
      setMessage('Please ensure all fields are filled correctly');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        accessibilityLabel="Email input"
        accessibilityRole="textbox"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        accessibilityLabel="Password input"
        accessibilityRole="textbox"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        accessibilityLabel="Confirm Password input"
        accessibilityRole="textbox"
      />
      <Button title="Sign Up" onPress={handleSignUp} accessibilityLabel="Sign Up button" color="#4C8BF5" />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#E6F0FF', 
  },
  input: {
    height: 45,
    borderColor: '#4C8BF5', 
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  message: {
    marginTop: 15,
    color: '#4C8BF5', 
    fontWeight: 'bold',
  },
});

export default SignUpForm;
