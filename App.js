import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplina from './Disciplina';

export default class App extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Cabecalho aluno ='Kainan'/> <Cabecalho curso ='Design Digital'/>
        <Corpo></Corpo>
        <Disciplina disciplina = 'Projeto IV'/>
        <Disciplina disciplina = 'Design e Inovação'/>
      </View>
    );
  }
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
