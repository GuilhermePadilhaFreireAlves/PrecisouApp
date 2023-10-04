import React, { } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import UsuarioComponent from '../components/UsuarioComponent'
import Barrabotoes from '../components/BarradosBotoes'
import { Estrelas } from '../components/Estrelas'

const comentarios = [
  {
    nome: 'Marcos',
    comentario: 'Otimo trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Seu madruga',
    comentario: 'Medio trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Quico',
    comentario: 'Maravilhoso trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Chiquinha',
    comentario: 'Mais ou menos viu, trabalho, recomendo muito, chegou no horário muito simpático',
    foto: '../../assets/imagens/usuario.png'
  },
  {
    nome: 'Dona Florinda',
    comentario: 'HORRIVEL MUITO RUIM BOSTAAAAAA',
    foto: '../../assets/imagens/usuario.png'

  }
]

export function Boraa () {
  return (
    <SafeAreaView>
        <View style = {styles.container}>
            <UsuarioComponent/>

            <View style = {styles.containerDescricao}>
                <Text style = {styles.textTituloServ}>
                  Serviços
                </Text>
                <Text style = {styles.textDescricaoServ}>
                    Faço de casa, limpo os moveis, portas e janelas, adoro cachorros e gatos, mas caso sejam agressivos, por favor preendam-os. Os valores variam de caso para caso
                </Text>
                <Text style = {styles.textmoney}>
                           Valor : R$ 100 - 200
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
    marginTop: 165

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
    marginTop: 10,
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
  }

})
export default Boraa
