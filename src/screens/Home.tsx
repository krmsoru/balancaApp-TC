import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeviceModal from "../modal/DeviceConnectionModal";
import FoodModal from "../modal/FoodSelectModal";
import useBLE from "../hooks/useBle";

const Home = () => {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    weightValue,
    disconnectFromDevice,
  } = useBLE();
  const [isDeviceModalVisible, setIsDeviceModalVisible] =
    useState<boolean>(false);
  const [isFoodModalVisible, setIsFoodModalVisible] = useState<boolean>(false);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideDeviceModal = () => {
    setIsDeviceModalVisible(false);
  };

  const openDeviceModal = async () => {
    scanForDevices();
    setIsDeviceModalVisible(true);
  };

  const hideFoodModal = () => {
    setIsFoodModalVisible(false);
  };
  const openFoodModal = () => {
    setIsFoodModalVisible(true);
  };

  return (
    <SafeAreaView style={styles().container}>
      <View style={styles().titleWrapper}>
        {connectedDevice ? (
          <>
            {/* <PulseIndicator /> */}
            <Text style={styles().titleText}>Peso:</Text>
            <Text style={styles().Text}>{weightValue} kg</Text>
          </>
        ) : (
          <Text style={styles().titleText}>Conecte-se com a Balança</Text>
        )}
      </View>
      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openDeviceModal}
        style={styles().Button}
      >
        <Text style={styles().ButtonText}>
          {connectedDevice ? "Disconnect" : "Connect"}
        </Text>
      </TouchableOpacity>
      {/*  Modal Conectar Dispositivos */}
      <DeviceModal
        closeModal={hideDeviceModal}
        visible={isDeviceModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
      <View style={styles().card}>
        <TouchableOpacity
          onPress={openFoodModal}
          style={[
            styles().Button,
            {
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 2,
            },
          ]}
        >
          <Text style={[styles().ButtonText, styles().ButtonN]}>Alimentos</Text>
        </TouchableOpacity>
        <View></View>
        <FoodModal closeModal={hideFoodModal} visible={isFoodModalVisible} />
      </View>
    </SafeAreaView>
  );
};

const styles = (pColor: string = "#FF6060", sColor: string = "#f2f2f2") => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: sColor,
    },
    card: {
      flex: 1,
      borderRadius: 12,
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: pColor,
      paddingVertical: 10,
    },
    titleWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginHorizontal: 20,
      color: "black",
    },
    Text: {
      fontSize: 25,
      marginTop: 15,
    },
    Button: {
      backgroundColor: pColor,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginHorizontal: 20,
      marginBottom: 5,
      borderRadius: 8,
    },
    ButtonN: { color: pColor },
    ButtonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: sColor,
    },
  });
};

export default Home;
