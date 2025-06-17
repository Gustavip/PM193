
// Zona 1 : lugar de las importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';



// Componente personalizado para mostrar texto
const Texto = ({style}) => {
  const [contenido,setContenido]=useState('Hola mundo')
  const actualizaTexto=()=>{setContenido('Estado modificado')}
  return(
  <Text  style={[styles.text,style]} onPress={actualizaTexto}> {contenido} </Text> //aqui declaramos que solo texto sera modifado con los estilos 
  
  
  )
}

// zona 2 main 
export default function App() {
  const [contenidoBoton, setContenidoBoton] = useState('Presionar');
  const actualizaTexto = () => { setContenidoBoton('Ubu'); }
  return (
    <View style={styles.container}>

      <Texto style={styles.blue}> </Texto>  
      <Texto style={styles.red}> </Texto>
      <Texto style={styles.green}> </Texto>
    
      <StatusBar style="auto" />
    </View>
  );
}

// Zona 3 : de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech', //de izquierda a derecha 
    justifyContent: 'center', // de ariba a bajo 
  
  },
  text:{                               // agregamos los estilos del texto 
    color:'black',                      // agregamosm una clase
    fontsize:27,
   // height:120,
   // width:120,
  },
  blue:{backgroundColor:'blue'},
  red:{backgroundColor: 'red'},
  green:{backgroundColor:'green'},

});
