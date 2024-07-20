import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_700Bold_Italic,
} from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onbroarding/onbroading";
import { router } from "expo-router";

export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
Raleway_700Bold,
Nunito_400Regular,
Nunito_700Bold_Italic,

    Rale_700Bold: require("../../assets/fonts/Raleway-Bold.ttf"),
    Nuti_black: require("../../assets/fonts/Nunito-Black.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
          <Image source={require("../../assets/onboarding/shape_9.png")} />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("../../assets/onboarding/shape_3.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Leanring With
          </Text>
          <Image
            style={styles.titleTextShape2}
            source={require("../../assets/onboarding/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleShape3}
            source={require("../../assets/onboarding/shape_6.png")}
          />
          <Text style={[styles.titleText, { color:"#1DB954",fontFamily: "Nuti_black" }]}>
            Vietcodmey
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={styles.dscpText}>
            Explore a variety of interative lesson
          </Text>
          <Text style={[styles.dscpText]}>Video,quizze & assigment</Text>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}
        onPress={()=>router.push("/(routes)/welcome-intro")}
        >
          <Text style={[styles.buttonText]}>Getting Started </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
