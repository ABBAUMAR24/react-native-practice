import { StatusBar } from 'expo-status-bar';
import  React from "react";
import { StyleSheet, Text, SafeAreaView , Button, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import { useState , useEffect} from "react";
import tw from 'twrnc';


export default function App() {
  const [data, setdata] = useState([])
  

const fetchdata = async ( ) => {
 res = await fetch (  `https://jsonplaceholder.typicode.com/posts/1`)
 res = await res.json()
 setdata(res)

}

useEffect(() => {
  fetchdata();
},[])


  const [name, setname] = useState('')
   const Del = () => {
    setname(' ')
   }
  
  return (
    <SafeAreaView style={tw `mx-10 my-20 `}>
      <View >
        <TextInput
        value={name}
        placeholder='text here'
        onChangeText={(setname)}
        />

      <Text style={tw ``}>text this text is at the top {name} </Text>
      <TouchableOpacity onPress={(Del)}>
        
        <Text style={tw `bg-red-400`}>clear text</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
      <FlatList
      data={data}
      keyExtractor={({id}) => id}
      renderItem={({item}) =>{
        <Text>{console.log(item)}</Text>
      }}
      />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({});













