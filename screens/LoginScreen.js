import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import axios from "axios";
import { Alert } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false); // State variable for activity indicator
  const [loginT, setLoginT] = React.useState(true); // State variable for error message

  const MAX_PASSWORD_LENGTH = 15; // Maximum length of password

  const handleLogin = () => {
    // Define the URL of your backend API endpoint
    const url = 'https://formflexa.onrender.com/api/v1/User/login';

    const requestData = {
      username: username, 
      password : password
    }
    if (!username.trim() || !password.trim()) {
      Alert.alert("Empty fields","All fields are required");
      return; 
    //  } else if ((username.trim()).endsWith("@gmail.com")) {
    //     Alert.alert("Invalid Email");
    //     return;
    } else {
      setLoading(true); // Show activity indicator
      setLoginT(false);
    axios.post(url, requestData)
      .then((response)=>{
        console.log(response.data);
        navigation.navigate('HomePage', {userEmail : username});
        console.log('Logged In!');
      })
      .catch((error)=> {
        console.warn(error);
        if (error.message === "Request failed with status code 401") {
          Alert.alert("Invalid Credentials","User Not found Try again");
        } else {
        Alert.alert(error.message);
      }}).finally(() => {
        setLoading(false); // Hide activity indicator
          setLoginT(true);
      })
    }
  };

  const handleforgot = ()=>{
      console.log('Forgot Password');
      navigation.navigate('ForgotPassword');
    };
return (
  <View style={styles.loginScreen}>
    <View style={styles.activtyView}>
      {loading && <ActivityIndicator style={styles.activityIndicator} size="extra large" color="#ffffff" />}
      </View>
    <View style={styles.loginScreenChild} />
    <Image
      style={styles.formComputerIconsClipArtF}
      contentFit="cover"
      source={require("../assets/formflexbackground.png")}
    />
    <TextInput
      style={[styles.usernameInput, styles.userFlexBox]}
      placeholder="Username"
      placeholderTextColor="#000"
      value={username}
      onChangeText={setUsername}
    />
    <TextInput
      style={[styles.passwordInput,styles.userFlexBox]}
      placeholder="Password"
      placeholderTextColor="#000"
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => {
        if (text.length <= MAX_PASSWORD_LENGTH) {
          setPassword(text);
        }
      }}
      maxLength={MAX_PASSWORD_LENGTH}
    />
  
    <Pressable
      style={styles.forgotPasswordContainer}
      onPress={handleforgot}
    >
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>
    </Pressable>
    <Image
      style={styles.pngTransparentPasswordManagIcon}
      contentFit="cover"
      source={require("../assets/pngtransparentpasswordmanagercomputericonspasswordstrengthpasswordsafechangmiscellaneouspasswordstrengthpasswordsafethumbnailremovebgpreview-1.png")}
    />
    <Image
      style={styles.freeUserIcon3296ThumbRemo}
      contentFit="cover"
      source={require("../assets/freeusericon3296thumbremovebg-1.png")}
    />
    <Pressable
      style={styles.dontHaveAnyContainer}
      onPress={() => navigation.navigate("Signup")}
    >
      <Text style={styles.dontHaveAny}>
        Don’t have an account? 
        <Text style={styles.signUp1}> Sign Up</Text>
      </Text>
    </Pressable>
    
    <View style={styles.loginScreenInner} />
    <View style={[styles.lineView, styles.lineViewLayout]} />
    <View style={[styles.loginScreenChild1, styles.lineViewLayout]} />
    <View style={styles.rectangleView} />
    
    {!loading && (<Pressable
      style={styles.groupChild}
      onPress={handleLogin}
    >
      <View style={[styles.groupPosition]}  />
        {loginT && <Text style={styles.logIn1}>{"Log In"}</Text>}
    </Pressable>)}

    <View style={styles.loginScreenChild2} />
    <Image
      style={styles.screenshot20240104151531ChrIcon}
      contentFit="cover"
      source={require("../assets/screenshot-20240104-151531-chrome-1.png")}
    />
    <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
      <View style={[styles.groupInner, styles.groupInnerLayout]} />
    </View>
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("SignUpOrLogIn")}
    >
      <Text style={styles.text8}>{"<"}</Text>
    </Pressable>
  </View>
);
};
    
const styles = StyleSheet.create({
  activtyView: {
    top: 620,
  },
  activityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 9999,
    backgroundColor: "",
    size: "extra large",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    right:25,
    
  },
  userFlexBox : {
    width: 280,
  },
  usernameInput: {
    top: 280,
    left:40,
    fontSize: 26, 
    color: "#333", 
    position: "absolute",
  },
  passwordInput: {
    top: 420, 
    left: 40,
    fontSize: 26,
    color: "#333", 
    position: "absolute",
  },
  
 
  forgotPasswordText: {
    color: "#06ffd2",
    fontSize: 19,
    fontWeight: "600",
  },
  forgotPasswordContainer: {
    top:500, 
    left:50,
   position: "absolute",
  },

 
  lineViewLayout: {
    width: 329,
    height: 0,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
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
  loginScreenChild: {
    top: 167,
    left:20,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorOrchid_200,
    shadowRadius:100,
    elevation: 10,
    width: 385,
    height: 600,
    position: "absolute",
  },
  formComputerIconsClipArtF: {
    top: 450,
    left: 90,
    width: 401,
    height: 405,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_smi,
  },
  dontHaveAny: {
    fontSize: FontSize.size_xl,
    alignItems:"center",
  },
  text2: {
    fontSize: FontSize.size_17xl,
    color: Color.colorPaleturquoise,
  },
  up: {
    fontSize: FontSize.size_base,
  },
  signUp1: {
    color: Color.colorTeal,
  },
  
  text: {
    width: 395,
    height: 16,
  },
  dontHaveAnyContainer: {
    left: 70,
    top: 700,
    position: "absolute",
  },
  pngTransparentPasswordManagIcon: {
    top: 410,
    left: 338,
    width: 28,
    height: 34,
    position: "absolute",
  },
  freeUserIcon3296ThumbRemo: {
    top: 283,
    left: 334,
    width: 29,
    height: 28,
    position: "absolute",
  },
  
  lineView: {
    top: 321,
    left: 37,
  },
  loginScreenInner: {
    top: 1170,
    left: 250,
    width: 873,
    height: 0,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },

  loginScreenChild1: {
    top: 456,
    left: 40,
  },
  
  groupChild: {
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_100,
    borderColor: Color.colorPurple_100,
    borderWidth: 3,
    left: 110,
    height: 67,
    width: 200,
    position: "absolute",
    borderStyle: "solid",
    top: 610,
  },
  
  logIn1: {
    top: 15,
    left: 65,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  loginScreenChild2: {
    top: 872,
    backgroundColor: Color.colorOrchid_100,
    width: 430,
    height: 60,
    left: 0,
    position: "absolute",
  },
  screenshot20240104151531ChrIcon: {
    top: 90,
    left: 136,
    borderRadius: Border.br_4xs,
    width: 151,
    height: 159,
    position: "absolute",
  },
  rectangleParent: {
    top: 14,
    left: 52,
  },
  text8: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    display: "flex",
    width: 26,
    height: 68,
    textAlign: "left",
    alignItems: "center",
    left:20,
    top:40,
    position:"relative",
    
  },

  loginScreen: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginScreen;
