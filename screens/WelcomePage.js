import * as React from "react";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.container}
      locations={[0.11, 0.5, 0.9]}
      colors={[
        "rgba(243, 170, 236, 0.7)",
        "#c24bb6",
        "rgba(111, 12, 101, 0.95)",
      ]}
    >
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SelectLanguage")}
      >
        <Image
          style={styles.image}
          contentFit="cover"
          source={require("../assets/screenshot-20240104-151531-chrome-1.png")}
        />
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.formflexaText}>FormFlexa !!</Text>
        <Text style={styles.infoText}>{"Store your personal information \nto fill out forms automatically\n\n Click on the LOGO to move forward"}.</Text>
      </View>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginTop: "10%",
    marginBottom: "10%",
  },
  welcomeText: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
  },
  formflexaText: {
    fontFamily: FontFamily.poppinsExtraBoldItalic,
    fontSize: FontSize.size_xl,
    fontStyle: "italic",
    color: Color.colorWhite,
  },
  infoText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    marginTop: "10%",
  },
  image: {
    width: "60%",
    aspectRatio: 1, // Maintain aspect ratio
  },
});

export default WelcomePage;
