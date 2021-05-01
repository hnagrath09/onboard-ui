import React from "react"
import { View, Text, StatusBar, Image, StyleSheet } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import slides, { Slide } from "../assets/data/slides"
import colors from "../assets/color/colors"

export type OnboardProps = {
  handleDone: () => void
}

export default function Onboard({ handleDone }: OnboardProps) {
  const renderItem = ({ item }: { item: Slide }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    )
  }
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    )
  }
  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        keyExtractor={(item) => item.title}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        renderDoneButton={renderDoneButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 150,
    marginBottom: 30,
    width: 320,
    height: 320,
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
    marginHorizontal: 55,
    textAlign: "center",
  },
  text: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    marginHorizontal: 45,
    marginTop: 20,
    textAlign: "center",
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  rightText: {
    color: colors.blue,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  leftText: {
    color: colors.blue,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
    backgroundColor: colors.blue,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
    color: colors.white,
  },
})
