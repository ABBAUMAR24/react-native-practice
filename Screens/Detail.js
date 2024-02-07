import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Detail = ({navigation}) => {

  return (
    <SafeAreaView>
      <Text>Detail</Text>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({})