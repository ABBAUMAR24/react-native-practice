import { StatusBar } from 'expo-status-bar';
import  React from "react";
import { StyleSheet, Text, SafeAreaView , TouchableOpacity} from 'react-native';
import { useState , } from "react";
import tw from 'twrnc';


export default function App() {
  const [name, setname] = useState('')
  return (
    <SafeAreaView >
       <TouchableOpacity>
      
        <Text>me</Text>
       </TouchableOpacity>
      <Text style={tw `text-black ${!name  } : text-red-400`}>hello {name}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});













