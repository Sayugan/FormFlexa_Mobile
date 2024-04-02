import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const LoginNotVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginVerification}>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.successfulLoginParent, styles.groupPosition]}>
          <Text style={[styles.successfulLogin, styles.continueTypo]}>
            UnSuccessful Login !!
          </Text>
          <Image
            style={styles.sucessIcon2}
            contentFit="cover"
            source={require("../assets/unsuccessful-logo.png")}
          />
          <Pressable
            style={[styles.rectangleGroup, styles.groupLayout]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.continue, styles.textFlexBox]}>Back</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 221,
    width: 390,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  continueTypo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout: {
    height: 41,
    width: 209,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupInnerLayout: {
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
  groupChild: {
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 221,
    width: 390,
    position: "absolute",

  },
  successfulLogin: {
    top: 43,
    left: 91,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.4,
    textAlign: "center",
    justifyContent: "center",
    width: 325,
    height: 96,
    color: Color.colorBlack,
    position: "absolute",
  },
  sucessIcon2: {
    top: 40,
    left: 34,
    width: 90,
    height: 100,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    left: 0,
    top: 0,
  },
  continue: {
    top: 8,
    left: 77,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.3,
    color: Color.colorWhite,
    width: 100,
    height: 26,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  rectangleGroup: {
    top: 162,
    left: 159,
  },
  successfulLoginParent: {
    height: 221,
    width: 390,
    position: "absolute",
  },
  rectangleParent: {
    top: 320,
    left: 13,
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
    top: 0,
  },
  text: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 141,
    height: 21,
    color: Color.colorBlack,
  },
  rectangleContainer: {
    top: 14,
    left: 52,
  },
  loginVerification: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoginNotVerification;
