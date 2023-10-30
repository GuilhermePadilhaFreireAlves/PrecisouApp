import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Barrabotoes from '../components/BarradosBotoes'
import { Estrelas } from '../components/Estrelas'

const comentarios = [
  {
    nome: 'Marcos',
    comentario: 'Otimo trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Pedro',
    comentario: 'Medio trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Maria Clara',
    comentario: 'Maravilhoso trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Carlos',
    comentario: 'Mais ou menos viu, trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'João',
    comentario: 'Otimo trabalho',
    foto: '../../assets/imagens/usuario.png'

  }
]

export function ServicoScreen ({ route }) {
  const { serviceData } = route.params
  const [exibirnomeprestador] = useState(serviceData.nomeprestador)
  const [exibirdescricao] = useState(serviceData.descric)
  const [exibirpreco] = useState(serviceData.precoprestador)

  return (
    <SafeAreaView>
        <View style = {styles.container}>
        <View style = {styles.containerTopo}>

<Image
    source = {require('../../assets/imagens/usuario.png')} style = {styles.imageUsuarioPrin}
/>
    <View style = {styles.containeritensTopo}>

    <View style = {styles.conatinerestrelaeNome}>
        <Text style = {styles.Usuariotext}>
           {exibirnomeprestador}
        </Text>
        <View style = {styles.containerEstrelaUsu}>
            <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
            />
               <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
            />
               <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
            />
               <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
            />
               <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
            />
        </View>
        </View>

            <TouchableOpacity style = {styles.btnIniciarBatePapo}>
            <Image
                source = {require('../../assets/imagens/batepapo.png')} style = {styles.imageBtnBatePapo}
            />
                <Text style = {styles.textIniciarBatePapo}>Iniciar Bate-Papo</Text>
            </TouchableOpacity>

    </View>

</View>

            <View style = {styles.containerDescricao}>
                <Text style = {styles.textTituloServ}>
                  Serviços
                </Text>
                <Text style = {styles.textDescricaoServ}>
                   {exibirdescricao}
                </Text>
                <Text style = {styles.textmoney}>
                           {exibirpreco}
                </Text>
            </View>
            <View style = {styles.containerAvaliações}>
                <Text style = {styles.textAvaliacoes}>
                    Avaliações:
                </Text>

                <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.containerAvaliacoestexto}>
                {comentarios.map((comentario, index) => (
                <View key={index} style={styles.avaliacaoItem}>
                  <Text style={styles.nomeAvaliacao}>{comentario.nome}</Text>
                  <Estrelas/>
                  <Text style={styles.descAvaliacao}>{comentario.comentario}</Text>
                </View>
                ))}

                </View>
                </ScrollView>
            </View>
            <Barrabotoes />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    flex: 1
  },
  containerDescricao: {
    backgroundColor: '#ADD9FF',
    width: 366,
    height: 195,
    borderRadius: 23,
    marginTop: 15

  },
  textTituloServ: {
    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10

  },
  textDescricaoServ: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10,
    marginRight: 17,
    textAlign: 'justify'
  },
  textmoney: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginRight: 17,
    textAlign: 'justify'
  },
  containerAvaliações: {
    backgroundColor: '#EFEFEF',
    width: 366,
    height: 315,
    borderRadius: 23,
    marginTop: 15
  },
  textAvaliacoes: {
    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10

  },
  nomeAvaliacao: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10,
    marginRight: 17,
    textAlign: 'justify'
  },
  descAvaliacao: {
    fontSize: 17,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginRight: 17,
    textAlign: 'justify'
  },
  containerTopo: {
    backgroundColor: '#ADD9FF',
    width: 366,
    height: 150,
    borderRadius: 23,
    flexDirection: 'row'

  },
  Usuariotext: {

    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 5,
    marginBottom: 2

  },
  imageUsuarioPrin: {
    width: 65,
    height: 64,
    marginTop: 30,
    marginLeft: 15

  },
  imageestrelaUsu: {
    width: 20,
    height: 20,
    marginLeft: 8

  },
  containerEstrelaUsu: {
    backgroundColor: '#FFFFFF',
    width: 154,
    height: 24,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5

  },
  containeritensTopo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginBottom: 5
  },
  btnIniciarBatePapo: {
    backgroundColor: '#F5F5F5',
    height: 25,
    width: 159,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row'

  },
  textIniciarBatePapo: {
    color: '#000000',
    fontFamily: 'Neucha',
    fontSize: 15,
    marginLeft: 15
  },
  imageBtnBatePapo: {
    height: 22,
    width: 21

  },
  conatinerestrelaeNome: {
    marginTop: 15
  }
})
export default ServicoScreen
