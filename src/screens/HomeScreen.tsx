// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Better Software Engineering</Text>
      {/* You can add an image here if needed */}
      {/* <Image source={require('../assets/your-image.png')} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(135deg, #FF6A00, #FF0A70)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0C64A7', 
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 10, 
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
