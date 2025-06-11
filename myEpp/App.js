
// Zona 1 : lugar de las importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


// Componente personalizado para mostrar texto
const Texto = (props) => {
  const { contenido } = props
  return (<Text>{contenido}</Text>)
  
}
// zona 2 main 
export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido="Hola" />
      <Texto contenido="mundo" />
      <Texto contenido="React Native" />
      <Button title="Precionar"> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

// Zona 3 : de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
