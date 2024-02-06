import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import Main from './src/components/main/Main'
import Header from './src/components/header/Header'
import Footer from './src/components/footer/Footer'

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
      <Footer/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})