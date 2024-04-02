//import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border,T } from "../GlobalStyles";
import {useRoute} from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
const Menu = () => {
try{
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId || 'No email provided';
  const [userEmailIdNew, setUserEmailIdNew] = useState(userId);
  console.log("userEmail in Menu.js: ", userEmailIdNew);
  const handlePress = () => {
    // Change 'your-url-here' to the actual URL you want to open
    Linking.openURL('https://sites.google.com/view/formflexa/home');
  };
  
  return (
    <View style={styles.menu}>
      <View style={[styles.menuItem, styles.menuPosition]}/>
      <TouchableOpacity onPress={handlePress}>
      <Image
        style={[styles.b793c7Dd5d43eaA08c08153e4dIcon, styles.iconLayout1]}
        source={require("../assets/logo.png")}
      />
    </TouchableOpacity>
      
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0.17, 0.43, 0.64, 0.81]}
        colors={["#a41496", "#b93fad", "#dd89d5", "rgba(231, 31, 211, 0)"]}
      />
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("HomePage", { userId : userEmailIdNew})}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.menu1, styles.menu1Typo]}>Menu</Text>

      <View>
      <Pressable
        style={[styles.scanQrCode, styles.scanQrPosition]}
        onPress={() => navigation.navigate("ScanQR",{userId :userEmailIdNew})} >
      </Pressable>
      </View>

      <View> 
      <Pressable
        style={[styles.updateProfile, styles.updateProfilePosition]}
        onPress={() => navigation.navigate("UpdateProfile", {userId : userEmailIdNew})} >
      </Pressable>
      </View>

      <View> 
      <Pressable
        style={[styles.addBank, styles.addBankPosition]}
        onPress={() => navigation.navigate("AddBank", {userId : userEmailIdNew})}>  
      </Pressable>
      </View>

      <View>
      <Pressable
          style={[styles.updateBank, styles.updateBankPosition]}
          onPress={() => navigation.navigate("SubscribedBanksList", { userId : userEmailIdNew})} >
      </Pressable>
      </View>

      <View>
      <Pressable
        style={[styles.resetPassword, styles.resetPasswordPosition]} 
        onPress={() => navigation.navigate("PasswordReset", { userId : userEmailIdNew})}>
      </Pressable>
      </View>

      <View>
      <Pressable
        style={[styles.signOut, styles.signOutPosition]}
        onPress={() => navigation.navigate("WelcomePage", {userId : userEmailIdNew})}> 
      </Pressable>
      </View>
      <View style={styles.menuChild9} />

        <Text style={[styles.scanQrCode, styles.scanTypo]}>{"Scan QR Code"}</Text>
        <Text style={[styles.updateProfile, styles.scanTypo]}>{"Update Profile"}</Text>
        <Text style={[styles.updateBank, styles.scanTypo]}>{"Update Bank"}</Text>
        <Text style={[styles.resetPassword, styles.scanTypo]}>{"Reset Password"}</Text>
        <Text style={[styles.scanQrCode1, styles.scanTypo]}>{"Add Bank"}</Text>
        <Text style={[styles.signOut,styles.scanTypo]}>{"Sign Out"}</Text>
        <Image
          style={[styles.pencilEditIcon, styles.pencilIconLayout]}
          contentFit="cover"
          source={require("../assets/penciledit.png")}
        />
        <Image
          style={[styles.pencilEditIcon1, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/penciledit1.png")}
        />

      
      <Image
        style={[styles.menuChild10, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.menuChild11, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/group-37.png")}
      />
      <Image
        style={[styles.menuChild12, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/group-39.png")}
      />
      <Image
        style={[styles.qrCodeIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/qrcode.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </View>
        </View>
      );
 } catch(error) {
      console.log("Error in Menu.js");
      console.log(error);
 }
};


    const styles = StyleSheet.create({
  menuPosition: {
    width: 430,
    backgroundColor: Color.colorOrchid_100,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 59,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  surnameTypo: {
    width: 217,
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 39,
    textAlign: "left",
    position: "absolute",
  },

  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    left: 68,
    height: 43,
    width: 217,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text2Layout: {
    height: 21,
    position: "absolute",
  },
  vectorLayout: {
    width: "9.58%",
    position: "absolute",
  },
  menu1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  scanTypo: {
    width: 216,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    color: Color.colorPurple_200,
    textAlign: "left",
  },
  scanTypo3: {
    width: 216,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    color: Color.colorPurple_200,
    textAlign: "left",
    padding:10,
    right:10,
  },

  scanQrPosition: {
    left: 3,
    top:150,
    width: 302,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lg,
    borderBottomWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    height:69,
  },
  updateProfilePosition: {
    left: 3,
    top:230,
    width: 302,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lg,
    borderBottomWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    height:69,
  },
  addBankPosition: {
    left: 3,
    top:305,
    width: 302,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lg,
    borderBottomWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    height:69,
  },
  updateBankPosition: {
    left: 3,
    top:380,
    width: 302,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lg,
    borderBottomWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    height:69,
  },
  resetPasswordPosition: {
    left: 3,
    top:455,
    width: 302,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lg, 
    borderBottomWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    height:69,
  },
  signOutPosition: {
    left: 3,
    top:530,
    width: 302,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lg,
    borderBottomWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    height:69,
  },

  pencilIconLayout: {
    borderRadius: Border.br_8xs,
    height: 32,
    overflow: "hidden",
  },
  iconChildLayout: {
    width: 41,
    position: "absolute",
  },
  groupChildLayout: {
    width: 343,
    height: 32,
    position: "absolute",
  },
  iconPosition: {
    bottom: "25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuChild: {
    top: 49,
    height: 74,
  },
  hiGoodDay: {
    top: 127,
    fontSize: FontSize.size_lg,
    width: 382,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 59,
    left: 20,
  },
  iconLineHorizontal3: {
    height: "2.24%",
    top: "6.44%",
    right: "85.53%",
    bottom: "91.32%",
    left: "4.88%",
    width: "9.58%",
    position: "absolute",
  },
  menuItem: {
    top: 872,
    height: 60,
  },
  b793c7Dd5d43eaA08c08153e4dIcon: {
    top: 55,
    left: 340,
    width: 60,
    height: 57,
  },
  logoIcon: {
    left: 179,
    borderRadius: 7,
    width: 65,
    top: 60,
  },
  name: {
    top: 209,
    height: 43,
    width: 217,
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 39,
    textAlign: "left",
    position: "absolute",
  },
  surname: {
    top: 283,
    height: 35,
  },
  fullName: {
    top: 352,
    height: 36,
  },
  nationalIdentityCard: {
    top: 419,
    width: 303,
    color: Color.colorPurple_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 39,
    height: 31,
    fontSize: FontSize.size_3xl,
  },
  mobileNumber: {
    top: 491,
    height: 35,
  },
  address: {
    top: 563,
    height: 35,
  },
  profession: {
    top: 701,
    height: 35,
  },
  peter: {
    top: 242,
  },
  menuInner: {
    top: 271,
  },
  parker: {
    top: 313,
  },
  lineView: {
    top: 342,
  },
  peterParker: {
    top: 384,
  },
  menuChild1: {
    top: 413,
  },
  text: {
    top: 448,
  },
  menuChild2: {
    top: 477,
  },
  text1: {
    top: 521,
  },
  menuChild3: {
    top: 550,
  },
  no41: {
    top: 592,
  },
  menuChild4: {
    top: 621,
  },
  andersonLane: {
    top: 626,
  },
  menuChild5: {
    top: 655,
  },
  colombo11: {
    top: 665,
  },
  menuChild6: {
    top: 694,
  },
  englishFictionWriter: {
    top: 729,
  },
  groupIcon: {
    top: 427,
    width: 20,
    height: 19,
    left: 20,
    position: "absolute",
  },
 
  remoteHomeWorkingIcon: {
    top: 706,
    width: 22,
    left: 20,
    overflow: "hidden",
  },
  rectangleLineargradient: {
    borderColor: Color.colorBlack,
    backgroundColor: "transparent",
    width: 308,
    borderBottomWidth: 9,
    height: 1090,
    borderTopWidth: 2,
    top:49,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  menuChild8: {
    top: 932,
    left: 308,
    borderWidth: 3,
    borderColor: Color.colorOrchid_100,
    backgroundColor: "transparent",
    height: 886,
    width: 308,
    borderStyle: "solid",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "3.49%",
    top: "6.12%",
    right: "86.93%",
    bottom: "89.9%",
    height: "3.98%",
  },
  menu1: {
    top: 58,
    left: 94,
    color: Color.colorWhite,
    textAlign: "center",
    width: 145,
    height: 36,
  },
  
  scanQrCode: {
    top: 160,
    left: 23,
    position: "absolute",
  },
  
  addBank: {
    top: 295,
    height: 62,
    borderColor: Color.colorOrchid_100,
    left: 3,
  },
  
  signOut: {
    top: 545,
    left: 23,
    position: "absolute",
  },
  updateProfile: {
    top: 240,
    width: 216,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    color: Color.colorPurple_200,
    textAlign: "left",
    left: 23,
  },
  updateBank: {
    top: 350,
    width: 285,
    left: 23,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    color: Color.colorPurple_200,
    textAlign: "left",
  },
  resetPassword: {
    top: 470,
    left: 23,
    position: "absolute",
  },
  scanQrCode1: {
    top: 319,
    left: 23,
    position: "absolute",
  },
  pencilEditIcon: {
    width: 42,
    height: 32,
    left: 242,
    top: 250,
    position: "absolute",
  },
  pencilEditIcon1: {
    top: 395,
    left: 243,
    height: 32,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  
  viewProfile1: {
    top: 150,
    height: 356,
    borderRadius: Border.br_lg,
    width: 308,
    left: 0,
    position: "absolute",
  },
  signOut1: {
    top: 580,
  },
  signOut2: {
    left: 26,
    top: 506,
    position: "absolute",
  },
  menuChild9: {
    top: 105,
    left: -1,
    width: 310,
    height: 2,
    borderColor: Color.colorWhite,
    borderTopWidth: 4,
    borderStyle: "solid",
    position: "absolute",
  },
  menuChild10: {
    height: 39,
    left: 242,
    top: 318,
  },
  menuChild11: {
    height: 39,
    left: 242,
    top: 465,
  },
  menuChild12: {
    top: 160,
    height: 45,
    left: 242,
  },
  
  groupChild: {
    top: 0,
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
    width: 343,
  },
  text2: {
    top: 2,
    left: 6,
    width: 141,
    fontSize: FontSize.size_3xl,
    height: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rectangleParent: {
    top: 14,
    left: 52,
  },
  menu: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
  
});

export default Menu;