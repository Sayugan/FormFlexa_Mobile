import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SubscribedBanksList = () => {
  const navigation = useNavigation();

  const goToUpdateBankProfile = (bankName) => {
    navigation.navigate("UpdateBankProfile", { bankName });
    
  };
  const goToUpdatesampath = (bankName) => {
    navigation.navigate("Updatesampath", { bankName });
    
  };
  const goToUpdateCommerical = (bankName) => {
    navigation.navigate("UpdateCommerical", { bankName });
    
  };
  const addBank = (bank) => {
    setSubscribedBanks([...subscribedBanks, bank]);
  };

  return (
    <View style={styles.subscribedBanksList}>
      <Image
        style={styles.formComputerIconsClipArtF}
        contentFit="cover"
        source={require("../assets/formcomputericonsclipartformremovebgpreview-31.png")}
      />
      
      {/* Hatton National Bank */}
      <Pressable
        style={[styles.hnbParent, styles.hnbShadowBox1]}
        onPress={() => goToUpdateBankProfile("Hatton National Bank")}
      >
        <View style={styles.hnbShadowBox} />
        <Image
          style={styles.hattonNationalBankNewLogoIcon}
          contentFit="cover"
          source={require("../assets/hatton-national-bank-new-logo-1.png")}
        />
      </Pressable>
      <Text style={[styles.hattonNationalBank, styles.bankTypo]}>
        Hatton National Bank
      </Text>
      
      {/* Sampath Bank */}
      <Pressable
        style={[styles.hnbGroup, styles.hnbShadowBox1]}
        onPress={() => goToUpdatesampath("Sampath Bank")}
      >
        <View style={styles.hnbShadowBox} />
        <Image
          style={styles.sampathBankLogo660b6e8bc9SIcon}
          contentFit="cover"
          source={require("../assets/sampathbanklogo660b6e8bc9seeklogo-1.png")}
        />
      </Pressable>
      <Text style={[styles.sampathBank, styles.bankTypo]}>
        Sampath Bank
      </Text>
      
      {/* Commercial Bank */}
      <Pressable
        style={[styles.hnbWrapper, styles.hnbShadowBox1]}
        onPress={() => goToUpdateCommerical("Commercial Bank")}
      >
        <View style={styles.hnbShadowBox} />
        <Image
          style={styles.commercialBankInChankanai1Icon}
          contentFit="cover"
          source={require("../assets/commercialbankinchankanai1508169553-1.png")}
        />
      </Pressable>
      <Text style={[styles.commercialBank, styles.bankTypo]}>
        Commercial Bank
      </Text>
      
      {/* Other elements */}
      <View style={[styles.subscribedBanksListChild, styles.childPosition]} />
      <View style={[styles.rectangleParent, styles.childPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
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
        <Pressable
          style={styles.b793c7Dd5d43eaA08c08153e4d}
          onPress={() => navigation.navigate("UpdateProfile")}
          
        >
          <Pressable
          style={styles.b793c7Dd5d43eaA08c08153e4d}
          onPress={() => navigation.navigate("UpdateBankProfile")}
          
        ></Pressable>
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/72b793c7dd5d43eaa08c08153e4d9c81-1.png")}
          />
        </Pressable>
        <Text style={styles.banksList}>
          {`Banks List `}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  hnbShadowBox1: {
    height: 158,
    width: 400,
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 16,
    position: "absolute",
  },
  bankTypo: {
    height: 52,
    fontSize: FontSize.size_mini,
    left: 215,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  childPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  groupLayout: {
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
  hnbShadowBox: {
    borderWidth: 3,
    borderColor: Color.colorOrchid_100,
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
    height: 158,
    width: 398,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  hattonNationalBankNewLogoIcon: {
    top: 23,
    left: 19,
    borderRadius: Border.br_3xl,
    width: 166,
    height: 113,
    position: "absolute",
  },
  hnbParent: {
    top: 149,
  },
  hattonNationalBank: {
    top: 220,
    width: 184,
  },
  sampathBankLogo660b6e8bc9SIcon: {
    left: 34,
    width: 117,
    height: 149,
    top: 0,
    position: "absolute",
  },
  hnbGroup: {
    top: 329,
  },
  sampathBank: {
    top: 400,
    width: 171,
  },
  hnbWrapper: {
    top: 509,
  },
  commercialBank: {
    top: 580,
    width: 161,
  },
  subscribedBanksListChild: {
    top: 872,
    height: 60,
    backgroundColor: Color.colorOrchid_100,
    width: 430,
  },
  groupChild: {
    height: 74,
    backgroundColor: Color.colorOrchid_100,
    width: 430,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconLineHorizontal3: {
    left: "3.49%",
    top: "29.47%",
    right: "86.93%",
    bottom: "48.53%",
    width: "9.58%",
    height: "22%",
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_237xl,
  },
  b793c7Dd5d43eaA08c08153e4d: {
    left: 361,
    top: 10,
    width: 57,
    height: 59,
    position: "absolute",
  },
  banksList: {
    top: 19,
    left: 136,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    textAlign: "center",
    width: 145,
    height: 76,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 61,
    height: 95,
  },
  commercialBankInChankanai1Icon: {
    top: 30,
    left: 41,
    width: 140,
    height: 80,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
    width: 343,
    top: 0,
  },
  text: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 141,
    height: 21,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleGroup: {
    top: 14,
    left: 52,
  },
  subscribedBanksList: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default SubscribedBanksList;
