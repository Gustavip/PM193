import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../chP.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Pantalla Principal</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});
