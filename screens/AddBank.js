//import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import React, { useEffect, useState } from 'react';
import {useRoute} from '@react-navigation/native';

const AddBank = () => {
  const navigation = useNavigation();
  const router = useRoute(); 
  const userEmail = router.params?.userId || 'No email provided';
  const [userEmailIdNew, setUserEmailIdNew] = useState(userEmail);



 // const passingUserId = {email : userId};
 
  return (
    <View style={styles.addBank}>
      <Image
        style={styles.formflexbackground}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
       <View style={[styles.hnbParent]}>
        <View style={[styles.hnb, styles.hnbLayout]} />
        <Image
          style={styles.hattonNationalBankNewLogoIcon}
          contentFit="cover"
          source={require("../assets/hatton-national-bank-new-logo-11.png")}
        />
        <Text style={[styles.hattonNationalBank, styles.bankTypo]}>
          Hatton National Bank
        </Text>
        <Pressable
          style={[styles.ellipseHnb]}
          onPress={() => navigation.navigate("AddHnb",{userEmail: userEmailIdNew })}
        >
          <Image
            style={[styles.eclipseLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.textFlexBox]}>+</Text>
        </Pressable>

      </View>
     
  <View style={[styles.sampathParent]}>
  <View style={styles.sampathBankLayout} />
  <Image
    style={styles.sampathBankLogo660b6e8bc9SIcon}
    contentFit="cover"
    source={require("../assets/sampathbanklogo660b6e8bc9seeklogo-1.png")}
  />
  <Text style={[styles.sampathBank, styles.bankTypo1]}>Sampath Bank</Text>
  <Pressable
    style={[styles.ellipseSampath]}
    onPress={() => navigation.navigate("AddSampath", {userEmail: userEmailIdNew })}
  >
    <Image
      style={[styles.eclipseLayout]}
      contentFit="cover"
      source={require("../assets/ellipse-2.png")}
    />
    <Text style={[styles.textFlexBox]}>+</Text>
  </Pressable>
</View>

<View style={[styles.commercialBankParent]}>
  <View style={styles.commercialBankLayout} />
      <Image
        style={styles.commercialBankInChankanai1Icon}
        contentFit="cover"
        source={require("../assets/commercialbankinchankanai1508169553-1.png")}        />
        <Text style={[styles.commercialBank1, styles.commercialTypo]}>
          Commercial Bank
        </Text>
        <Pressable
          style={[styles.ellipseCommercial]}
          onPress={() => navigation.navigate("AddCommerical", {userEmail: userEmailIdNew })}
        >
          <Image
            style={[styles.eclipseLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.textFlexBox]}>+</Text>
        </Pressable>
      </View>

      <View style={styles.addBankChild} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Pressable
          style={styles.iconLineHorizontal3}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-line-horizontal-3.png")}
          />
        </Pressable>
        
        <Text style={styles.banks}>Banks</Text>
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  
  bankTypo1: {
    top: 140,
    width: 144,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  bankTypo: {
    top: 130,
    width: 144,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  commercialTypo: {
    top: 136,
    width: 144,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },

  

  hnbLayout: {
    borderWidth: 3,
    borderColor: Color.colorOrchid_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    left: 20,
    top: 0,
    height: 195,
    width: 185,
    position: "absolute",
  },
  sampathBankLayout:{
    borderWidth: 3,
    borderColor: Color.colorOrchid_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    left: 220,
    height: 195,
    width: 185,
    position: "absolute",

  },
  
  commercialBankLayout:{
  borderWidth: 3,
    borderColor: Color.colorOrchid_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    left: 20,
    height: 195,
    width: 185,
    position: "absolute",
  },
  
  ellipseHnb: {
    height: 90,
    width: 60,
    left: 80,
    top: 175,
    position: "absolute",
  },

  ellipseCommercial: {
    height: 90,
    width: 60,
    left: 80,
    top: 170,
    position: "absolute",
  },

  ellipseSampath: {
    height: 90,
    width: 60,
    left: 280,
    top: 175,
    position: "absolute",
  },
  
  eclipseLayout: {
    height: 55,
    width: 63,
    position: "absolute",
  },

  textFlexBox: {
    fontSize: FontSize.size_31xl,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorOrchid_100,
    fontFamily: FontFamily.poppinsRegular,
    height: 60,
    textAlign: "center",
    position: "absolute",
    top: -10,
    left: 3,
  },
 
  rectangleLayout: {
    height: 74,
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },

  iconPosition: {
    bottom: "25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formflexbackground: {
    top: 509,
    left: 127,
    width: 401,
    height: 405,
    position: "absolute",
  },
  sampathBankLogo660b6e8bc9SIcon: {
    borderRadius: Border.br_3xl,
    width: 120,
    height: 120,
    top:15,
    left: 260,
    position: "absolute",
  },
  sampathBank: {
    height: 52,
    left: 240,
  },

  hnbParent: {
    width: 320,
    height: 72,
    top: 180,
  },
  
  commercialBankParent: {
    top: 280,
    width: 320,
    height: 72,
  },

  sampathParent: {
    width: 320,
    height: 72,
    top:110,
  },
  commercialBankInChankanai1Icon: {
    height: 73,
    top: 45,
    width: 140,
    left: 40,
    position: "absolute",
  },
  commercialBank1: {
    left: 40,
    height: 52,
  },
  

  hattonNationalBankNewLogoIcon: {
    top: 15,
    borderRadius: Border.br_3xl,
    width: 150,
    height: 101,
    left: 40,
    position: "absolute",
  },
  hattonNationalBank: {
    height: 52,
    left: 40,
  },
  
  
  text5: {
    fontSize: 47,
    top: 1,
  },
  
  addBankChild: {
    top: 872,
    height: 60,
    width: 430,
    backgroundColor: Color.colorOrchid_100,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorOrchid_100,
    height: 74,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconLineHorizontal3: {
    left: "3.49%",
    top: "37.84%",
    right: "86.93%",
    bottom: "33.92%",
    width: "9.58%",
    height: "28.24%",
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_237xl,
  },
  b793c7Dd5d43eaA08c08153e4d: {
    left: 361,
    top: 10,
    height: 59,
  },
  banks: {
    top: 19,
    left: 136,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    width: 145,
    height: 36,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 60,
  },
  
  iconWifi: {
    height: "56.25%",
    width: "5.48%",
    right: "12.51%",
    left: "82%",
    top: "18.75%",
  },
  iconBattery100: {
    height: "64.38%",
    width: "9.42%",
    right: "1.69%",
    bottom: "16.87%",
    left: "88.89%",
    top: "18.75%",
    position: "absolute",
  },
  iconChartBarFill: {
    height: "59.38%",
    width: "5.72%",
    top: "15.63%",
    right: "19.37%",
    left: "74.91%",
  },
  text6: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    width: 141,
    height: 21,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleGroup: {
    top: 14,
    left: 52,
  },
  addBank: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddBank;