import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
const CadastroUsuario = ({ navigation }) => {
  return (
    <View style = {styles.container}>
      <Image
      source = {require('../../assets/imagens/logo.png')} style = {styles.imageLayout}
      />
      <Text style = {styles.textotitulo}>Crie uma conta</Text>

      <TextInput style = {styles.inputnome }
        placeholder="Nome:"
        underlineColorAndroid='rgb(79, 172, 254)'
        onChangeText={this.nome}
      />

      <TextInput style = {styles.input }
        placeholder="Email:"
        underlineColorAndroid='rgb(79, 172, 254)'
        onChangeText={this.email}
      />

      <TextInput style = {styles.inputsenha }
        placeholder="Senha:"
        underlineColorAndroid='rgb(79, 172, 254)'
        onChangeText={this.senha}
      />

          <TouchableOpacity style={styles.Loginbotao}
          onPress={() => navigation.navigate('contap')}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaocadastro}
        onPress={() => navigation.navigate('login2p')}
        >
          <Text style={styles.buttonTextLog}>Já possui uma conta? Login</Text>
        </TouchableOpacity>
    </View>
  )
}
CadastroUsuario.propTypes = {
  navigation: PropTypes.object.isRequired
}
const styles = StyleSheet.create({
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
  input: {
    height: 50,
    width: 300,
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Neucha'

  },
  inputnome: {
    height: 50,
    width: 300,
    marginTop: 60,
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
  buttonTextLog: {
    fontSize: 20,
    color: '#289AFF',
    fontFamily: 'Neucha'

  }

})

export default CadastroUsuario
