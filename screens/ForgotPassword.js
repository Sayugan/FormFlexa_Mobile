import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput,Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(""); // State to hold the entered email

  const handleContinue = () => {
    if (!email.trim()) {
      Alert.alert("Please enter your email");
      return;
    }

    // You can add your logic for verifying the email here
    // For demonstration, let's assume email verification is successful
    // You can replace this with your actual logic

    Alert.alert("Email verified successfully");
    navigation.navigate("OTPVerificationEmail");
  };
  return (
    <View style={styles.forgotPassword}>
      <Text style={[styles.pleaseEnterEmail, styles.enterFlexBox]}>
        Please enter Email to send OTP
      </Text>
      <Text style={[styles.forgotPasswordContainer, styles.textClr]}>
        <Text style={styles.forgotPasswordContainer1}>
          <Text style={styles.forgotPassword1}>{`Forgot Password ? 
`}</Text>
          <Text style={styles.youCanReset}>{`
You can reset your password now`}</Text>
        </Text>
      </Text>
      <View style={styles.forgotPasswordChild} />
      <TextInput
          style={styles.emailInput}
          placeholder="Enter your Email"
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          fontSize="20"
        
        />
      <View style={styles.forgotPasswordItem}>
      </View>
      <View style={styles.forgotPasswordItem}></View>
      <Pressable style={styles.continue} onPress={handleContinue}>
        <Text style={[styles.continue1, styles.continue1Typo]}>Continue</Text>
      </Pressable>
      {/* Removed the duplicate "Enter your Email" text */}
      <Image
        style={styles.forgotPasswordInner}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={[styles.text1, styles.enterFlexBox]}>{'<'}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  enterFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  emailInput:{
   height:20,
   padding:10,
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  continue1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupChildLayout: {
    height: 32,
    width: 343,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterEmail: {
    top: 320,
    color: Color.colorTomato,
    width: 345,
    height: 50,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    display: "flex",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    position: "absolute",
    left: 50,
  },
  forgotPassword1: {
    fontSize: FontSize.size_17xl,
  },
  youCanReset: {
    fontSize: FontSize.size_xl,
  },
  forgotPasswordContainer1: {
    width: "100%",
  },
  forgotPasswordContainer: {
    top: 155,
    width: 346,
    height: 93,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    left: 40,
  },
  forgotPasswordChild: {
    top: 376,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    width: 362,
    height: 70,
    left: 29,
    position: "absolute",
  },
  emailInput: {
    padding: 10,
    marginBottom: 10,
    top:390,
    left:130,
  },
  forgotPasswordItem: {
    top: 603,
    left: 110,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    width: 200,
    height: 67,
    position: "absolute",
  },
  continue1: {
    color: Color.colorWhite,
    textAlign: "left",
    letterSpacing: -0.3,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  continue: {
    left: 169,
    top: 622,
    position: "absolute",
  },
  enterYourEmail: {
    top: 390,
    left: 135,
    color: Color.colorGray_100,
    width: 219,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    display: "flex",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  forgotPasswordInner: {
    top: 416,
    left: 42,
    width: 304,
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_300,
  },
  text: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 141,
    height: 21,
  },
  
  text1: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    width: 26,
    height: 68,
    textAlign: "left",
  },
  pressable: {
    left: 26,
    top: 53,
    position: "absolute",
  },
  forgotPassword: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 930,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;
