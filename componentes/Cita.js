import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight} from 'react-native';


const Cita =({cita, eliminarPaciente}) => {


    const dialogoEliminar = id => {
        console.log('eliminando...',id)
        eliminarPaciente(id);
    }
    return (


        <View style={stlyles.cita}>
            <View>
                <Text style={stlyles.label}> paciente: </Text>
                <Text style={stlyles.texto}>{cita.paciente} </Text>
            </View>
            <View>
                <Text style={stlyles.label}>Propietario: </Text>
                <Text style={stlyles.texto}>{cita.propietario} </Text>
            </View>
            <View>
                <Text style={stlyles.label}>Síntomas: </Text>
                <Text style={stlyles.texto}>{cita.sintomas} </Text>
            </View>
            <View>
                <TouchableHighlight onPress={ () => dialogoEliminar(item.id)}style={stlyles.btnEliminar}>
                    <Text style={stlyles.textoEliminar}> Eliminar &times;</Text>
                </TouchableHighlight>
            </View>


        </View>


    )
}


const stlyles = StyleSheet.create ({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },


    label:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto:{
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign:'center'
    }


})
export default Cita;
