import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Modal, Text, ScrollView, Image } from 'react-native'
import { ModalContent } from '../components/modalcontent'
import Estrelas from '../components/Estrelas'
import Barrabotoes from '../components/BarradosBotoes'
import PropTypes from 'prop-types'
import database from '@react-native-firebase/database'

function ServicoPrincipal ({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    async function dadosq () {
      database().ref('prestadores').on('value', (snapshot) => {
        setServiceData([])
        snapshot.forEach((childItem) => {
          const data = {
            key: childItem.key,
            nomeprestador: childItem.val().NomeP,
            tiposervico: childItem.val().Tiposerv,
            precoprestador: childItem.val().Preco
          }
          setServiceData(oldArray => [...oldArray, data])
        })
      })
    }
    dadosq()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput style={styles.textInput} placeholder="O que deseja?" />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[
            styles.btnModaldomestico,
            modalVisible
              ? { borderTopRightRadius: 14, borderTopLeftRadius: 14 }
              : { borderRadius: 14 }
          ]}>
          <Text style={styles.txtservicodom}>Serviços Domesticos</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          style={styles.ModalStyle}
          onRequestClose={() => setModalVisible(false)}
          propagateSwipe={true}>
          <ScrollView>
            <ModalContent handleClose={() => setModalVisible(false)} />
          </ScrollView>
        </Modal>
      </View>

      <View style={styles.viewfiltros}>
        <TouchableOpacity style={styles.btnFiltrar}>
          <Image
            source={require('../..//assets/imagens/filtro.png')}
            style={styles.imgfiltro}
          />
          <Text style={styles.txtFiltrar}>Filtrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOrdenar}>
          <Image
            source={require('../../assets/imagens/ordernar.png')}
            style={styles.imgordenar}
          />
          <Text style={styles.txtFiltrar}>Ordenar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.viewprestadores}>
          {serviceData.map((service, key) => (
            <View style={styles.viewbtnprestadores} key={key}>
              <Text style={styles.txttitulobtn}>{service.tiposervico}</Text>
              <TouchableOpacity style={styles.btnprestadores}
              >
                <View style={styles.viewimgnomeestrela}>
                <Image
                    source={ require('../../assets/imagens/usuario.png')}
                    style={styles.imguser}
                  />
                  <Text style={styles.txtnomeprestador}>{service.nomeprestador}</Text>
                  <Estrelas />
                </View>
                <Text style={styles.txtvalor}>{service.precoprestador}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <Barrabotoes />
    </View>
  )
}
ServicoPrincipal.propTypes = {
  navigation: PropTypes.object.isRequired
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
  },
  viewprestadores: {
    alignItems: 'center',
    marginTop: 40
  },
  btnprestadores: {
    height: 75,
    width: 366,
    borderRadius: 14
  },
  txttitulobtn: {
    fontFamily: 'Neucha',
    fontSize: 30

  },
  imguser: {
    height: 33,
    width: 33
  },

  viewbtnprestadores: {
    backgroundColor: '#ADD9FF',
    height: 121,
    width: 366,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 15
  },
  txtnomeprestador: {
    fontSize: 20,
    fontFamily: 'Neucha',
    marginLeft: 10
  },
  viewimgnomeestrela: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5
  },
  txtvalor: {
    fontFamily: 'Neucha',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 3
  }
})
export default ServicoPrincipal
