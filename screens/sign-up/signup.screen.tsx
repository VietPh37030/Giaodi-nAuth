import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold_Italic,
} from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { commonStyles } from "@/styles/common/common.styles";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Raleway_600SemiBold,
    Nunito_700Bold_Italic,
    Nunito_600SemiBold,
  });

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    password: "",
  });

  const handlePasswordValidation = (value: string) => {
    const passwordSpecialCharacters = /(?=.*[!@#$&*])/;
    const passwordOnenumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacters.test(value)) {
      setError({
        ...error,
        password: "Write at least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOnenumber.test(value)) {
      setError({
        ...error,
        password: "Write at least one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(value)) {
      setError({
        ...error,
        password: "Write at least six characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({ ...userInfo, password: value });
    }
  };
  
  const handleSignIn = () => {
    router.push('/(routes)/verifyAccount')
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#F6F7F9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 10 }}
    >
      <ScrollView>
        <LottieView
          style={style.signInImage}
          source={require("@/assets/animation/edu2.json")}
          autoPlay
          loop
        />
        <Text style={[style.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Let get started!
        </Text>
        <Text style={style.learningText}>
          Create an account to{" "}
          <Text style={{ color: "#1DB954", fontFamily: "Raleway_700Bold" }}>
            Vietcodemy
          </Text>{" "}
          to get all features
        </Text>
        <View style={style.inputContainer}>
          <View>
            <View>
              <TextInput
                style={[style.input, { paddingLeft: 40 }]}
                value={userInfo.name}
                placeholder="PhamVietAnh"
                keyboardType="default"
                onChangeText={(value) =>
                  setUserInfo({ ...userInfo, name: value })
                }
              />
              <AntDesign
                style={{ position: "absolute", left: 26, top: 17.8 }}
                name="user"
                size={20}
                color={"#A1A1A1"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={[style.input, { paddingLeft: 40 }]}
                keyboardType="email-address"
                value={userInfo.email}
                placeholder="support@vietcodemy.com"
                onChangeText={(value) =>
                  setUserInfo({ ...userInfo, email: value })
                }
              />
              <Fontisto
                style={{ position: "absolute", left: 26, top: 17.8 }}
                name="email"
                size={20}
                color={"#A1A1A1"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={[style.input, { paddingLeft: 40 }]}
                keyboardType="default"
                secureTextEntry={!isPasswordVisible}
                placeholder="******"
                onChangeText={handlePasswordValidation}
              />
              <SimpleLineIcons
                style={{ position: "absolute", left: 26, top: 17.8 }}
                name="lock"
                size={20}
                color={"#A1A1A1"}
              />
              <TouchableOpacity
                style={style.visiableIcon}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={23}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={23} color={"#747474"} />
                )}
              </TouchableOpacity>
            </View>
            {error.password && (
              <View style={[commonStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                  {error.password}
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 8,
              marginHorizontal: 16,
              backgroundColor: "#2467EC",
            }}
            onPress={handleSignIn}
          >
            {buttonSpinner ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Sign Up
              </Text>
            )}
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <FontAwesome name="google" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="github" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="facebook-official" size={24} />
            </TouchableOpacity>
          </View>

          <View style={style.signUpRedirect}>
            <Text style={{ fontSize: 18, fontFamily: "Raleway_600SemiBold" }}>
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(routes)/login")}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Raleway_600SemiBold",
                  marginRight: 10,
                  color: "#1DB954",
                }}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  signInImage: {
    width: "60%",
    height: 250,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 1,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
  },
  learningText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
    color: "#575757",
  },
  inputContainer: {
    marginHorizontal: 16,
    rowGap: 30,
    marginTop: 30,
    minHeight: 250,
  },
  input: {
    height: 55,
    borderRadius: 8,
    marginHorizontal: 16,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#A1A1A1",
  },
  visiableIcon: {
    position: "absolute",
    right: 30,
    top: 15,
  },
  forgotSection: {
    marginHorizontal: 16,
    textAlign: "right",
    fontSize: 16,
    marginTop: -20,
  },
  signUpRedirect: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: -20,
  },
});
