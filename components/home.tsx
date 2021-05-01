import React from "react"
import { Text, View } from "react-native"

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 24 }}>
        Welcome to the home page!!
      </Text>
    </View>
  )
}
