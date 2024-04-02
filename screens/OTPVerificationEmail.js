import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import axios from "axios";
import { userEmail } from "./Signup";

const OTPVerificationEmail = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = React.useState(['', '', '', '']);
  const [otp1, setOtp1] = React.useState(['', '', '', '']);
  const [otp2, setOtp2] = React.useState(['', '', '', '']);
  const [otp3, setOtp3] = React.useState(['', '', '', '']);


  const handleOtpChange = (index, value, setState) => {
    if (isNaN(value)) {
      // Check if input is not a number
      return;
    }

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setState(updatedOtp);

    // Move to the next box automatically
    if (index < 3 && value !== '') {
      // Implement refs if needed
      // refs[index + 1].focus();
    }
  };

const handleVerify = () => {
    // Combining the OTPs into one string
    const enteredOTP = `${otp.join('')}${otp1.join('')}${otp2.join('')}${otp3.join('')}`;
   
    const url = "https://formflexa.onrender.com/api/v1/User/verify-otp";
    // Trim the combined OTP string
    const trimmedEnteredOTP = enteredOTP.trim();
    const parameter2 = {otp : trimmedEnteredOTP};
    if (!trimmedEnteredOTP) {
      Alert.alert("Please Enter OTP","Check your Email");
      return;
    } else if (trimmedEnteredOTP.length < 4 ){
      Alert.alert("Invalid OTP Length", "Try again");
      return;
    } else {
      
      axios.post(url,{email: userEmail, otp: trimmedEnteredOTP}).then((response)=>{
          Alert.alert("OTP Verified"," Please login with the credentials");
          console.log("OTP Verified\n Please login with the credentials");
          navigation.navigate("LoginScreen");
      }).catch((error)=>{
        console.log("Incorrect OTP, please try again");
      Alert.alert("Incorrect OTP, please try again")
    });
    
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.otpVerificationEmail}>
          <Text style={[styles.verificationHasBeen, styles.text3FlexBox]}>
            Verification has been sent to your Email.
          </Text>
          <Text style={[styles.userVerification, styles.text2Clr]}>
            User verification
          </Text>
          <View style={styles.rectangleParent}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                style={[styles.otpInput, styles.textTypo]}
                onChangeText={(text) => handleOtpChange(index, text, setOtp)}
                value={value}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>

          <View style={styles.rectangleParent1}>
            {otp1.map((value, index) => (
              <TextInput
                key={index}
                style={[styles.otpInput1, styles.textTypo]}
                onChangeText={(text) => handleOtpChange(index, text, setOtp1)}
                value={value}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>

          <View style={styles.rectangleParent2}>
            {otp2.map((value, index) => (
              <TextInput
                key={index}
                style={[styles.otpInput2, styles.textTypo]}
                onChangeText={(text) => handleOtpChange(index, text, setOtp2)}
                value={value}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>

          <View style={styles.rectangleParent3}>
            {otp3.map((value, index) => (
              <TextInput
                key={index}
                style={[styles.otpInput3, styles.textTypo]}
                onChangeText={(text) => handleOtpChange(index, text, setOtp3)}
                value={value}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>

          {/* Button to verify OTP */}
          <View style={styles.continueItem}>
      </View>
          <Pressable style={styles.continue} onPress={handleVerify}>
            
            <Text style={[styles.continue1, styles.continue1Typo]}>Continue</Text>
          </Pressable>

          <Text style={[styles.pleaseEnterYour, styles.continueETypo]}>
            Please Enter your OTP
          </Text>

          <Pressable
            style={styles.pressable}

            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={[styles.text3, styles.text3FlexBox]}>{'<'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text3FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
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
container:{
flex:1,

},
  continueETypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  continue1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  rectangleParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    top:400,
    borderWidth: 1,
    backgroundColor: "#fff",

  },
  rectangleParent1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    top:380,
    left:140
  
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    borderWidth: 1,
    backgroundColor:"#fff",
  },
  otpInput1: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    top:30,
    backgroundColor:"#fff"
  },
  continueItem: {
    top: 603,
    left: 110,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    width: 200,
    height: 67,
    position: "absolute",
  },
  rectangleParent2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    top:360,
    left:230
  },
  otpInput2: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    top:30,
    borderWidth: 1,
    backgroundColor:"#fff",

  },
  rectangleParent3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    top:340,
    left:320
  },
  otpInput3: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    top:30,
    borderWidth: 1,
    backgroundColor:"#fff",
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
    top: 240,
    color: Color.colorTomato,
    width: 400,
    height: 45,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    display: "flex",
    left: 8,
  },
  userVerification: {
    top: 130,
    width: 349,
    height: 93,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: -0.6,
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    left: 65,
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
    width: 364,
    flexDirection: "row",
    left: 46,
    position: "absolute",
  },
  otpVerificationEmailChild: {
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
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
  },
  continue: {
    left: 169,
    top: 622,
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 320,
    left: 100,
    color: Color.colorSienna,
    fontWeight: "780",
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
    width: 343,
  },
  text3: {
    top: 10,
    left: 28,
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    width: 26,
    height: 68,
  },
  otpVerificationEmail: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default OTPVerificationEmail;
