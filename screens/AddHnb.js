import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable,TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const AddHnb = () => {
  const navigation = useNavigation();
  const [Branch, setBranch] = React.useState("");
  const [Account, setAccount] = React.useState("");

  return (
    <ScrollView contentContainerStyle={[styles.scrollViewContent,styles.updateBankProfile]}>
      <Image
        style={styles.formflexbackground}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
      <View style={styles.updateBankProfileChild} />
      <View style={styles.bankNameParent}>
        <Text style={[styles.bankName, styles.bankLayout]}> Bank Name</Text>
        <Text style={[styles.branchName, styles.bankLayout]}>Branch Name</Text>
        <Text style={[styles.accountNumber, styles.nameTypo]}>
          Account Number
        </Text>
      </View>
      <View style={[styles.hattonNationalBankParent, styles.parentLayout]}>
        <Text style={[styles.hattonNationalBank, styles.text1Clr]}>
          Hatton National Bank
        </Text>
        <View style={[styles.groupChild, styles.hnbBorder]} />
      </View>
      <View style={[styles.colomboParent, styles.parentLayout]}>
      <TextInput
          style={[styles.hattonNationalBranchname, styles.text1Clr]}
          placeholder=" Enter the Branch Name"
          placeholderTextColor={Color.colorBlack}
          value={Branch}
          onChangeText={setBranch}
        />
        <View style={[styles.groupChild, styles.hnbBorder]} />
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <TextInput
          style={[styles.hattonNationalaccount, styles.text1Clr]}
          placeholder="Enter the Account Number"
          placeholderTextColor={Color.colorBlack}
          value={Account}
          onChangeText={setAccount}
        />
        <View style={[styles.groupChild, styles.hnbBorder]} />
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.updateBankProfileItem}
        contentFit="cover"
        source={require("../assets/group-311.png")}
      />
      <View style={[styles.hnb, styles.hnbBorder]} />
      <Image
        style={styles.hattonNationalBankNewLogoIcon}
        contentFit="cover"
        source={require("../assets/hatton-national-bank-new-logo-2.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("SubscribedBanksList")}
      >
        
        
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.save, styles.saveTypo]}>{`Save `}</Text>

        <View style={[styles.rectangleView1, styles.rectangleLayout1]} />
        <Text style={[styles.delete, styles.saveTypo1]}>{`Delete `}</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.updateBank, styles.saveTypo]}>Update Bank</Text>
        <Image
          style={styles.screenshot20240104151531ChrIcon}
          contentFit="cover"
          source={require("../assets/screenshot-20240104-151531-chrome-5.png")}
        />
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  bankLayout: {
    width: 217,
    left: 0,
  },
  nameTypo: {
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  parentLayout: {
    width: 500,
    left: 86,
    height: 43,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  hnbBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
 
  rectangleLayout: {
    height: 67,
    width: 200,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 67,
    width: 180,
    position: "absolute",
    left:-190,
  },
  saveTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  }, 
  saveTypo1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 93,
    width: 430,
    left: 0,
    position: "absolute",
  },
  groupChild2Layout: {
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
  formflexbackground: {
    top: 450,
    left: 90,
    width: 401,
    height: 405,
    position: "absolute",
  },
  updateBankProfileChild: {
    top: 872,
    height: 60,
    width: 430,
    backgroundColor: Color.colorOrchid_100,
    left: 0,
    position: "absolute",
  },
  bankName: {
    height: 35,
    textAlign: "left",
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    position: "absolute",
    top: 0,
  },
  branchName: {
    top: 69,
    height: 36,
    textAlign: "left",
    color: Color.colorPurple_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  accountNumber: {
    top: 136,
    height: 31,
    textAlign: "left",
    width: 303,
    left: 0,
  },
  bankNameParent: {
    top: 393,
    left: 57,
    height: 167,
    width: 303,
    position: "absolute",
  },
  hattonNationalBank: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    height: 43,
    width: 217,
    left: 0,
    top: 0,
  },
  hattonNationalBranchname: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    height: 28,
    width: "100%", // Relative width
    marginTop: 0, // Adjust as needed
    paddingHorizontal: 0, // Adjust as needed
    borderColor: Color.borderGrey,
    borderWidth: Border.width_1,
    borderRadius: Border.radius_5,
  },
  hattonNationalaccount: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
    height: 28,
    width: "100%", // Relative width
    marginTop: 0, // Adjust as needed
    paddingHorizontal: 0, // Adjust as needed
    borderColor: Color.borderGrey,
    borderWidth: Border.width_1,
    borderRadius: Border.radius_5,
  },
  groupChild: {
    top: 28,
    left: -1,
    borderColor: Color.colorPurple_200,
    borderTopWidth: 2,
    width: 310,
    height: 2,
  },
  hattonNationalBankParent: {
    top: 423,
    height: 43,
  },
  colomboParent: {
    top: 494,
    height: 43,
  },
  parent: {
    top: 558,
    height: 43,
  },
  vectorIcon: {
    top: "44.00%",
    bottom: "55.26%",
    left: "9.3%",
    right: "86.74%",
    width: "3.95%",
    height: "2.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    top: "52%",
    bottom: "47.75%",
    left: "9.3%",
    right: "86.74%",
    width: "3.95%",
    height: "2.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  updateBankProfileItem: {
    top: 533,
    left: 36,
    width: 22,
    height: 23,
    position: "absolute",
  },
  hnb: {
    top: 166,
    left: 22,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.colorOrchid_100,
    borderWidth: 3,
    width: 185,
    height: 195,
  },
  hattonNationalBankNewLogoIcon: {
    top: 200,
    left: 39,
    borderRadius: Border.br_3xl,
    width: 158,
    height: 113,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    top: 0,
    left: 0,
  },

  rectangleView1: {
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorPurple_400,
    top: 0,
    left: 0,
  },
  save: {
    top: 18,
    left: 75,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  delete: {
    top: 18,
    left: -128,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  rectangleParent: {
    top: 657,
    left: 194,
  },
  groupChild1: {
    top: 0,
    backgroundColor: Color.colorOrchid_100,
    height: 93,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "5.12%",
    top: "41.08%",
    right: "85.3%",
    bottom: "40.32%",
    width: "9.58%",
    height: "18.6%",
    position: "absolute",
  },
  updateBank: {
    top: 30,
    left: 120,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    width: 170,
    height: 30,
  },
  screenshot20240104151531ChrIcon: {
    top: 23,
    left: 348,
    borderRadius: Border.br_10xs,
    width: 58,
    height: 47,
    position: "absolute",
  },
  rectangleGroup: {
    top: 51,
  },
  groupChild2: {
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
    left: 0,
  },
  text1: {
    top: 2,
    left: 6,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 141,
    height: 21,
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
  },
  rectangleContainer: {
    top: 14,
    left: 52,
  },
  updateBankProfile: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddHnb;
