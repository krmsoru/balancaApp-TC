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
    heartRate,
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
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        {connectedDevice ? (
          <>
            {/* <PulseIndicator />
            <Text style={styles.heartRateTitleText}>Your Heart Rate Is:</Text>
            <Text style={styles.heartRateText}>{heartRate} bpm</Text> */}
          </>
        ) : (
          <Text style={styles.titleText}>Conecte-se com a Balança</Text>
        )}
      </View>
      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openDeviceModal}
        style={styles.Button}
      >
        <Text style={styles.ButtonText}>
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
      <View style={styles.card}>
        <TouchableOpacity
          onPress={openFoodModal}
          style={[styles.Button, { backgroundColor: "white" }]}
        >
          <Text style={[styles.ButtonText, { color: "#FF6060" }]}>
            Alimentos
          </Text>
        </TouchableOpacity>
        <View></View>
        <FoodModal closeModal={hideFoodModal} visible={isFoodModalVisible} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  card: {
    flex: 1,
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#FF6060",
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
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Home;
