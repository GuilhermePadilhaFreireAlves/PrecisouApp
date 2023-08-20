import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'

const UsuarioComponent = () => {
  return (

    <SafeAreaView>

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

                            <TouchableOpacity style = {styles.btnIniciarBatePapo}>
                            <Image
                                source = {require('../../assets/imagens/batepapo.png')} style = {styles.imageBtnBatePapo}
                            />
                                <Text style = {styles.textIniciarBatePapo}>Iniciar Bate-Papo</Text>
                            </TouchableOpacity>

                    </View>

            </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center'

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

export default UsuarioComponent
