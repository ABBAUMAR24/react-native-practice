import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw  from "twrnc";

const App = () => {
  return (
    <View style={tw `mt-10`}>
      <Text style={tw `text-3xl font-semibold text-center `}>Super World</Text>
      <TextInput
      style={tw `ml-4 text-sm border-color-red`}
      placeholder='search for pdf'
      
      
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})