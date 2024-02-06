import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './Screens/Detail';
import HomeScreen from './Screens/HomeScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})