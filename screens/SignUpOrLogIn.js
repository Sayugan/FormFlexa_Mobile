import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SignUpOrLogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupOrLogin}>
      <Image
        style={styles.formComputerIconsClipArtF}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
      <View style={styles.signupOrLoginChild} />
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.button1Wrapper, styles.pressablePosition]}
          onPress={() => navigation.navigate("Signup")}
        >
          <View style={styles.buttonFlexBox}>
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.button3, styles.button3Position]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.signUp}>Log In</Text>
        </Pressable>
      </View>
      <View style={styles.signupOrLoginItem} />
      <Image
        style={styles.screenshot20240104151531ChrIcon}
        contentFit="cover"
        source={require("../assets/screenshot-20240104-151531-chrome-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        
      </View>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("SelectLanguage")}
      >
        <Text style={styles.text1}>{'<'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressablePosition: {
    top: 53,
    position: "absolute",
  },
  button3Position: {
    top: 0,
    left: 0,
  },
  groupChildLayout: {
    height: 32,
    width: 343,
    position: "absolute",
  },
  
  formComputerIconsClipArtF: {
    top: 450,
    left: 90,
    width: 401,
    height: 405,
    position: "absolute",
  },
  signupOrLoginChild: {
    top: 251,
    left: 42,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorOrchid_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 340,
    height: 484,
    position: "absolute",
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    color: Color.colorPurple_300,
    fontSize: FontSize.size_xl,
    width:88,
    height:24,
    left:14,
  
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_76xl,
    justifyContent: "center",
    flexDirection: "row",
    height: 35,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
    alignItems: "center",
    width: 222,
    overflow: "hidden",
  },
  button1Wrapper: {
    marginLeft: -111,
    left: "50%",
    top: 55,
    margin:20,
  },
  button3: {
    left: 0,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_76xl,
    justifyContent: "center",
    flexDirection: "row",
    height: 35,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
    alignItems: "center",
    width: 222,
    overflow: "hidden",
    position: "absolute",
  },
  frameParent: {
    marginLeft: -103,
    top: 405,
    height: 88,
    width: 222,
    left: "50%",
    position: "absolute",
  },
  signupOrLoginItem: {
    top: 872,
    backgroundColor: Color.colorOrchid_100,
    width: 430,
    height: 60,
    left: 0,
    position: "absolute",
  },
  screenshot20240104151531ChrIcon: {
    top: 177,
    left: 139,
    borderRadius: Border.br_4xs,
    width: 151,
    height: 159,
    position: "absolute",
  },
  groupChild: {
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
    color: Color.colorBlack,
    width: 141,
    height: 21,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 14,
    left: 52,
  },
  text1: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    display: "flex",
    width: 26,
    height: 68,
    textAlign: "left",
    alignItems: "center",
  },
  pressable: {
    left: 30,
    top:65,
    position: "absolute",
  },
  signupOrLogin: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SignUpOrLogIn;
