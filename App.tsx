import React, { useState } from "react"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import Home from "./components/home"
import Onboard from "./components/onboard"

const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [showOnboard, setShowOnboard] = useState(true)

  const handleDone = () => {
    setShowOnboard(false)
  }

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    )
  }
  return showOnboard ? <Onboard handleDone={handleDone} /> : <Home />
}
