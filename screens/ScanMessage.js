import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import {useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from "axios";


const ScanMessage = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const userSession = router.params?.form || 'No email provided';
  const formId = userSession.formId;
  const [message, setMessage] = useState(null);
  const [sharingData, setSharingData] = useState(null);
  const  sessionId = userSession.sessionId;
  const passingEmail = {email : userSession.userEmailIdNew};
  const [en, setEn] = useState(null);
  
    useEffect(() => {
    const handleRequestData = async () => {
      try {
        const response = await axios.get('https://formflexa.onrender.com/api/v1/User/fetchingUser', { params: passingEmail }); // Change the URL to match your backend endpoint   
        const en = {
          name: response.data.fullName,
          NIC : response.data.nic,
          address: response.data.address,
          dob : response.data.dob,
          contactNo : response.data.mobileNumber,
          passport : response.data.passportNumber,
          profession : response.data.profession,
          email: response.data.email,
        }    
        setEn(en);   
        console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          Alert.alert("Error fetching data");
        }
      };
      handleRequestData();
},[]);   
//useEffect(() => {
  const handleAcceptRequest = () => {
  console.log("new Session");
 // console.log("\nen",en);
  const message = {
    en: en,
      }
  setMessage(message);
  const sharingData = {
    room: sessionId,
    message: message,
      }
    setSharingData(sharingData);
 // console.log("\nmessage",message);
 // console.log("\nsharingData",sharingData);

  const url = 'https://sdgp-50-server-1.onrender.com/api/sendMessage';

    if(sharingData !== null){
      axios.post(url, sharingData).then((response)=>{

        console.log("\n",response.data);
        console.log('Data Sent!');
        Alert.alert("Data sent successfully");
        navigation.navigate("HomePage");
        console.log(sharingData);
      }).catch((error)=> {
        Alert.alert("Error sending data");
        console.warn(error);
})
  }};

    const handleDenyRequest = () => {
    Alert.alert("Request denied, \nData are not passed..");
    navigation.navigate("ScanQR");
  };



  return (
    <View style={styles.successfulOtpEmailAndMobil}>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View
          style={[styles.verificationSuccessfulParent, styles.groupPosition]}
        >
          <Text
            style={[styles.verificationSuccessful, styles.continueTypo]}

          > {"Form :"}{formId}{` requests your data to fill the form.\nDo you wish to transfer data`}</Text>
         
          <Pressable
            style={[styles.yesButton]}
            onPress={handleAcceptRequest}
          >
            <Text style={[styles.Yes, styles.textFlexBox]}>Yes</Text>
          </Pressable>
          
          <Pressable
            style={[styles.groupLayout2]}
            onPress={handleDenyRequest}
          >
            <Text style={[styles.No1, styles.textFlexBox]}>NO</Text>
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
  yesButton: {
    top:150,
    height: 45,
    width: 130,
    position: "absolute",
    left:35,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
  },
  groupLayout2: {
    top:150,
    height: 45,
    left:210,
    width: 130,
    position: "absolute",
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
  
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
    height: 250,
    width: 390,
    position: "absolute",
  },
  verificationSuccessful: {
    top: 20,
    left: 30,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    textAlign: "center",
    justifyContent: "center",
    width: 325,
    height: 100,
    color: Color.colorBlack,
    position: "absolute",
    
  },
  Yes: {
    top:5,
    left:50,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.3,
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "900",
  },
  No1: {
    top:8,
    left:50,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.3,
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "900",
  },
  verificationSuccessfulParent: {
    height: 221,
    width: 390,
    position: "absolute",
  },
  rectangleParent: {
    top: 320,
    left: 13,
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
 
});

export default ScanMessage;
