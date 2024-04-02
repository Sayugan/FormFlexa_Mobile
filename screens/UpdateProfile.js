//import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable,ScrollView,TextInput,Alert,KeyboardAvoidingView, ActivityIndicator} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const UpdateProfile = () => {
  const navigation = useNavigation();
  const [updatingData, setUpdatingData] = React.useState(null);
  const router = useRoute();
  const userId = router.params?.userId || 'No email provided';
  const passingEmail = {email:userId};
  const [loading, setLoading] = React.useState(false); // State variable for activity indicator
  const [loginT, setLoginT] = React.useState(true); // State variable for error message

  const [firstname, setfirstname] = useState();
  const [surname, setsurname] = useState();
  const [fullname, setfullname] = useState();
  const [age, setage] = useState();
  const [dob, setDob] = useState();
  const [nic, setnic] = useState();
  const [passportNumber, setpassportNumber] = useState();
  const [mobileNumber, setmobileNumber] = useState();
  const [address, setaddress] = useState();
  const [profession, setprofession] = useState();


  const [firstnameInput, setfirstnameInput] = useState("");
  const [surnameInput, setsurnameInput] = useState("");
  const [fullnameInput, setfullnameInput] = useState("");
  const [dobInput, setDobInput] = useState("");
  const [nicInput, setnicInput] = useState("");
  const [passportNumberInput, setpassportNumberInput] = useState("");
  const [mobileNumberInput, setmobileNumberInput] = useState("");
  const [addressInput, setaddressInput] = useState("");
  const [professionInput, setprofessionInput] = useState("");
  
  const isNumeric = (input) => {
    return /^\d+$/.test(input);
  }

  const hasNoSpecialCharacters = (input) => {
    return /^[a-zA-Z0-9\s,-]+$/.test(input);
  }
  
  const handleCheckNum = (input) => {
    if (!isNumeric(input)) {
      Alert.alert('Non-Numeric', input,'Input contains non-numeric characters');
      return true;
    } else {
      return false;
    }
  }
  const handleCheckCharacter = (input) => {
   if (!hasNoSpecialCharacters(input)) {
      Alert.alert('Special Characters Found', input, 'Input contains special characters');
      return true;
   }
      else{
        return false;
      
      }
  }
  
  useEffect(() => {   
    const fetchData = async () => {
      try {
        const response = await axios.get('https://formflexa.onrender.com/api/v1/User/fetchingUser', { params: passingEmail }); // Change the URL to match your backend endpoint          
      //  setUpdatingData(response.data);
        console.log(response.data);

       if(response.data.firstName !== null){
        setfirstname(response.data.firstName);
       } else {setfirstname("")};

        if (response.data.lastName !== null){
        setsurname(response.data.lastName);
        } else {setsurname("")};

        if(response.data.fullName !== null){
          setfullname(response.data.fullName);
        } else {setfullname("")};
        if(response.data.age !== 0){
        setage(JSON.stringify(response.data.age));
        } else {setage("")};

        if(response.data.dob !== null){
        setDob(response.data.dob);
        } else {setDob("")};

        if (response.data.nic !== null){
        setnic(response.data.nic);
        } else {setnic("")};

        if(response.data.passportNumber !== null){ 
        setpassportNumber(response.data.passportNumber);
        } else {
          setpassportNumber("");
        }
        if(response.data.mobileNumber !== 0){
        setmobileNumber(JSON.stringify(response.data.mobileNumber));
        } else {setmobileNumber(0)};

        if(response.data.address !== null){
        setaddress(response.data.address);
        } else {setaddress("")};

        if(response.data.profession !== null){
        setprofession(response.data.profession);
        } else {setprofession("")};

        } catch (error) {
          console.error('Error fetching data:', error);
          console.log(response.data);
          console.log(passingEmail);

          Alert.alert("Error fetching data");
        }
      };
      console.log("Fetching data");
      fetchData();
    }, []);

    const saveUser = () => {
      console.log("Save User");
      try{
      if(firstnameInput !== ""){
        if(handleCheckCharacter(firstnameInput)){
        setfirstnameInput(firstnameInput);
      } 
    }else {setfirstnameInput(firstname)};

      if (surnameInput !== ""){
        if(handleCheckCharacter(surnameInput)){
        setsurnameInput(surnameInput);
        }
      } else {setsurnameInput(surname)};

      if(fullnameInput !== ""){
        if(handleCheckCharacter(fullnameInput)){
          setfullnameInput(handleCheckCharacter(fullnameInput));
        }
      } else {setfullnameInput(fullname)};
      
      if(dobInput !== ""){
        setDobInput(handleCheckCharacter(dobInput));
      } else {setDobInput(dob)};

      if (nicInput !== ""){
        if(handleCheckCharacter(nicInput)){
        setnicInput(handleCheckCharacter(nicInput));
      }
      } else {setnicInput(nic)};

      if(passportNumberInput !== ""){
        if(handleCheckCharacter(passportNumberInput)){
        setpassportNumberInput(handleCheckCharacter(passportNumberInput));
        }
      }else{
        setpassportNumberInput(passportNumber)};
      
      if(mobileNumberInput !== ""){
        if(handleCheckNum(mobileNumberInput)){
        setmobileNumberInput(handleCheckNum(mobileNumberInput));
        }
      } else {setmobileNumberInput(mobileNumber)};

      if(addressInput !== ""){
        if(handleCheckCharacter(addressInput)){
        setaddressInput(handleCheckCharacter(addressInput));
        }
      } else {setaddressInput(address)};

      if(professionInput !== ""){
        if(handleCheckCharacter(professionInput)){
        setprofessionInput(handleCheckCharacter(professionInput));
        }
      } else {setprofessionInput(profession)};

      console.log("Save User running");
    } catch (error) {
      if(!(error.message === "Type Error")){
      console.error('Error saving data:', error);
      Alert.alert("Error saving data", error.message);
      } else {
        console.log("Error saving data");
      }
    }

      const user = {
        email : userId,
        firstName: firstnameInput,
        lastName: surnameInput,
        fullName: fullnameInput,
        dob: dobInput,
        nic: nicInput,
        passportNumber: passportNumberInput,
        mobileNumber: mobileNumberInput,
        address: addressInput,
        profession: professionInput
      };

      console.log(user);  
      setLoading(true);
      setLoginT(false);  
      const url = 'https://formflexa.onrender.com/api/v1/User/updateUser';
      axios.put(url, user)
        .then((response) => {
          setLoading(true);
          setLoginT(false);
          console.log(response.data);
          if(response.data === "user details have been updated successfully..."){
            Alert.alert("User Profile Updated", response.data);
            navigation.navigate('HomePage');
          } else {
            Alert.alert("Try Again..",response.data);
          }
        })
        .catch((warn) => {
          setLoading(true);
          setLoginT(false);
          console.log(warn);
          if (warn.message === "Network Error") {
          Alert.alert("Network Error", "Try Again..");
        } else {
          Alert.alert("Error updating user details.", "Please try again.");
        }})
        .finally(() => {
        setLoading(false); // Hide activity indicator
        setLoginT(true);
        });
        };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <KeyboardAvoidingView
      style={styles.updateProfile}
      keyboardVerticalOffset={100}
    >
  
    <View style={styles.updateProfile}>
    <View style={styles.activtyView}>
      {loading && <ActivityIndicator style={styles.activityIndicator} size="extra large" color="#ffffff" />}
      </View>
      <Image
        style={styles.formComputerIconsClipArtF}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
      <View style={styles.updateProfileChild} />
      <Text style={[styles.firstName,styles.nameTypo]}> Name </Text> 
      <Text style={[styles.surname, styles.nameTypo]}> Surname </Text>
      <Text style={[styles.fullName, styles.nameTypo]}> Full Name </Text>
      <Text style={[styles.dob, styles.nameTypo]}> Date of Birth </Text>
      <Text style={[styles.age, styles.nameTypo]}> Age </Text>
      <Text style={[styles.nic, styles.nameTypo]}> National Identity Card</Text>
      <Text style={[styles.passportNumber, styles.nameTypo]}> Passport Number </Text>
      <Text style={[styles.mobileNumber, styles.nameTypo]}> Mobile Number </Text>
      <Text style={[styles.address, styles.nameTypo]}> Address</Text>
      <Text style={[styles.profession, styles.nameTypo]}> Profession</Text> 
      
     

      <View style={[styles.nameParent, styles.parentLayout]}>
          <TextInput style={styles.name} 
          value={firstnameInput}
          placeholder= {firstname !== "" ? firstname : "Enter your firstname"}
          placeholderTextColor="#000000"
          onChangeText={setfirstnameInput}
        
          />
        <View style={styles.groupChild} />
      </View>


       <View style={[styles.lastNameParent, styles.parentLayout]}>
          <TextInput style={styles.name} 
          
          placeholderTextColor="#000000"
          placeholder={surname !== "" ? surname : "Enter your surname"}
          value={surnameInput}
          onChangeText={setsurnameInput} />

        <View style={styles.groupChild}/>
        </View>    

        <View style={[styles.fullNameParent, styles.parentLayout]}>
          <TextInput style={styles.name} 
          value = {fullnameInput}
          placeholderTextColor="#000000"
          placeholder={fullname !== "" ? fullname : "Enter your fullname"}
          onChangeText={setfullnameInput} />

         <View style={styles.groupChild} />
        </View>

        <View style={[styles.dobParent, styles.parentLayout]}>
          <TextInput style={styles.name} 
          value = {dobInput}
          onChangeText={setDobInput}
          placeholder={dob !== ""? dob : "format : (yyyy-mm-dd)"}
          placeholderTextColor="#000000"/>
        <View style={styles.groupChild} />
        </View>

        <View style={[styles.ageParent, styles.parentLayout]}>
          <TextInput style={styles.name}
          onChangeText={setage}
          value={age !== "" ? age : ""}
          placeholder="Age will be calculated automatic"
          placeholderTextColor="#000000"
          editable={false} // This line makes the TextInput non-editable
          width={1000}
          fontSize={FontSize.size_xl}
          />
        <View style={styles.groupChild} />
        </View>

        <View style={[styles.nicParent, styles.parentLayout]}>
            <TextInput style={styles.name}
             value = {nicInput}
             placeholderTextColor="#000000"
             placeholder={nic !== "" ? nic : "Enter your NIC Number"}
             onChangeText={setnicInput} />
        <View style={styles.groupChild} />
        </View>

        <View style={[styles.passportNumberParent, styles.parentLayout]}>
          <TextInput style={styles.name} 
          onChangeText={setpassportNumberInput}
          placeholderTextColor="#000000"
          placeholder={passportNumber !== "" ? passportNumber : "Enter your passport Number"}
          value={passportNumberInput} />
        <View style={styles.groupChild} />
        </View>

        <View style={[styles.mobileNumberParent, styles.parentLayout]}>
          <TextInput style={styles.name}
          onChangeText={setmobileNumberInput}
          placeholderTextColor="#000000"
          placeholder={mobileNumber !== 0 ? mobileNumber : "eg: (07X XXXX XXX)"}
          value={mobileNumberInput}/>
        <View style={styles.groupChild} />
        </View>


        <View style={[styles.addressParent, styles.parentLayout]}>
          <TextInput style={styles.name} 
          onChangeText={setaddressInput}
          placeholder={address !== "" ? address : "eg : (no.1,Street,City)"}
          placeholderTextColor="#000000"
          value={addressInput}/>
        <View style={styles.groupChild} />
        </View>
      
        <View style={[styles.professionParent, styles.parentLayout]}>
          <TextInput style={styles.name}
           onChangeText={setprofessionInput}
           placeholder={profession !== "" ? profession : "Enter your profession"}
           value={professionInput}
           placeholderTextColor="#000000"/>
        <View style={styles.groupChild} />
        </View>
        
    
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.iconPhoneFill}
        contentFit="cover"
        source={require("../assets/-icon-phone-fill.png")}
      />
      <Image
        style={styles.iconPlacemarkFill}
        contentFit="cover"
        source={require("../assets/-icon-placemark-fill.png")}
      />
      <Image
        style={styles.updateProfileItem}
        contentFit="cover"
        source={require("../assets/group-311.png")}
      />

     <Image
        style={styles.updateProfileItem1}
        contentFit="cover"
        source={require("../assets/group-311.png")}
      />
      <Image
        style={styles.homepageInner2}
        contentFit="cover"
        source={require("../assets/group-44.png")}
      />
      <Image
        style={[styles.remoteHomeWorkingIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/remotehomeworking1.png")}
      />
      <Image
        style={[styles.businessManIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/businessman.png")}
      />
    {!loading && ( <Pressable
       style={styles.rectanglePressable}
       onPress={saveUser}
     />)}
     {loginT && <Text style={[styles.saveText, styles.saveFlexBox]}> {"Save"}</Text>}
     
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild7, styles.groupLayout]} />
        <Pressable
          style={styles.iconLineHorizontal3}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-line-horizontal-3.png")}
          />
        </Pressable>
        <Text style={[styles.updateProfile1, styles.saveTypo1]}>
          Update Profile
        </Text>
        <Image
          style={styles.screenshot20240104151531ChrIcon}
          contentFit="cover"
          source={require("../assets/screenshot-20240104-151531-chrome-4.png")}
        />
      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  activtyView: {
    top: 900,
  },
  surnameInput:{
    top:112,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    fontFamily: "Arial",
  },
  activityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 9999,
    backgroundColor: "#fffff",
    size: "extra large",
  },
  nameTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
    left:50,
  },
  parentLayout: {
    width: 308,
    left: 70,
    height: 43,
    position: "absolute",
  },

  text3Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  iconLayout2: {
    height: 20,
    position: "absolute",
  },
  iconLayout1: {
    height: 21,
    position: "absolute",
  },
  
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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

rectangleParent:{
    top: 340,
    left:60,
  },
  saveTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "100",
    position: "absolute",
    letterSpacing: -0.3,
    display: "flex",
    alignItems: "center",
    width: 80,
    left:150,
    height: 30,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    top: 790,
  },
  saveTypo1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "100",
    position: "absolute",
    left:110,
    top:25,
  },
  groupLayout: {
    height: 91,
    width: 430,
    left: 0,
    position: "absolute",
  },
  groupChild8Layout: {
    height: 32,
    width: 343,
    position: "absolute",
  },
  iconPosition: {
    bottom: "25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formComputerIconsClipArtF: {
    top: 450,
    left: 90,
    width: 401,
    height: 405,
    position: "absolute",
  },
  updateProfileChild: {
    top: 872,
    height: 60,
    width: 430,
    backgroundColor: Color.colorOrchid_100,
    left: 0,
    position: "absolute",
  },
  name: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    height: 43,
    width: 500,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
    top:-10
  },
  firstName:{
    top: 250,
  },
  surname: {
    top: 320,
  },
  fullName: {
    top: 180
    
  },
  dob: {
    top: 390,
    
  },
  age:{
    top: 460,
    
  },
  nic: {
    top: 530,
  },
  passportNumber: {
    top: 600,
  },
  
  mobileNumber: {
    top: 670,
  },
  address: {
    top: 740,
  },
  profession: {
    top: 810,
  },
  groupChild: {
    top:20,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChild1: {
    top: 18,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildn: {
    top: 10,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChilda: {
    top: -9,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },
  groupChildp: {
    top: 5,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
    position: "absolute",
  },

  group: {
    top: 500,
  },
  container: {
    top: 572,
  },
  
  vectorIcon: {
    top: "19.5%",
    bottom: "76.5%",
    height: "2.25%",
    right: "88.47%",
    width: "3.95%",
  },
  vectorIcon1: {
    top: "27.5%",
    bottom: "68.56%",
    height: "2.25%",
    right: "88.47%",
    width: "3.95%",
  },
  vectorIcon2: {
    top: "34.5%",
    bottom: "61.05%",
    height: "2.25%",
    right: "88.47%",
    width: "3.95%",
  },
  iconPhoneFill: {
    height: "1.93%",
    width: "3.49%",
    top: "72.0%",
    right: "90.7%",
    bottom: "31.55%",
    left: "8.81%",
    position: "relative",
  },
  iconPlacemarkFill: {
    height: "1.93%",
    width: "3.49%",
    top: "78.0%",
    right: "90.7%",
    bottom: "31.55%",
    left: "8.81%",
    position: "relative",
  },
  homepageInner2: {
    top: 530,
    height: 23,
    width: 22,
    left: 26,
    position: "absolute",
  },
  updateProfileItem: {
    top: 600,
    left: 29,
    height: 23,
    width: 22,
    position: "absolute",
  },
  updateProfileItem1: {
    top: 395,
    left: 29,
    height: 23,
    width: 22,
    position: "absolute",
  },

  pencilEditIcon1: {
    top: 616,
  },
  icon: {
    borderRadius: Border.br_8xs,
      
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
    
  businessManIcon: {
    top: 460,
    left: 32,
    width: 19,
    overflow: "hidden",
  },
  groupChild7: {
    top: 0,
    backgroundColor: Color.colorOrchid_100,
    height: 91,
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconLineHorizontal3: {
    left: "4.65%",
    top: "36.26%",
    right: "85.77%",
    bottom: "40.77%",
    width: "9.58%",
    height: "22.97%",
    position: "absolute",
  },
  updateProfile1: {
    top:23,
    left: 123,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    width: 180,
    height: 36,
  },
  screenshot20240104151531ChrIcon: {
    top: 15,
    left: 348,
    borderRadius: Border.br_10xs,
    width: 58,
    height: 57,
    position: "absolute",
  },
  rectangleGroup: {
    top: 53,
  },
  groupChild8: {
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
    left: 0,
  },
  
  updateProfile: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
  remoteHomeWorkingIcon: {
    top: 813,
    left: 29,
    width: 22,
    overflow: "hidden",
  },
  nameParent:{
    top:290,
  },
  lastNameParent: {
    top: 360,
  },
  fullNameParent: {
    top: 220,
  },
   
  dobParent:{
    top:430,
  },
  ageParent:{
    top:500,
  },
  passportNumberParent:{
    top:640,
  },
  nicParent:{
    top:570,
  },
  mobileNumberParent:{
    top:710,
  },
  addressParent:{
    top:780,
  },

  professionParent:{
    top:850,
  },

  saveFlexBox: {
    letterSpacing: -0.3,
    textAlign: "left",
  },

rectanglePressable: {
    top: 880,
    left: 100,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    width: 200,
    height: 65,
    position: "absolute",
  },

 saveText: {
    top: 899,
    left: 165,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
});



export default UpdateProfile;
