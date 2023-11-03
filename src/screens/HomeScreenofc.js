import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Platform, TextInput } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Barrabotoes from '../components/BarradosBotoes'
const StatusBarHeght = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
const data = [
  {
    prestador: 'Guilherme Padilha',
    avaliacao: 5,
    comentario: 'Excelente trabalho, recomendo muito, chegou no horário muito simpático'
  },
  {
    prestador: 'Guilherme Padilha',
    avaliacao: 4,
    comentario: 'Uma ótima faxineira, recomendo muito pena que é desastrada boba'
  },
  {
    prestador: 'Guilherme Padilha',
    avaliacao: 5,
    comentario: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa quanto esse entregador, nota 1000'
  },
  {
    prestador: 'Guilherme Padilha',
    avaliacao: 3,
    comentario: 'Naaaaaaaaaaaaaaaaaaaaaaaaaaaaa quanto esse entregador, nota 1000'
  },
  {
    prestador: 'Guilherme Padilha',
    avaliacao: 1,
    comentario: 'Outro comentário qualquer'
  }
]
export default function HomeOFC () {
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
      {data.map((item, index) => (
        <View style={styles.conteudo} key={index}>
          <View style={styles.serviço}>
            <TouchableOpacity style={styles.buttonUser}>
              <FontAwesome name="user" size={27} color="#000000" />
            </TouchableOpacity>

            <Text style={styles.prestador}>{item.prestador}</Text>

            <View style={styles.avaliação}>
              {[...Array(item.avaliacao)].map((_, i) => (
                <FontAwesome key={i} name="star" size={25} color="#f7dd69" />
              ))}
            </View>
          </View>

          <Text>{item.comentario}</Text>
        </View>
      ))}
    </ScrollView>
        <Barrabotoes/>
    </View>

  )
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
    alignSelf: 'flex-start',
    bottom: -6,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
    width: 25,
    height: 30,
    start: 10

  },
  serviço: {
    flex: 0.34,
    width: '97%',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    bottom: 30,
    flexDirection: 'row',
    borderRadius: 30 / 2,
    justifyContent: 'space-between'
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
    bottom: -8

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
  }

})
