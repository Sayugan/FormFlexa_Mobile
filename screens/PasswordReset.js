import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from "axios";
import { Alert, ActivityIndicator } from "react-native";

const PasswordReset = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setLoading] = React.useState(false); // State variable for activity indicator
  const [loginT, setLoginT] = React.useState(true);


  const PasswordReset = () => {
    const url = 'https://formflexa.onrender.com/api/v1/User/resetPassword';

  
    if (!username.trim() || !oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      Alert.alert("Empty fields","All fields are required");
      return; 
    } else if (newPassword.trim().length < 8) {
      Alert.alert("Invalid new Credentials","Password must be at least 8 characters");
      return;
    } else if (newPassword.trim() !== confirmPassword.trim()) {
      // Hide activity indicator if validation fails
      Alert.alert("Invalid new Credentials","Passwords do not match");
      return;
    } else {
      setLoading(true); // Show activity indicator
      setLoginT(false);
      const credentialData = {
        username: username, 
        oldPassword : oldPassword,
        newPassword : newPassword
      }
      axios.put(url, credentialData)
      .then((response)=>{
        console.log(response.data);
        if(response.data === "password reset is successful"){
          Alert.alert((response.data));
          console.log('Password reset successeded!');
          navigation.navigate('HomePage', {userEmail : username});
        } else {
          Alert.alert((response.data));
        }
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

  return (
    <View style={[styles.passwordReset, styles.passwordResetLayout]}>
       <View style={styles.activtyView}>
      {isLoading && <ActivityIndicator style={styles.activityIndicator} size="extra large" color="#ffffff" />}
      </View>
    <Image
      style={[styles.formComputerIconsClipArtF, styles.formLayout]}
      contentFit="cover"
      source={require("../assets/formcomputericonsclipartformremovebgpreview-31.png")}
    />
    <View style={[styles.passwordResetChild, styles.childShadowBox]} />
    <View style={[styles.inputContainer, styles.enterLayout]}>
      <Text style={[styles.label, styles.logInFlexBox]}></Text>
      <TextInput
        style={styles.input1}
        placeholder="Enter Username"
        placeholderTextColor="#000"
        value={username}
        onChangeText={ setUsername}
      />
        <View style={[styles.passwordResetChild1, styles.passwordResetChild1Position]}/>
    </View>
    <View style={[styles.inputContainer, styles.enterLayout]}>
      <Text style={[styles.label, styles.enterTypo]}></Text>
      <TextInput
        style={styles.inputtype}
        placeholder="Enter Old Password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        value={oldPassword}
        onChangeText={setOldPassword}
      />
       <View style={[styles.passwordResetChild1, styles.passwordResetChild1Position]}/>
    </View>
   
    <View style={[styles.inputContainer, styles.enterLayout]}>
      <Text style={[styles.label, styles.enterTypo]}></Text>
      <TextInput
        style={styles.input3}
        placeholder="Create New Password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />
       <View style={[styles.passwordResetChild1, styles.passwordResetChild1Position]}/>
    </View>
    <View style={[styles.inputContainer, styles.enterLayout]}>
      <Text style={[styles.label, styles.enterTypo]}></Text>
      <TextInput
        style={styles.input4}
        placeholder="Confirm Password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={ setConfirmPassword}
      />
       <View style={[styles.passwordResetChild1, styles.passwordResetChild1Position]}/>
       </View>

      {!isLoading && (
      <Pressable
         style={[styles.rectangleParent, styles.groupChildLayout]}
         onPress={PasswordReset} 
         />)
      }
      {loginT && <Text style={[styles.reset, styles.textClr]}> {"Reset"}</Text>}
        
     
      <View style={[styles.backgroungLayer, styles.rectangleViewLayout]}>
        <Image
          style={[styles.formComputerIconsClipArtF1, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/formcomputericonsclipartformremovebgpreview-32.png")}
        />
        <View
          style={[
            styles.backgroungLayerInner,
            styles.passwordResetChild1Position,
          ]}
        />
      </View>
      <Text style={[styles.resetPassword, styles.logInClr]}>
        Reset Password
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />

      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.text2, styles.logInFlexBox]}>{'<'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  activtyView: {
    top: 650, 
  },
  activityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 9999,
    backgroundColor: "",
    size: "extra large",
  },
  passwordResetLayout: {
    overflow: "hidden",
    height: 932,
  },
  formLayout: {
    height: 405,
    width: 401,
    position: "absolute",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: FontFamily.medium,
  },
  input1: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    fontSize: 25,
    fontFamily: FontFamily.regular,
    top:300,
    left:54
  },
  inputtype: {
    width: 500,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 25,
    fontFamily: FontFamily.regular,
    top:326,
    left:50
  },
  input3: {
    width: 500,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 25,
    fontFamily: FontFamily.regular,
    top:332,
    left:54
  },
  input4: {
    width: 500,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 25,
    fontFamily: FontFamily.regular,
    top:330,
    left:54
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  enterLayout: {
    height: 50,
    width: 219,
  },
  logInFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    right:25,
  },
  enterTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  passwordLayout: {
    height: 1,
    width: 305,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top:25,
  },
  passwordLayout1: {
    width: 305,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  passwordLayout2: {
    width: 305,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top:25,
  },
  passwordResetChild1Position: {
    left: 65,
    position: "absolute",
  },
  passwordChildLayout: {
    width: 772,
    left: 253,
    height: 1,
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
  eyeIconLayout: {
    height: 27,
    width: 32,
    position: "absolute",
  },
  groupChildLayout: {
    height: 65,
    width: 200,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 430,
    position: "absolute",
  },
  groupLayout: {
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
  iconPosition1: {
    bottom: "16.87%",
    height: "64.38%",
    maxWidth: "100%",
    top: "18.75%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "15.63%",
    height: "59.38%",
    maxWidth: "100%",
    bottom: "25%",
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
  },
  backgroungLayout: {
    height: 537,
    width: 344,
    position: "absolute",
  },
  logInClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupInnerLayout: {
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
  passwordResetChild: {
    top: 270,
    left: 24,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorOrchid_200,
    shadowRadius: 10,
    elevation: 10,
    width: 384,
    height: 506,
    position: "absolute",
  },
  enterYourUsername: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    position: "absolute",
    left: 0,
    top: 0,
    height: 51,
    width: 219,
  },
  lineView: {
    top: 522,
    left: 61,
    position: "absolute",
  },
  passwordResetChild1: {
    height: 1,
    width: 305,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top:380,
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
    top: 491,
    left: 337,
  },
  eyeIcon4: {
    top: 414,
    left: 333,
  },
  eyeIcon3: {
    top: 576,
    left: 336,
  },
  
  reset: {
    top:670,
    left:180,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    top: 655,
    left: 113,
  },
  formComputerIconsClipArtF1: {
    top: 509,
    left: 127,
  },
  groupItem: {
    height: 32,
    width: 430,
    position: "absolute",
  },
  text: {
    left: 7,
    width: 177,
    color: Color.colorWhite,
    position: "absolute",
    textAlign: "left",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
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
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  backgroungLayerItem: {
    top: -145,
    left: -5057,
    backgroundColor: Color.colorGainsboro_200,
  },
  backgroungLayerInner: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorWhite,
    width: 294,
    height: 53,
    top: 358,
  },
  logIn: {
    left: 184,
    width: 128,
    top: 358,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    height: 54,
    alignItems: "center",
    display: "flex",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
  },
  signUp: {
    top: 542,
    left: 177,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
  },
  backgroungLayer: {
    top: 836,
    left: 735,
    backgroundColor: Color.colorSilver,
    overflow: "hidden",
    height: 932,
  },
  resetPassword: {
    top: 160,
    left:70,
    fontSize: FontSize.size_17xl,
    letterSpacing: -0.6,
    width: 346,
    height: 93,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
  },
  rectangleView: {
    top: 872,
    left: 2,
    backgroundColor: Color.colorOrchid_100,
    height: 60,
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
    top: 0,
  },
  text1: {
    left: 6,
    width: 141,
    height: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    top: 2,
  },
 
  text2: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    width: 26,
    height: 68,
    textAlign: "left",
  },
  pressable: {
    left: 58,
    top: 53,
    position: "absolute",
  },
  passwordReset: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
  },
});

export default PasswordReset;
