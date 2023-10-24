import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { AccountForm } from '../components/forms/accountform'
const CadastroUsuario = ({ navigation }) => {
  return (
    <ScrollView>
    <View style = {styles.container}>

      <Image
      source = {require('../../assets/imagens/logo.png')} style = {styles.imageLayout}
      />
      <Text style = {styles.textotitulo}>Crie uma conta</Text>
        <AccountForm/>
        <TouchableOpacity style={styles.botaocadastro}
        onPress={() => navigation.navigate('login2p')}
        >
          <Text style={styles.buttonTextLog}>Já possui uma conta? Login</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>

  )
}
CadastroUsuario.propTypes = {
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

  }

})

export default CadastroUsuario
