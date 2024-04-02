import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FavoritesScreen( {navigation, route}: any) {
  return (
    <View>
      <Text>FavoritesScreen</Text>

      <TouchableOpacity
            onPress={()=> navigation.navigate("History")}>
                <View>
                    <Text style={{color: "white"}}>IR A HISTORIAL</Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}