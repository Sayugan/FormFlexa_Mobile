const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomePage from "./screens/WelcomePage";
import Menu from "./screens/Menu";
import LoginScreen from "./screens/LoginScreen";
import Signup from "./screens/Signup";
import SelectLanguage from "./screens/SelectLanguage";
import OTPVerificationEmail from "./screens/OTPVerificationEmail";
import AddBank from "./screens/AddBank";
import SignUpOrLogIn from "./screens/SignUpOrLogIn";
import HomePage from "./screens/HomePage";
import UpdateProfile from "./screens/UpdateProfile";
import AddHnb from "./screens/AddHnb";
import AddSampath from "./screens/AddSampath";
import AddCommerical from "./screens/AddCommerical";
import SubscribedBanksList from "./screens/SubscribedBanksList";
import OTPVerificationMobile from "./screens/OTPVerificationMobile";
import PasswordReset from "./screens/PasswordReset";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPasswordConfirmation from "./screens/ResetPasswordConfirmation";
import ResetPasswordInvalid from "./screens/ResetPasswordInvalid";
import SuccessfulOTPEmailAndMobil from "./screens/SuccessfulOTPEmailAndMobil";
import NotSuccessfulOTPEmailAndMobile from "./screens/NotSuceessfulOTPEmailAndMobile";
import LoginVerification from "./screens/LoginVerification";
import LoginNotVerification from "./screens/LoginNotverification";
import ScanQR from "./screens/ScanQR";
import ScanMessage from "./screens/ScanMessage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Tomorrow-Regular": require("./assets/fonts/Tomorrow-Regular.ttf"),
    "AbhayaLibre-Regular": require("./assets/fonts/AbhayaLibre-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectLanguage"
              component={SelectLanguage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerificationEmail"
              component={OTPVerificationEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddBank"
              component={AddBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpOrLogIn"
              component={SignUpOrLogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdateProfile"
              component={UpdateProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddHnb"
              component={AddHnb}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddSampath"
              component={AddSampath}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="AddCommerical"
              component={AddCommerical}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscribedBanksList"
              component={SubscribedBanksList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerificationMobile"
              component={OTPVerificationMobile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordReset"
              component={PasswordReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordConfirmation"
              component={ResetPasswordConfirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordInvalid"
              component={ResetPasswordInvalid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulOTPEmailAndMobil"
              component={SuccessfulOTPEmailAndMobil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotSuccessfulOTPEmailAndMobile"
              component={NotSuccessfulOTPEmailAndMobile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginVerification"
              component={LoginVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginNotVerification"
              component={LoginNotVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanQR"
              component={ScanQR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanMessage"
              component={ScanMessage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
