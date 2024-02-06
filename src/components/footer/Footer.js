import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const counter= useSelector(state=>state.counter.value)
  return (
    <View>
      <Text>{counter}</Text>
    </View>
  )
}

export default Footer