import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const counter=useSelector((state) => state.counter.value)
    console.log(counter)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        height: '20%'
    },
    text:{
        fontSize:50,
        COLOR:'white',
        textAlign:'center'
    }
})