import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OTPVerificationMobile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpVerificationMobile}>
      <Text style={[styles.verificationHasBeen, styles.text3FlexBox]}>
        verification has been sent to your Mobile..
      </Text>
      <Text
        style={[styles.userVerification, styles.text2Clr]}
      >{`User verification `}</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Text style={[styles.text, styles.textTypo]}>2</Text>
        <Text style={[styles.text1, styles.textTypo]}>1</Text>
      </View>
      <Pressable
        style={styles.otpVerificationMobileChild}
        onPress={() => navigation.navigate("SuccessfulOTPEmailAndMobil")}
      />
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      <Text style={[styles.pleaseEnterYour, styles.continueTypo]}>
        Please Enter your OTP
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.iconWifi, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-wifi.png")}
        />
        <Image
          style={[styles.iconBattery100, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-battery-1001.png")}
        />
        <Image
          style={[styles.iconChartBarFill, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-chart-bar-fill.png")}
        />
        <Text style={[styles.text2, styles.text2Clr]}>{`12 : 00   `}</Text>
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("UpdateProfile")}
      >
        <Text style={[styles.text3, styles.text3FlexBox]}>{`<`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text3FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  text2Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    marginLeft: 18,
    height: 70,
    width: 70,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
  },
  textTypo: {
    top: 8,
    color: Color.colorBlack,
    letterSpacing: -0.6,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout: {
    height: 32,
    width: 343,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  verificationHasBeen: {
    top: 209,
    left: 23,
    color: Color.colorTomato,
    width: 345,
    height: 45,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    display: "flex",
    position: "absolute",
  },
  userVerification: {
    top: 106,
    left: 20,
    width: 346,
    height: 93,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: -0.6,
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
  },
  frameChild: {
    zIndex: 0,
    height: 70,
    width: 70,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
  },
  frameItem: {
    zIndex: 1,
  },
  frameInner: {
    zIndex: 2,
  },
  rectangleView: {
    zIndex: 3,
  },
  text: {
    left: 111,
    zIndex: 4,
  },
  text1: {
    left: 24,
    zIndex: 5,
  },
  rectangleParent: {
    top: 396,
    left: 46,
    width: 364,
    flexDirection: "row",
    position: "absolute",
  },
  otpVerificationMobileChild: {
    top: 603,
    left: 110,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    width: 200,
    height: 67,
    position: "absolute",
  },
  continue: {
    top: 622,
    left: 169,
    color: Color.colorWhite,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 298,
    left: 100,
    color: Color.colorSienna,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_300,
  },
  iconWifi: {
    height: "56.25%",
    width: "5.48%",
    right: "12.51%",
    left: "82%",
    bottom: "25%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "18.75%",
  },
  iconBattery100: {
    height: "64.38%",
    width: "9.42%",
    right: "1.69%",
    bottom: "16.87%",
    left: "88.89%",
    top: "18.75%",
  },
  iconChartBarFill: {
    height: "59.38%",
    width: "5.72%",
    top: "15.63%",
    right: "19.37%",
    left: "74.91%",
    bottom: "25%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text2: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 141,
    height: 21,
  },
  rectangleGroup: {
    top: 14,
    left: 52,
  },
  text3: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    width: 26,
    height: 68,
  },
  pressable: {
    left: 58,
    top: 53,
    position: "absolute",
  },
  otpVerificationMobile: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default OTPVerificationMobile;
