// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, CheckBox } from 'react-native';

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    if (email && password) {
      setMessage('Login Successful');
      navigation.navigate('Home'); 
    } else {
      setMessage('Please enter valid credentials');
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
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          accessibilityLabel="Remember Me checkbox"
        />
        <Text style={styles.label}>Remember Me</Text>
      </View>
      <Button title="Login" onPress={handleLogin} accessibilityLabel="Login button" color="#B82F71" />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#F8F9FA', 
  },
  input: {
    height: 45,
    borderColor: '#FF6A88', 
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333', 
  },
  message: {
    marginTop: 15,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default LoginForm;
