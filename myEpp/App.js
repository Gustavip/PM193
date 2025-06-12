
// Zona 1 : lugar de las importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';



// Componente personalizado para mostrar texto
const Texto = () => {
  const [contenido,setContenido]=useState('Hola mundo')
  const actualizaTexto=()=>{setContenido('Estado modificado')}
  return(
  <Text onPress={actualizaTexto}> {contenido} </Text>
  

  )
}


// zona 2 main 
export default function App() {
  const [contenidoBoton, setContenidoBoton] = useState('Presionar');
  const actualizaTexto = () => { setContenidoBoton('Ubu'); }
  return (
    <View style={styles.container}>
      <Texto></Texto>  
      <Texto></Texto>
      <Texto></Texto>
      <Button title={contenidoBoton} onPress={actualizaTexto} />
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
