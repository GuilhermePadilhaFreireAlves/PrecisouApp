import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Modal, Text, ScrollView, Image } from 'react-native'
import { ModalContent } from '../components/modalcontent'
export function ServicoPrincipal () {
  const [ModalVisible, setModalVisible] = useState(false)
  return (

        <View style={styles.container}>

          <View style={styles.topContainer}>
            <TextInput style={styles.textInput} placeholder="O que deseja?" />
          </View>

          <View >
          <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[
            styles.btnModaldomestico,
            ModalVisible ? { borderTopRightRadius: 14, borderTopLeftRadius: 14 } : { borderRadius: 14 }
          ]}
        >
              <Text style = {styles.txtservicodom}>Serviços Domesticos </Text>
            </TouchableOpacity>

            <Modal
            animationType='fade'
            visible={ModalVisible}
            transparent = {true}
            style = {styles.ModalStyle}
            onRequestClose={() => setModalVisible(false)}
            propagateSwipe={true}

            >
              <ScrollView>
              <ModalContent
              handleClose={() => setModalVisible(false)}
              />
              </ScrollView>

            </Modal>
          </View>

          <View style = {styles.viewfiltros}>
            <TouchableOpacity style = {styles.btnFiltrar}>
            <Image
              source = {require('../..//assets/imagens/filtro.png')} style = {styles.imgfiltro}
            />
              <Text style = {styles.txtFiltrar}>
                Filtrar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnOrdenar}>
            <Image
              source = {require('../../assets/imagens/ordernar.png')} style = {styles.imgordenar}
            />
              <Text style = {styles.txtFiltrar}>
                Ordenar
              </Text>
            </TouchableOpacity>
          </View>

        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'

  },
  topContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: 400

  },
  textInput: {
    backgroundColor: '#ADD9FF',
    padding: 10,
    borderRadius: 14
  },
  btnModaldomestico: {
    backgroundColor: '#ADD9FF',
    width: 284,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'

  },
  ModalStyle: {
    backgroundColor: '#ADD9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnopcoesModal: {
    backgroundColor: '#ADD9FF'
  },
  txtservicodom: {
    fontFamily: 'Neucha',
    fontSize: 25
  },
  viewfiltros: {
    flexDirection: 'row',
    marginTop: 20
  },
  btnFiltrar: {
    flexDirection: 'row',
    backgroundColor: '#ADD9FF',
    width: 86,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 65

  },
  txtFiltrar: {
    fontFamily: 'Neucha',
    fontSize: 15
  },
  btnOrdenar: {
    flexDirection: 'row',
    backgroundColor: '#ADD9FF',
    width: 86,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 110

  },
  imgfiltro: {
    height: 16,
    width: 17,
    marginRight: 9
  },
  imgordenar: {
    height: 19,
    width: 17,
    marginRight: 7
  }
})
export default ServicoPrincipal
