import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"

const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "OpenSans-Bold" }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
