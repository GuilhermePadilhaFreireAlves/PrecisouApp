import React, { useState, createContext, useEffect, useContext } from 'react'
import database from '@react-native-firebase/database'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'

export const NomeContext = createContext({})

export function useNome () {
  return useContext(NomeContext)
}

function NomeProvider ({ children }) {
  const [nomepa, setNomepa] = useState('carregando...')

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        database()
          .ref(`usuarios/${user.uid}/nome`)
          .on('value', (snapshot) => {
            setNomepa(snapshot.val())
          })
      } else {
        setNomepa('Não autenticado')
      }
    })

    return () => unsubscribe()
  }, [])

  return <NomeContext.Provider value={{ nomepa }}>{children}</NomeContext.Provider>
}

NomeProvider.propTypes = {
  children: PropTypes.node
}

export default NomeProvider
