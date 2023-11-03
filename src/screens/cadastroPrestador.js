import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Accountprestadorform } from '../components/forms/accountprestadorform'
const Cadastroprestador = ({ navigation }) => {
  return (
    <ScrollView>
    <View style = {styles.container}>

      <Image
      source = {require('../../assets/imagens/logo.png')} style = {styles.imageLayout}
      />
      <Text style = {styles.textotitulo}>Adicione novas informações</Text>
        <Accountprestadorform navigation={navigation}/>
    </View>
    </ScrollView>

  )
}
Cadastroprestador.propTypes = {
  navigation: PropTypes.object.isRequired
}
const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  imageLayout: {
    marginTop: 25,
    height: 250,
    width: 300
  },
  textotitulo: {
    fontSize: 30,
    color: '#4FACFE',
    marginTop: 50,
    fontFamily: 'Neucha'

  },

  botaocadastro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50

  },
  buttonTextLog: {
    fontSize: 20,
    color: '#289AFF',
    fontFamily: 'Neucha'

  },
  Leiaasinfo: {
    fontFamily: 'Neucha',
    color: '#289AFF',
    fontSize: 28

  },
  textoconcluir: {
    fontFamily: 'Neucha',
    fontSize: 22,
    width: 280,
    textAlign: 'justify',
    marginTop: 15
  }

})

export default Cadastroprestador
