import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/common/common.styles";

export default function Button({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
    const {width} = Dimensions.get("window");
  return (
    <TouchableOpacity
      style={[commonStyles.buttonContainer, {width:width * 1 -150 ,height: 45,alignItems:'center',justifyContent: 'center',flexDirection:'row' }]}
      onPress={() => onPress}
    >
      <Text
        style={{ textAlign: "center", color: "#fff",fontSize:20,fontWeight:'bold' }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
