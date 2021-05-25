import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight,TouchableWithoutFeedback,Keyboard, Platform} from 'react-native';
import Cita from './componentes/Cita.js';
import Formulario from './componentes/Formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
    // definir los estados de la citas
  const [citas, setCitas] = useState([]);

  const [mostrarForm, guardarMostrarForm] = useState(false);

  useEffect (() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem ('citas');
        if(citasStorage){
            setCitas(JSON.parse(citasStorage));
        }
      } catch (error) {
        console.log(error);
      }
    }
    obtenerCitasStorage();
  }, []);





  //Elimina los pacientes del state


  const eliminarPaciente = id => {

    const citasFiltradas = citas.filter( cita => cita.id !== id );
    setCitas( citasFiltradas );
    guardarCitasStorage(JSON.stringify(citasFiltradas));
    
  }

  //Muestra u oculta el Formulario

  const mostrarFormulario = () => {
    guardarMostrarForm ( ! mostrarForm);
    
  }

  //Ocultar el teclado

  const cerrarTeclado = () => {
    Keyboard.dismiss();

  }

  // // Almacenar las citas
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON );
    } catch (error) {
      console.log(error);
    }

  }

  return (
 <TouchableWithoutFeedback onPress={() => cerrarTeclado () }>
    <View style={styles.contenedor}> 
       <Text style={styles.titulo}>Administrador de citas</Text>
         <View>
             <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
             <Text style={styles.textoMostrarForm}> { mostrarForm ? 'Cancelar Crear Cita': 'Crear Nueva Cita'}</Text>
             </TouchableHighlight>
          </View>

      <View style= {styles.contenido}>
        { mostrarForm ? (
          <>
           <Text style={styles.titulo}>Crear Nueva Cita </Text>
            <Formulario 
              citas={citas}
              setCitas={setCitas}
              guardarMostrarForm={guardarMostrarForm}
              guardarCitasStorage={guardarCitasStorage}
            />
          </>
        ) : (
          <>
          <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas': 'No hay citas agrega una' }  </Text>
          <FlatList
            style= {styles.listado}
            data={citas}
            renderItem={ ({item}) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>} 
            keyExtractor={ cita => cita.id}
          />
          </>
        )}
      </View>
    </View>
    </TouchableWithoutFeedback>        

  );
}
const styles = StyleSheet.create({


  contenedor: {
      backgroundColor: '#AA076B',
      flex: 1
  },


  titulo: {
      color: '#FFF',
      marginTop: Platform.OS === 'ios' ? 40 : 20,
      marginBottom: 20,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  
  contenido:{
    flex: 1,
    marginHorizontal: '2,5%',

  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
      padding: 10,
      backgroundColor: '#7d024e',
      marginVertical: 10
  },
  textoMostrarForm:{
      color: '#FFF',
      fontWeight: 'bold',
      textAlign:'center'
  }
});


export default App;
