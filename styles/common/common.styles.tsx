import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import {
    responsiveWidth,
    responsiveHeight,
  } from "react-native-responsive-dimensions";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer:{
    backgroundColor:'#2467FC',
    width:responsiveWidth(88),
    height:responsiveHeight(2.5),
    borderRadius:5,
    marginHorizontal:5
  },
  dotStyle: {
    backgroundColor: "#C6C7CC",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5), // Đảm bảo chiều rộng và chiều cao bằng nhau
    borderRadius: responsiveWidth(1.25), // Bằng nửa của chiều rộng/chiều cao
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#2467EC",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5), // Đảm bảo chiều rộng và chiều cao bằng nhau
    borderRadius: responsiveWidth(1.25), // Bằng nửa của chiều rộng/chiều cao
    marginHorizontal: 5,
  },
  title:{
    fontSize: hp("3.5%"),
      textAlign:'center'
  },
  description:{
    fontSize: hp("2.5%"),
    textAlign:'center',
    color:"#575757"
  }
});
