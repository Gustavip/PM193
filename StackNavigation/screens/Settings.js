import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Configuración</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#007BFF' }]} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#28A745' }]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 18, marginBottom: 30 },
  button: { padding: 15, borderRadius: 10, marginVertical: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
