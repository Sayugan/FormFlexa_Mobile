import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, Pressable} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ScanQR = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [updatingData, setUpdatingData] = useState(null);
  const router = useRoute();
  const userId = router.params?.userId || 'No email provided';
  const [userEmailIdNew, setUserEmailIdNew] = useState(userId);
  const passingEmail = { email: userEmailIdNew };
  const [sessionDetails, setSessionDetails] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  
  useEffect(() => {

    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBar = ({ type, data }) => {
    if (isProcessing) return;
    setIsProcessing(true);
    if (!data.includes("formId") && !data.includes("sessionId")) {
      setScanned(false);
      alert("QR code has Error!");
      console.log(data, type);
    } else {
      Alert.alert("QR code has been scanned successfully!")
      setScanned(true);
      console.log(data);

      const qrData = JSON.parse(data);
     
      const formId = qrData.formId;
      const sessionId = qrData.sessionId;
      const sessionDetails = {
        formId : formId,
        sessionId : sessionId,
        userEmailIdNew : userEmailIdNew,
      };
      console.log("Form ID:", formId); // Output: Form ID: 12345
      console.log("Session ID:", sessionId); // Output: Session ID: 79553
      navigation.navigate("ScanMessage", { form: sessionDetails});
    }
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBar} 
        style={styles.camera}
/>

      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  const handleMenuPress = () => {
    navigation.navigate("Menu");
  };

  return (
    <View style={styles.scanQr}>
      <View style={[styles.scanQrChild, styles.childPosition]} />
      <View style={[styles.rectangleParent, styles.childPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Pressable
          style={styles.iconLineHorizontal3}
          onPress={handleMenuPress}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-line-horizontal-3.png")}
          />
        </Pressable>
        <Text style={[styles.scanQr1, styles.scanTypo]}>Scan QR</Text>
      </View>
      {renderCamera()}
      <TouchableOpacity
        style={styles.button}
        onPress={renderCamera}
        disabled={scanned}
      >
        <Text style={styles.buttonText}>SCAN QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  qrBoxPosition: {
    left: 0,
    top: 0,
  },
  
  // Add your existing styles here

  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  camera: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 35,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
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
  scanTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
  },
  textClr: {
    color: Color.colorBlack,
    position: "absolute",
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
    top: 509,
    left: 127,
    width: 401,
    height: 405,
    position: "absolute",
  },
  qrBox: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: Color.colorOrchid_100,
    borderWidth: 3,
    height: 449,
    width: 398,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  qrBoxWrapper: {
    top: 227,
    left: 16,
    shadowRadius: 9,
    elevation: 9,
  },
  scanQrChild: {
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
  scanQr1: {
    top: 19,
    left: 136,
    color: Color.colorWhite,
    width: 145,
    height: 76,
    position: "absolute",
  },
  rectangleParent: {
    top: 54,
    height: 95,
  },
  scanQrItem: {
    top: 280,
    left: 42,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    borderWidth: 20,
    width: 345,
    height: 359,
    backgroundColor: "transparent",
    position: "absolute",
  },
  scanQrCode: {
    top: 405,
    left: 89,
    width: 252,
    height: 103,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
  },
  groupItem: {
    backgroundColor: Color.colorGainsboro_300,
    left: 0,
    top: 0,
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
  text: {
    top: 2,
    left: 6,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    width: 141,
    height: 21,
  },
  rectangleGroup: {
    top: 14,
    left: 52,
  },
  scanQr: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default ScanQR;
