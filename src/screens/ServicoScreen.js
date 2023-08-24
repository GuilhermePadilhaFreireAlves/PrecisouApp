import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import UsuarioComponent from '../components/UsuarioComponent'
import Barrabotoes from '../components/BarradosBotoes'
import { Estrelas } from '../components/Estrelas'
class ServicoScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {

      nome: [
        'Joao Henrique',
        'Marcos Pedro',
        'Guilherme Pontes',
        'Valdir Bisse',
        'Fernando dos Santos'
      ],
      descricaoavaliacao: [
        'Bom trabalho, recomendo muito, chegou no horário muito simpático',
        'Otimo trabalho, recomendo muito, chegou no horário muito simpático',
        'Medio trabalho, recomendo muito, chegou no horário muito simpático',
        'Maravilhoso trabalho, recomendo muito, chegou no horário muito simpático',
        'Mais ou menos viu, trabalho, recomendo muito, chegou no horário muito simpático'

      ]
    }
  }

  render () {
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
                    Avaliações
                </Text>

                <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.containerAvaliacoestexto}>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[1]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[1]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[2]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[2]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[3]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[3]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[4]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[4]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[5]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[5]}
                    </Text>
                  </View>
                </View>
                </ScrollView>
            </View>
            <Barrabotoes />
        </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center'

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
export default ServicoScreen
