import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
export function ModalContent ({ handleClose }) {
  return (
    <View style = {styles.container}>
              <TouchableOpacity
        style = {{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
        >
            <View style = {styles.viewbotoes}>
            <ScrollView>
                <TouchableOpacity style = {styles.btnopcoesModal} >
                <Text style = {styles.txtbtnmodal}>
                  Limpeza
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnopcoesModal} >
                <Text style = {styles.txtbtnmodal}>
                  Serviços
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnopcoesModal} >
                <Text style = {styles.txtbtnmodal}>
                  Encanador
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnopcoesModal} >
                <Text style = {styles.txtbtnmodal}>
                  Pintor
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnopcoesModal} >
                <Text style = {styles.txtbtnmodal}>
                  Eletricista
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnopcoesModal} >
                <Text style = {styles.txtbtnmodal}>
                  Professores
                </Text>
              </TouchableOpacity>
              </ScrollView>
              </View>

        </TouchableOpacity>
    </View>
  )
}
ModalContent.propTypes = {
  handleClose: PropTypes.func.isRequired
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnopcoesModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 7,
    width: 200,
    alignItems: 'center',
    paddingVertical: 5

  },
  viewbotoes: {
    backgroundColor: '#ADD9FF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 129,
    borderBottomEndRadius: 14,
    borderBottomLeftRadius: 14,
    width: 284,
    height: 160,
    paddingVertical: 10
  },
  txtbtnmodal: {
    fontFamily: 'Neucha',
    fontSize: 20
  }

})

/*
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function ModalContent ({ handleClose }) {
  const opcoes = ['Limpeza', 'Serviços', 'Serviços', 'Serviços?', 'Serviços?', 'Serviços?']

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      >
          <View style={styles.viewbotoes}>
            {opcoes.map((opcao, index) => (
              <TouchableOpacity
                key={index}
                style={styles.btnopcoesModal}
              >
                <Text style={styles.txtbtnmodal}>
                  {opcao}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnopcoesModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 7,
    width: 200,
    alignItems: 'center',
    paddingVertical: 5
  },
  viewbotoes: {
    backgroundColor: '#ADD9FF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 129,
    borderBottomEndRadius: 14,
    borderBottomLeftRadius: 14,
    width: 284,
    height: 160,
    paddingVertical: 10
  },
  txtbtnmodal: {
    fontFamily: 'Neucha',
    fontSize: 20
  }
})
*/
