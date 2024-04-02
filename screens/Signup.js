import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import axios from "axios";
import { Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import { useState } from "react"; 

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false); // State variable for activity indicator
  const [isSignup, setIsSignup] = React.useState(true);
  
  const handleSignup = async () => {
    const url = "https://formflexa.onrender.com/api/v1/User/signUp";
    
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Empty Fields","All fields are required");
      return;
   // } else if (email.trim.endsWith("@gmail.com")) {
     // Alert.alert("Invalid Email");
     // return;
    }else if (password.trim().length<8) {
      Alert.alert("Invalid Credentials","Password must be at least 8 characters");
      return;
    } else if (password.trim !== confirmPassword.trim) {
      // Hide activity indicator if validation fails
      Alert.alert("Invalid Credentials","Passwords do not match");
      return;
    } else {
      setIsLoading(true);
      setIsSignup(false);
      const requestData = {
        fullName: name,
        email: email,
        password: password,
      };
     
      axios.post(url, requestData)
        .then((response) => {
          if (response.data !== email) {
            setIsLoading(false); // Hide activity indicator when request completes
            setIsSignup(true);
            Alert.alert(JSON.stringify(response.data));
            console.log(JSON.stringify(response.data));
      
          } else {
            setIsLoading(false); // Hide activity indicator when request completes
            Alert.alert(JSON.stringify(response.data));
            navigation.navigate('OTPVerificationEmail', { sentEmail: email });
            console.log('Signed Up!', email);
            Alert.alert("Signed Up Successfully!", "VerificationOTP sent to your email");
          }
        })
        .catch((error) => {
          setIsLoading(false); // Hide activity indicator if request fails
          setIsSignup(true);
          console.warn(error);
          Alert.alert("Network Error", "Please try again later");
        }).finally(() => {
          setIsLoading(false); // Hide activity indicator when request completes
          setIsSignup(true);
  })}};

  return (
    <View style={[styles.signup, styles.signupLayout1]}>
         <View style={styles.activtyView}>
      {isLoading && <ActivityIndicator style={styles.activityIndicator} size="extra large" color="#ffffff" />}
      </View>
      <Image
        style={[styles.formComputerIconsClipArtF, styles.formLayout]}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
      <View style={[styles.signupChild, styles.childShadowBox]} />
      <Pressable
        style={styles.alreadyHaveAccountContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.alreadyHaveAccountContainer1}>
            <Text style={styles.alreadyHaveAccount}>
              <Text style={styles.text1}>
                <Text style={styles.signTypo}>{"    "}</Text>
              </Text>
              <Text style={styles.iAcceptTheTypo}>
                <Text style={styles.text1}>{"   "}</Text>
                <Text style={styles.alreadyHave}>Already have an account?</Text>
              </Text>
            </Text>
            <Text style={styles.iAcceptTheTypo}>
              <Text style={styles.text4}>{" "}</Text>
              <Text style={styles.logIn1}>Log In</Text>
            </Text>
          </Text>
        </Text>
      </Pressable>
      <View style={[styles.enterYourNameWrapper, styles.enterLayout]}>
        <TextInput
          style={[styles.enterYourName, styles.enterTypo]}
          placeholder="Enter Your Name"
          placeholderTextColor="#000"
          value={name}
          onChangeText={setName}
          
        />
      </View>
      <TextInput
        style={[styles.enterYourEmail, styles.enterTypo]}
        placeholder="Enter Your Email"
        placeholderTextColor="#000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput 
        style={[styles.createPassword, styles.enterTypo]}
        placeholder="Create Password"
        placeholderTextColor="#000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        maxLength={10}
      />
      <TextInput
        style={[styles.confirmPassword, styles.enterTypo]}
        placeholder="Confirm Password"
        placeholderTextColor="#000"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        maxLength={10}
      />
      <Image
        style={styles.signupItem}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
       <View style={[styles.signupLayout]} />
      <View style={[styles.signupInner, styles.signupLayout]} />
      <View style={[styles.lineView, styles.signupLayout]} />
      <View style={[styles.signupChild1, styles.signupLayout]} />

      <View style={[styles.group1, styles.group1Layout]}>
      <View style={[styles.group1Child, styles.group1Layout]} />
      </View>

      <CheckBox
        title="I accept the policy and terms"
        checked={isChecked}
        onPress={handleCheckbox}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
        checkedColor="#007bff" // Change color when checked
      />
     
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
     {!isLoading && ( <Pressable
        style={styles.rectanglePressable}
        onPress={handleSignup}
      />)}
       <Pressable
       style={styles.dontHaveAnyContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.dontHaveAny}>
          I have an account? 
          <Text style={styles.login}> Login</Text>
        </Text>
        </Pressable>
      {isSignup && <Text style={[styles.signUp, styles.signFlexBox]}> {"Sign Up"}</Text>}
      <View style={[styles.backgroungLayer, styles.rectangleIconLayout]}>
        <Image
          style={[styles.formComputerIconsClipArtF1, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/formcomputericonsclipartformremovebgpreview-32.png")}
        />
        <Text style={[styles.logIn2, styles.logIn2Position]}>Log In</Text>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <Image
        style={styles.screenshot20240104151531ChrIcon}
        contentFit="cover"
        source={require("../assets/screenshot-20240104-151531-chrome-1.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("SignUpOrLogIn")}
      >
        <Text style={[styles.text7, styles.textFlexBox]}>{"<"}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  activtyView: {
    top: 650, 
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    margin: 0,
    padding: 0,
    top: 570,
    left: 25,
  },
  checkboxText: {
    fontSize: 18,
  },
  activityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 9999,
    backgroundColor: "",
    size: "extra large",
  },
   enterTypo: {
    color: Color.colorGray_100,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    width: "329%",
    height: 0,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  
  signupLayout: {
    height: "auto",
    width: 305,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },

  group1Layout: {
    height: 129,
    width: 625,
    position: "absolute",
  },
  signFlexBox: {
    letterSpacing: -0.3,
    textAlign: "left",
  },
  dontHaveAny: {
    fontSize: FontSize.size_xl,
    alignItems:"center",
  },
  dontHaveAnyContainer:{
    top:690,
    left:100,
  },
  login: {
    color: Color.colorTeal,
  },
 
  rectangleIconLayout: {
    width: 430,
    position: "absolute",
  },
  groupChildLayout: {
    height: 32,
    width: 430,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
    top: 0,
  },
  iconLayout: {
    maxWidth: "100%",
    bottom: "25%",
    top: "18.75%",
    height: "56.25%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    top: 2,
    textAlign: "left",
    position: "absolute",
  },
  logIn2Position: {
    top: 358,
    position: "absolute",
  },
  groupLayout: {
    width: 343,
    height: 32,
    position: "absolute",
  },
  formComputerIconsClipArtF: {
    top: 450,
    left: 90,
    width: 401,
    height: 405,
    position: "absolute",
  },
  signupChild: {
    top: 167,
    left: 20,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorOrchid_200,
    shadowRadius: 10,
    elevation: 10,
    width: 384,
    height: 587,
    position: "absolute",
  },
  signTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text1: {
    fontSize: FontSize.size_smi,
    
    
  },
  alreadyHave: {
    fontSize: FontSize.size_xl,
  },
  iAcceptTheTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  alreadyHaveAccount: {
    color: Color.colorBlack,
  },
  text4: {
    fontSize: FontSize.size_17xl,
    color: Color.colorPaleturquoise,
  },
  logIn1: {
    color: Color.colorTeal,
    fontSize: FontSize.size_xl,
    top:200,
    
    
  },
  alreadyHaveAccountContainer1: {
    width: "500%",
  },
  text: {
    width: 492,
    height: 23,
    textAlign: "left",
    display: "flex",
  },
  alreadyHaveAccountContainer: {
    left: -15,
    top: 782,
    position: "absolute",
  },
  enterYourName: {
    left: 0,
    top: 5,
    height: 51,
    width: 219,
    alignItems: "center",
    display: "flex",
  
  },
  enterYourNameWrapper: {
    top: 252,
    left: 57,
    fontSize:20,
    position: "absolute",
  },
  enterYourEmail: {
    top: 341,
    left: 59,
  
  },
  createPassword: {
    top: 417,
    left: 57,
  },
  confirmPassword: {
    left: 60,
    color: Color.colorGray_100,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    top: 502,
    position: "absolute",
  },
  signupItem: {
    top: 310,
    width: 304,
    maxHeight: "100%",
    left: 60,
    position: "absolute",
  },
  signupInner: {
    top: 380,
    left: 57,
  },
  
  lineView: {
    top: 451,
    left: 57,
  },
  signupChild1: {
    top: 538,
    left: 61,
  },
  signupChild2: {
    top: 977,
  },
  signupChild3: {
    top: 1205,
  },
  signupChild4: {
    top: 1088,
  },
  group1Child: {
    borderRadius: Border.br_53xl,
    backgroundColor: Color.colorBrown,
    left: 0,
    top: 0,
  },
  group1: {
    top: 1328,
    left: 145,
  },
  iAcceptThe: {
    top: 594,
    left: 25,
    fontSize: FontSize.size_base,
    width: 437,
    height: 35,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  lineIcon: {
    top: 1272,
    left: 236,
    width: 25,
    height: 0,
    position: "absolute",
  },
  eyeIcon2: {
    top: 1034,
    left: 435,
    width: 46,
    height: 54,
    position: "absolute",
  },
  eyeIcon1: {
    top: 420,
    left: 333,
  },
  eyeIcon3: {
    top: 505,
    left: 332,
  },
  signupChild5: {
    top: 613,
    left: 69,
    borderTopWidth: 8,
    width: 34,
    height: 8,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  rectanglePressable: {
    top: 640,
    left: 115,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    width: 200,
    height: 67,
    position: "absolute",
  },
  signUp: {
    top: 660,
    left: 180,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  formComputerIconsClipArtF1: {
    top: 509,
    left: 127,
  },
  backgroungLayerChild: {
    top: 198,
    left: 43,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkcyan,
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  logIn2: {
    left: 184,
    width: 128,
    height: 54,
    letterSpacing: -0.3,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
  
  },
  backgroungLayer: {
    top: 836,
    left: 735,
    backgroundColor: Color.colorSilver,
    overflow: "hidden",
    height: 932,
  },
  rectangleIcon: {
    top: 871,
    left: -2,
    height: 60,
  },
  screenshot20240104151531ChrIcon: {
    top: 90,
    left: 136,
    borderRadius: Border.br_4xs,
    width: 151,
    height: 159,
    position: "absolute",
  },
  text7: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    display: "flex",
    width: "auto",
    height: "auto",
    textAlign: "left",
    alignItems: "center",
  },
  pressable: {
    left: 40,
    top: 53,
    position: "absolute",
  },
  signup: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
  },
});

export default Signup;
