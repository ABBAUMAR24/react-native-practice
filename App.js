import { StyleSheet, Text, TextInput,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw  from "twrnc";

const App = () => {
  return (
    <View style={tw `mt-10`}>
      <Text style={tw `text-3xl  font-semibold text-center `}>Super World</Text>
      <TextInput
      style={tw `block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5`}
      placeholder='search for pdf'   
      />
       <View >
        <TouchableOpacity style={tw `grid flex-1 w-auto`}>
          
          <Text>my book 1</Text>
          <Text>my book 2</Text>
          <Text>my book 3</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})