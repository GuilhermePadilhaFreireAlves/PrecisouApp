import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
export function ContaScreen () {
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
                Guilherme Pontes
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
          </View>
        </View>
        <View style= {styles.viewBotoes}>
          <TouchableOpacity style={styles.btnAjuda}>

            <AntDesign
             name='questioncircleo'
             size={30}
             color='black'
             />
              <Text style={styles.textbtn}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAjuda}>
            <AntDesign
             name='questioncircleo'
             size={30}
             color='black'
             />
              <Text style={styles.textbtn}>aa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'

  },
  containerTopo: {
    backgroundColor: '#ADD9FF',
    width: 366,
    height: 121,
    borderRadius: 23,
    flexDirection: 'row'

  },
  imageUsuarioPrin: {
    width: 65,
    height: 64,
    marginTop: 30,
    marginLeft: 15

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
  imageestrelaUsu: {
    width: 20,
    height: 20,
    marginLeft: 8

  },
  Usuariotext: {

    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 5,
    marginBottom: 2

  },
  containeritensTopo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginBottom: 5
  },
  conatinerestrelaeNome: {
    marginTop: 15
  },
  btnAjuda: {
    width: 91,
    height: 71,
    borderRadius: 14,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textbtn: {
    color: '#000000',
    fontFamily: 'Neucha',
    fontSize: 20
  },
  viewBotoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }

})

export default ContaScreen
