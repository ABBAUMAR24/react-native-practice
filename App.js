import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw  from "twrnc";

const App = () => {
  return (
    <View style={tw `mt-10 flex-1`}>
      <Text style={tw `text-3xl font-semibold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400`}>Super World</Text>
      <TextInput
      style={tw `block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5`}
      placeholder='search for pdf'
      
      
      />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})