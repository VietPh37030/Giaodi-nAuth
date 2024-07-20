import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ForgotPassWordScreen from '@/screens/forgot-password/forgot-password.screen'
import { useFonts } from 'expo-font';
import { Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_700Bold_Italic } from '@expo-google-fonts/nunito';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/onbroarding/onbroading';
import { router } from 'expo-router';

export default function ForgotPassword() {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Raleway_600SemiBold,
    Nunito_700Bold_Italic,
    Nunito_600SemiBold,
    Nunito_700Bold
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
   <LinearGradient colors={["#E5ECF9","#F6F7F9"]} style={style.container}>
    <Text style={[style.headerText,{fontFamily:'Nunito_600SemiBold'}]}>
      Reset Email Password
    </Text>
    <TextInput style={[style.input,{fontFamily:'Nunito_400Regular'}]}
    placeholder='Username@gdmail.com'
    keyboardType='email-address'
    />
    <TouchableOpacity style={style.button}>
    <Text style={[style.buttonText,{fontFamily:'Nunito_600SemiBold'}]}>Send</Text>
    </TouchableOpacity>
    <View style={style.loginLink}>
    <Text style={[style.backText,{fontFamily:'Nunito_700Bold_Italic'}]}>Back to?</Text>
    <TouchableOpacity onPress={()=>router.back()}>
      <Text style={[style.loginText,{fontFamily:'Nunito_700Bold'}]}>Sign In</Text>

    </TouchableOpacity>
    </View>
   </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3876EE",
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  loginLink: {
    flexDirection: "row",
    marginTop: 30,
  },
  loginText: {
    color: '#1DB954',
    marginLeft: 5,
    fontSize: 16,
  },

  backText: { fontSize: 16 },
})