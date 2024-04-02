import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { Alert } from "react-native";

const SelectLanguage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectLanguage}>
      <Image
        style={styles.formComputerIconsClipArtF}
        contentFit="cover"
        source={require("../assets/formflexbackground.png")}
      />
      <View style={styles.selectLanguageChild} />
      <Text style={styles.selectLanguageTo}>{`Select Language 
to Continue`}</Text>

      <View style={styles.button3Parent}>
        <Pressable
          style={styles.buttonFlexBox}
          onPress={() => navigation.navigate("SignUpOrLogIn")}
        >
          <Text style={styles.english}>English</Text>
        </Pressable>


        <Pressable
        style={[styles.button2, styles.buttonFlexBox]}
        onPress={() => Alert.alert("Under Process","This Language will be available soon")}
        >
          <Text style={[styles.text, styles.textTypo]}>தமிழ்</Text>
        </Pressable>         

          <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => Alert.alert("Under Process","This Language will be available soon")}
          >
          <Text style={[styles.text1, styles.textTypo]}>සිංහල</Text>
          </Pressable>
      
      </View>


      <View style={styles.selectLanguageItem} />
      <Image
        style={styles.screenshot20240104151531ChrIcon}
        contentFit="cover"
        source={require("../assets/screenshot-20240104-151531-chrome-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
    
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Text style={styles.text3}>{'<'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_76xl,
    justifyContent: "center",
    flexDirection: "row",
    height: 35,
    width: 222,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_lg,
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.abhayaLibreRegular,
    color: Color.colorPurple_300,
    textAlign: "center",
  },
  groupChildLayout: {
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
  formComputerIconsClipArtF: {
    top: 450,
    left: 90,
    width: 401,
    height: 405,
    position: "absolute",
  },
  selectLanguageChild: {
    top: 251,
    left: 42,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorOrchid_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 340,
    height: 484,
    position: "absolute",
  },
  selectLanguageTo: {
    marginLeft: -76,
    top: 376,
    fontSize: 19,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhitesmoke,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  english: {
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    color: Color.colorPurple_300,
    fontSize: FontSize.size_xl,
    width:88,
    height:25,
    left:14,
    
  },
  text: {
    width: 88,
    height: 25,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  button2: {
    marginTop: 26,
  },
  text1: {
    fontSize: 29,
    width: 122,
    height: 29,
  },
  button3Parent: {
    marginLeft: -103,
    top: 458,
    left: "50%",
    position: "absolute",
  },
  selectLanguageItem: {
    top: 872,
    backgroundColor: Color.colorOrchid_100,
    width: 430,
    height: 60,
    left: 0,
    position: "absolute",
  },
  screenshot20240104151531ChrIcon: {
    top: 177,
    left: 139,
    borderRadius: Border.br_4xs,
    width: 151,
    height: 159,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
  },
  
  text2: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    width: 141,
    height: 21,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 14,
    left: 52,
  },
  text3: {
    fontSize: FontSize.size_36xl,
    letterSpacing: 17.6,
    fontFamily: FontFamily.tomorrowRegular,
    color: Color.colorOrchid_100,
    display: "flex",
    width: 26,
    height: 68,
    textAlign: "left",
    alignItems: "center",
  },
  pressable: {
    left: 30,
    top:65,
    position: "absolute",
  },
  selectLanguage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SelectLanguage;
