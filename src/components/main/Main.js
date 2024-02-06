import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, raisedByNumber } from '../../store/features/counterSlice'

const Main = () => {
    const [counterNumber, setCounterNumber] = useState(0)

    const dispatch=useDispatch()
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <TextInput 
            value={counterNumber} 
            onChangeText={setCounterNumber} 
            keyboardType='numeric'
            style={styles.input}/>
            <Button 
            title={"arttır"}
            onPress={()=> dispatch(raisedByNumber(counterNumber))}
        />
        </View>
      <Button title="arttır" onPress={()=> dispatch(increment())}/>
      <Button title="azalt" onPress={()=> dispatch(decrement())}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        backgroundColor:'aquamarine',
        height:'70%'
    },
    innerContainer:{
        flexDirection:'row',
        margin:25,

    },
    input:{
        backgroundColor:'white',
        width:'80%'
    }


})