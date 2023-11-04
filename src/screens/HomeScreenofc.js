import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Platform, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Barrabotoes from '../components/BarradosBotoes'
import PropTypes from 'prop-types'
import database from '@react-native-firebase/database'
const StatusBarHeght = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function HomeOFC ({ navigation }) {
  const [serviceData, setServiceData] = useState([])
  const [lista, setLista] = useState(serviceData)
  const [searchText, setSearchText] = useState('')
  // const [randomnumber, setRandomNumber] = useState(null)
  // useEffect(() => {
  // setRandomNumber(Math.floor(Math.random() * 4) + 1)
  // })
  useEffect(() => {
    async function dadosq () {
      database().ref('prestadores').on('value', (snapshot) => {
        setServiceData([])
        snapshot.forEach((childItem) => {
          const data = {
            key: childItem.key,
            nomeprestador: childItem.val().NomeP,
            tiposervico: childItem.val().Tiposerv,
            descric: childItem.val().Desc,
            precoprestador: childItem.val().Preco,
            telefone: childItem.val().Tel
          }
          setServiceData(oldArray => [...oldArray, data])
        })
      })
    }
    dadosq()
  }, [])
  useEffect(() => {
    setLista(serviceData)
  }, [serviceData])

  useEffect(() => {
    if (searchText === '') {
      setLista(serviceData)
    } else {
      setLista(
        serviceData.filter(item => {
          return (item.tiposervico.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
        })
      )
    }
  }, [searchText])
  return (
    <View style={styles.container1}>
            <View style={styles.container4}>

        <View style={styles.View}>
            <View style={styles.barra}>
                <Feather name="search"
                    size={40}
                    color="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Pesquisar'
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                />
            </View>

    </View>
</View>
         <ScrollView style={styles.container2} horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/vet.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Veterinário</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/eletricista.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Elétricista</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/encanador.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Encanador</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/faxineira.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Diarista</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/pedreiro.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Pedreiro</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/pintor.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Pintor</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>

        <Image
                source={require('../../assets/imagens/mecanico.png')}
                style={styles.imageBtncasa}
              />

        </View>
        <Text style={styles.buttonlabel}>Mecânico</Text>
    </TouchableOpacity>

   </ScrollView>
   <ScrollView>
      {lista.map((service, key) => (
        <View style={styles.conteudo} key={key}>
          <View style={styles.serviço}>
            <TouchableOpacity style={styles.buttonUser}
             onPress={() => navigation.navigate('servicop', { serviceData: service })}
            >
              <FontAwesome name="user" size={27} color="#000000" />
            </TouchableOpacity>

            <Text style={styles.prestador}>{service.nomeprestador}</Text>

            <View style={styles.avaliação}>
            {[...Array(4)].map((_, i) => (
            <FontAwesome key={i} name="star" size={25} color="#f7dd69" />
            ))}
            </View>
          </View>
          <Text style={styles.tiposervicostyle}> {service.tiposervico}</Text>
          <Text style={styles.desricao}>{service.descric}</Text>
        </View>
      ))}
    </ScrollView>
        <Barrabotoes/>
    </View>

  )
}
HomeOFC.propTypes = {
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fafafa'

  },
  container2: {
    maxHeight: 84,
    marginBottom: -5,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14

  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32

  },
  areaButton: {
    backgroundColor: '#ADD9FF',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonlabel: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  imageBtncasa: {
    width: 48,
    height: 43,
    right: 2
  },
  principal: {
    flex: 1,
    backgroundColor: '#fafafa', /* cor fundo */
    paddingTop: Platform.OS === 'android' ? StatusBarHeght : 25

  },
  conteudo: {
    alignSelf: 'center',
    flex: 1,
    width: '90%',
    height: 160,
    marginBottom: 10,
    backgroundColor: '#ADD9FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44 / 2,
    bottom: -15
  },

  buttonUser: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
    width: 25,
    height: 30,
    start: 10,
    alignSelf: 'center'
  },
  serviço: {
    flex: 0.70,
    width: '97%',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    bottom: 15,
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  prestador: {
    alignSelf: 'center',
    start: 0,
    fontWeight: 'bold', /* Deixar a frase em negrito */
    fontSize: 16
  },
  avaliação: {
    flexDirection: 'row',
    end: 10,
    alignSelf: 'center'

  },
  container4: {
    backgroundColor: '#289AFF',
    paddingTop: 20,
    paddingStart: 10,
    paddingEnd: 16
  },
  username: {
    fontSize: 20,
    paddingStart: 8,
    color: '#FFF',
    fontWeight: 'bold'
  },

  barra: {
    flexDirection: 'row',
    justifyContent: 'center', // Definindo a centralização horizontal
    paddingStart: 4,
    paddingEnd: 5,
    height: 45
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
    width: 500,
    alignItems: 'center'
  },
  View: {
    top: -10
  },
  desricao: {
    fontFamily: 'Neucha',
    marginHorizontal: 15,
    fontSize: 15,
    textAlign: 'justify'
  },
  tiposervicostyle: {
    fontFamily: 'Neucha',
    fontSize: 25,
    marginBottom: 15
  }

})
