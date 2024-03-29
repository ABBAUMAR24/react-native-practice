import { StyleSheet, Text, TextInput, FlatList, Modal, View,  Image, Button } from 'react-native'
import React from 'react'
import tw  from "twrnc";
import { useEffect,useState,useRef } from "react";
import { NativeBaseProvider,  Box } from "native-base";



const HomeScreen = ( {Navigation}) => {
  const [loading, setloading] = useState(false)
  const [limit , setlimit] = useState('')
  const [post , setpost] = useState([])
  const inputRef = useRef()
  const [modalvisible, setmodalvisible] = useState (false)

const fetchdata = async(  )  =>  {
  setloading(true)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${limit}`)
  const data = await response.json()
  setpost([data])
  setloading(false)
}

useEffect(() => {
  fetchdata()
}, [limit])



// if (loading) {
//   return(
//     <View style={tw `mt-10`}>
//       <ActivityIndicator size="large" color="#0000ff" />
//       <Text style={tw `text-center pt-5`}>loading....</Text>
//     </View>
//   )
// }

  return (
    <NativeBaseProvider>

    
    <View style={tw `mt-10`}>
      <Text style={[tw `text-3xl  font-semibold text-center `, styles.textt]}>Super World</Text>
      <TextInput
      ref={inputRef}
      onChangeText={setlimit}
      value={limit}
      style={tw ` w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5`}
      placeholder='number of api'
      k   
      />

       <View >
        <FlatList
        data={post}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={tw ``}>{item.title}</Text>
            <Text style={tw `text-gray-900 dark:text-gray-100`}>{item.body}</Text>
            <Text style={tw `text-gray-900 dark:text-gray-100`}>{item.title}</Text>
          </View>
        )}
        />
         
          <Button
          // disabled = {limit}
            title='open modal'
            onPress={() => setmodalvisible (true)}
          />
            <Modal visible ={modalvisible}>
                <Text>yo im modal content</Text>
                <Image 
           style={{height : 300 , width: 300}}
          source={{uri: 'https://picsum.photos/200'}}
          />
                <Button
                // disabled = {}
                title='close modal'
                onPress={() => setmodalvisible (false)}
                />
            </Modal>
            <Box>
              <Text>hello</Text>
            </Box>
       </View>    
       
    </View>
    </NativeBaseProvider>
  )
}

export default HomeScreen

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