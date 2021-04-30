import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './componentes/Cita.js';




const App = () => {


  // definir los estados de la citas


  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hoook", propietario: 'Juan', sintomas: "No come" },
    { id: "2", paciente: "Redux", propietario: 'Itzel', sintomas: "No duerme " },
    { id: "3", paciente: "Native", propietario: 'Josue', sintomas: "No ladra" }


  ]);


  //Elimina los pacientes del state


  const eliminarPaciente = id => {
    setCitas ( (citasActuales) => {
      return citasActuales.filter ( cita => cita.id !== id);
    })
    
  }


  return (
    <View style={styles.contenedor}> 
       <Text style={styles.titulo}>Administrador de citas</Text>


       <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas': 'No hay citas agrega una' }  </Text>
      
      <FlatList
       data={citas}
       renderItem={ ({item}) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>} 
       keyExtractor={ cita => cita.id}
       />
    </View>


  );
}
const styles = StyleSheet.create({


  contenedor: {
      backgroundColor: '#AA076B',
      flex: 1
  },


  titulo: {
      color: '#FFF',
      marginTop: 40,
      marginBottom: 20,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
  }  
});


export default App;
