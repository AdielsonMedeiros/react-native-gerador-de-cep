import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './services/api';

export default function App() {

  const [cep, setCep] = useState ('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}> Digite o cep</Text>
        <TextInput style={styles.input} placeholder="11222-344" value={cep} onChangeText={(texto)=> setCep(texto)} keyboardType="numeric"/>
        
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'#ddd'}]}>
          <Text style={styles.botaoText}> Buscar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'red'}]}>
          <Text style={[styles.botaoText, {color: '#fff'}]}> Limpar </Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 77777-777</Text>
        <Text style={styles.itemText}>Logradouro: Rua Vasco da Gama</Text>
        <Text style={styles.itemText}>Bairro: Dinamite </Text>
        <Text style={styles.itemText}>Cidade: Duque de Caxias </Text>
        <Text style={styles.itemText}>Estado: Rio de Janeiro </Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,

  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  botaoText:{
    fontSize: 19,
    fontWeight: 'bold',
  },

  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 22,
  }
});
