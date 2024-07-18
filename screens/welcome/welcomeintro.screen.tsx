import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Nunito_400Regular,
  Nunito_700Bold_Italic,
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";
import AppIntroSlider from "react-native-app-intro-slider";
import { styles } from "@/styles/onbroarding/onbroading";
import { commonStyles } from "@/styles/common/common.styles";

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9", "#F8EEF9"]}
      style={{ flex: 1, paddingHorizontal: 16 }}
    >
      <View style={{ marginTop: 80 }}>
        {/* Nội dung khác */}
        <Image
          source={item.image}
          style={{ alignSelf: "center", marginBottom: 30 }}
        />
        <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
          {item.title}
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text style={[commonStyles.description,{fontFamily:'Nunito_400Regular'}]}>{item.description}</Text>
          <Text style={[commonStyles.description,{fontFamily:'Nunito_400Regular'}]}>{item.sortDescrition}</Text>
          <Text style={[commonStyles.description,{fontFamily:'Nunito_400Regular'}]}>{item.sortDescrition2}</Text>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/(routes)/login");
      }}
      onSkip={() => {
        router.push("/(routes)/login");
      }}
      renderNextButton={() => (
        <View style={styles.welComeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_700Bold_Italic" }]}
          >
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={[styles.welComeButtonStyle]}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_700Bold_Italic" }]}
          >
            Done
          </Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
}

const style = StyleSheet.create({
  slideImage: {},
});
