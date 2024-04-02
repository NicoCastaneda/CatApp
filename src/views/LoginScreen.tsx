import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen({ navigation, route }: any) {

  const { state } = useContext(AuthContext)

  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}>
        <View>
          <Text style={{ color: "white" }}>IR A PERFIL</Text>
        </View>

      </TouchableOpacity>


      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: "black" }}>Email: {state.email}</Text>

      </View>
    </View>

  )
}