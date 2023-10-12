import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { SignInForm } from '../components/forms/signinform'
const LoginScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style = {styles.container1}>
    <View style = {styles.container}>
      <Image
      source = {require('../../assets/imagens/logo.png')} style = {styles.imageLayout}
      />
      <Text style = {styles.textotitulo}>Entrar</Text>

        <SignInForm/>

    </View>
    </SafeAreaView>
  )
}
LoginScreen2.propTypes = {
  navigation: PropTypes.object.isRequired
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  container1: {
    flex: 1
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
  input: {
    height: 50,
    width: 300,
    marginTop: 100,
    fontSize: 20,
    fontFamily: 'Neucha'

  },
  inputsenha: {
    height: 50,
    width: 300,
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Neucha'

  },
  Loginbotao: {
    backgroundColor: '#289AFF',

    width: 242,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 100

  },
  buttonText: {

    fontSize: 25,
    color: '#ffff',
    fontFamily: 'Neucha'

  },
  botaocadastro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10

  },
  buttonTextCad: {
    fontSize: 20,
    color: '#289AFF',
    fontFamily: 'Neucha'
  }

})

export default LoginScreen2
