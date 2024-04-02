//import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable , Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from "axios";


const HomePage = () => {
  const navigation = useNavigation();
  const [retrievedData, setRetrievedData] = React.useState(null);
  const router = useRoute();
  const userEmail = router.params?.userEmail || 'No email provided';
  const [userEmailIdNew, setUserEmailIdNew] = useState(userEmail);
  const passingEmail = {email : userEmailIdNew};
  useEffect (() => {
    Alert.alert('Welcome to FormFlexa home page..', 'Update your details under Update Profile if necessary');
  }, []);
    const fetchData = async () => {
      try {
        const response = await axios.get('https://formflexa.onrender.com/api/v1/User/fetchingUser', { params: passingEmail });
        setRetrievedData(response.data);
        console.log(response.data);
       
      } catch (error) {
        //console.error('Error fetching data:', error);
       // Alert.alert('Network Error', 'Error fetching data, Try Again..');
      }
    };
    fetchData();;
  
  return (
    <View style={styles.homepage}>
      <Image
        style={styles.formComputerIconsClipArtF}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
      <View style={[styles.homepageChild, styles.homepagePosition]} />
      <Text
        style={[styles.hiGoodDay, styles.hiGoodDayFlexBox]}
      > {"Hi,"} </Text>

      {retrievedData && (retrievedData.fullName !== null && retrievedData.fullName !== 0) ? (
        <View>
          <Text style={[styles.hiGoodDay, styles.startName]}>
            {retrievedData.fullName}
          </Text>
          </View>
          ) : ( <Text style={[styles.hiGoodDay, styles.startName]}> Loading.. </Text>)}
      <Text style={[styles.hiGoodDay, styles.hiGoodDayFlexBox]}> {"\nGood day to You !\nWhat do you wish to fill today ?"}</Text>
      <Pressable
        style={styles.iconLineHorizontal3}
        onPress={() => navigation.navigate("Menu", {userId : userEmailIdNew, userName: retrievedData.fullName})}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-line-horizontal-3.png")}
        />
      </Pressable>
      <View style={[styles.homepageItem, styles.homepagePosition]} />
      <Pressable
        style={[
          styles.b793c7Dd5d43eaA08c08153e4d,
          styles.b793c7Dd5d43eaA08c08153e4dPosition,
        ]}
        onPress={() => navigation.navigate("UpdateProfile")}
      >
      </Pressable>
          
      <Text style={[styles.firstName,styles.nameTypo]}> Name </Text> 
      <Text style={[styles.surname, styles.surnameTypo]}> Surname </Text>
      <Text style={[styles.fullName, styles.fullNameTypo]}> Full Name </Text>
      <Text style={[styles.dob, styles.fullNameTypo]}> Date of Birth </Text>
      <Text style={[styles.age, styles.ageTypo]}> Age </Text>
      <Text style={[styles.nic, styles.nicTypo]}> National Identity Card</Text>
      <Text style={[styles.passportNumber, styles.passportTypo]}> Passport Number </Text>
      <Text style={[styles.mobileNumber, styles.mobileTypo]}> Mobile Number </Text>
      <Text style={[styles.address, styles.addressTypo]}> Address</Text>
      <Text style={[styles.profession, styles.professionTypo]}> Profession</Text>

      <View style={[styles.nameParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.firstName !== null && retrievedData.firstName !== 0) ? (
      <View>
        <Text style={styles.name}>{retrievedData.firstName}</Text>
        </View>
        ) : (
        <Text style={styles.name}>-</Text>
        )}
        <View style={styles.groupChildN} />
        </View>

        <View style={[styles.lastNameParent, styles.parentLayout]}>
        {retrievedData && (retrievedData.lastName !== null && retrievedData.lastName !== 0) ? (
        <View>
          <Text style={styles.name}> {retrievedData.lastName} </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildL} />
        </View>

      <View style={[styles.fullNameParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.fullName !== null && retrievedData.fullName !== 0) ? (
      <View>
        <Text style={styles.name}>
          {retrievedData.fullName}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildF} />
        </View>

        <View style={[styles.dobParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.dob !== null && retrievedData.dob !== 0)? (
      <View>
        <Text style={styles.name}> {retrievedData.dob}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildD} />
        </View>

      <View style={[styles.ageParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.age !== null && retrievedData.age !== 0)? (
      <View>
        <Text style={styles.name}> {retrievedData.age}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildA} />
        </View>

      <View style={[styles.nicParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.nic !== null && retrievedData.nic !== 0)? (
      <View>
        <Text style={styles.name}> {retrievedData.nic}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildN} />
        </View>

        <View style={[styles.passportNumberParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.passportNumber !== null && retrievedData.passportNumber !== 0) ? (
      <View>
        <Text style={styles.name}> {retrievedData.passportNumber}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildP} />
        </View>

      <View style={[styles.mobileNumberParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.mobileNumber !== null && retrievedData.mobileNumber !== 0)? (
      <View>
        <Text style={styles.name}> {retrievedData.mobileNumber}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildM} />
        </View>
      

      <View style={[styles.addressParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.address !== null && retrievedData.address !== 0) ? (
      <View>
        <Text style={styles.name}>  {retrievedData.address}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildA} />
        </View>
      
    <View style={[styles.professionParent, styles.parentLayout]}>
      {retrievedData && (retrievedData.profession !== null && retrievedData.profession !== 0) ? (
      <View>
        <Text style={styles.name}> {retrievedData.profession}
        </Text>
        </View>
        ) : ( <Text style={styles.name}> - </Text>)}
        <View style={styles.groupChildP} />
        </View>
    
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.iconPhoneFill, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/-icon-phone-fill.png")}
      />
      <Image
        style={[styles.iconPlacemarkFill, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-icon-placemark-fill.png")}
      />
      <Image
        style={styles.homepageInner}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
      <Image
        style={styles.homepageInner2}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
        <Image
        style={styles.homepageInner3}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
      <Image
        style={[styles.remoteHomeWorkingIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/remotehomeworking2.png")}
      />
      
      <Image
        style={[styles.businessManIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/businessman1.png")}
      />
      <Image
        style={[
          styles.screenshot20240104151531ChrIcon,
          styles.b793c7Dd5d43eaA08c08153e4dPosition,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20240104-151531-chrome-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homepagePosition: {
    width: 420,
    backgroundColor: Color.colorOrchid_100,
    left: 0,
    position: "absolute",
  },
  startName: {
    left:55,
    top: 135,
  },
  hiGoodDayFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  b793c7Dd5d43eaA08c08153e4dPosition: {
    top: 60,
    position: "absolute",
    left:340,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  
  surnameTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  passportTypo:{
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },

  mobileTypo:{
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },

  addressTypo:{
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  professionTypo :{
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  fullNameTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
    left:50,
  },
  dobTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
  },
  ageTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
    left:50,
  },
  nameTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
  },
  nicTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 50,
  },
  parentLayout: {
    width: 308,
    left: 70,
    height: 43,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "90.47%",
    width: "3.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "5.58%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 21,
    position: "absolute",
  },
  rectangleLayout: {
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
  homepageChild: {
    top: 53,
    height: 74,
  },
  hiGoodDay: {
    top: 135,
    fontSize: FontSize.size_lg,
    width: 382,
    height: 59,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
    top:"-60%"
  },
  iconLineHorizontal3: {
    top: "10.37%",
    right: "84.84%",
    bottom: "89.39%",
    width: "9.58%",
    height: "2.24%",
    left: "6.58%",
    position: "absolute",
  },
  homepageItem: {
    top: 872,
    height: 60,
  },
  icon1: {
    borderRadius: Border.br_237xl,
  },
  b793c7Dd5d43eaA08c08153e4d: {
    left: 361,
    width: 57,
    height: 59,
  },
  name: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    height: 40,
    width: 300,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
    top:-9,
  },
  fullName: {
    top: 200
  },
  firstName:{
    top: 220,
  },
  surname: {
    top: 340,
  },
  
  age: {
    top: 470,
  },
  dob:{
    top: 410,
  },
  passportNumber:{
    top: 610,
    
  },
  mobileNumber: {
    top: 680,
  },
  address: {
    top: 750,
  },
  profession: {
    top: 820,
  },
  nic:{
    top: 440,
  },
  
  groupChild: {
    top: 10,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildF: {
    top: 15,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildN: {
    top: 17,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildL: {
    top: 17,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildD: {
    top: 17,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildA: {
    top: 17,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildP: {
    top: 17,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildM: {
    top: 17,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  
  
  
  group: {
    top: 499,
  },
  container: {
    top: 572,
  },
  
  englishFictionWriterParent: {
    top: 780,
  },
  vectorIcon: {
    top: "22.5%",
    bottom: "76.5%",
    height: "2.25%",
    right: "90.47%",
    width: "3.95%",
  },
  vectorIcon1: {
    top: "30.5%",
    bottom: "68.56%",
    height: "2.25%",
    right: "90.47%",
    width: "3.95%",
  },
  vectorIcon2: {
    top: "38.5%",
    bottom: "61.05%",
    height: "2.25%",
    right: "90.47%",
    width: "3.95%",
  },
  iconPhoneFill: {
    height: "2.36%",
    top: "76.5%",
    bottom: "39.06%",
  },
  iconPlacemarkFill: {
    height: "1.93%",
    width: "3.49%",
    top: "71.2%",
    right: "90.7%",
    bottom: "31.55%",
    left: "5.81%",
    position: "relative",
  },
  homepageInner: {
    top: 474,
    height: 23,
    width: 22,
    left: 20,
    position: "absolute",
  },

  homepageInner2: {
    top: 538,
    height: 23,
    width: 22,
    left: 20,
    position: "absolute",
  },

  homepageInner3: {
    top: 610,
    height: 23,
    width: 22,
    left: 20,
    position: "absolute",
  },
  remoteHomeWorkingIcon: {
    top: 822,
    left: 22,
    width: 22,
    overflow: "hidden",
  },
  fullNameParent: {
    top: 240,
  },
  lastNameParent: {
    top: 380,
  },
  nameParent:{
    top:310,
  },
  dobParent:{
    top: 450,
  },
  ageParent:{
    top:510,
  },
  passportNumberParent:{
    top:640,
  },
  nicParent:{
    top:580,
  },
  mobileNumberParent:{
    top:720,
  },
  addressParent:{
    top:790,
  },

  professionParent:{
    top:860,
  },
  businessManIcon: {
    top: 409,
    left: 23,
    width: 19,
    overflow: "hidden",
  },
  screenshot20240104151531ChrIcon: {
    left: 186,
    borderRadius: Border.br_10xs,
    width: 58,
    height: 57,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
    left: 0,
  },
  text3: {
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
  homepage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
