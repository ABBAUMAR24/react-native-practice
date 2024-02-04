import { StyleSheet, Text, TextInput, FlatList, ActivityIndicator, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw  from "twrnc";
import { useEffect,useState } from "react";


const App = () => {
  const [loading, setloading] = useState(false)
  const [limit , setlimit] = useState('10')
  const [post , setpost] = useState([])

const fetchdata = async()  =>  {
  setloading(true)
  const response = await fetch(`https://jsnplaceholder.typicode.com/post?_limit=${limit}`)
  const data = await response.json()
  setpost(data)
  setloading(false)
}

useEffect(() => {
  fetchdata()
}, [])
if (loading) {
  return(
    <View style={tw `mt-10`}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

  return (
    <View style={tw `mt-10`}>
      <Text style={[tw `text-3xl  font-semibold text-center `, styles.textt]}>Super World</Text>
      <TextInput
      onChangeText={setlimit}
      style={tw ` w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5`}
      placeholder='search for pdf'   
      />
       <View >
        <FlatList
        data={post}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={tw `text-gray-900 dark:text-gray-100`}>{item.title}</Text>
            <Text style={tw `text-gray-900 dark:text-gray-100`}>{item.body}</Text>
            <Text style={tw `text-gray-900 dark:text-gray-100`}>{item.title}</Text>
          </View>
        )}
        />
       </View>    
       
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10   
    
  },  
  textt: {
    fontSize: 30,
    fontWeight: 'bold'
    
  
  }
})