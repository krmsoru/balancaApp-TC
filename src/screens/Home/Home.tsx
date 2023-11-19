import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import DeviceModal from "../../modal/DeviceModal/DeviceConnectionModal";
import FoodModal from "../../modal/SearchModal";
import useBLE from "../../hooks/useBle";
import TagList from "../../components/TagList";
import Button from "../../components/Button";
import style from "./styles";
import { Feather } from "@expo/vector-icons";
import { foodData, fooditem } from "../../types";

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

  const [Data, setData] = useState<foodData[]>(fooditem);

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
  const handleItem = (item: foodData) => {
    if (item.id != null) {
      console.log("[  ENTREOU ->  ADDITEM]");
      const newData = [...Data, item];
      setData(newData);
      hideFoodModal();
    }
  };

  return (
    <View style={style.container}>
      {/* ----------------- dISPOSITIVOS--------------------- */}
      <View style={[style.card, { elevation: 0 }]}>
        <View style={style.titleWrapper}>
          <View style={{ alignItems: "center" }}>
            {connectedDevice ? (
              <>
                <Text style={style.titleText}>Peso:</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={style.Text}>{weightValue} </Text>
                  <Text style={style.Text}>
                    {weightValue <= 1000 ? "g" : "kg"}
                  </Text>
                </View>
              </>
            ) : (
              <View
                style={{
                  alignItems: "center",

                  margin: 10,
                }}
              >
                <Text style={style.titleText}>Conecte-se com a Balança</Text>
                <Feather
                  name="bluetooth"
                  size={style.titleText.fontSize * 2}
                  color={style.titleText.color}
                />
              </View>
            )}
          </View>
          <Button
            title={connectedDevice ? "Desconectar" : "Conectar"}
            onPress={connectedDevice ? disconnectFromDevice : openDeviceModal}
            btnclass={1}
          ></Button>
          <DeviceModal
            closeModal={hideDeviceModal}
            visible={isDeviceModalVisible}
            connectToPeripheral={connectToDevice}
            devices={allDevices}
          />
        </View>
      </View>
      {/* ----------------- ALIMENTOS--------------------- */}
      <View style={style.card}>
        <Button title="Alimentos" onPress={openFoodModal} btnclass={2}></Button>

        <TagList
          data={Data}
          onLongPress={(item) => {
            const newData = Data.filter((obj) => obj.id !== item.id);
            setData(newData);
            console.log(Data);
          }}
        />

        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              marginHorizontal: 1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Text>Energia (kcal)</Text>
              <Text>Umidade (%)</Text>
              <Text>Potássio (mg)</Text>
              <Text>Gorduras Saturadas(mg)</Text>
              <Text>Monoinsaturadas (mg)</Text>
              <Text>Ferro (mg)</Text>
            </View>
            <View>
              <Text style={{ color: "green" }}>0.0</Text>
              <Text style={{ color: "green" }}>0.0</Text>
              <Text style={{ color: "green" }}>0.0</Text>
              <Text style={{ color: "green" }}>0.0</Text>
              <Text style={{ color: "green" }}>0.0</Text>
              <Text style={{ color: "green" }}>0.0</Text>
            </View>
            <View>
              <Text style={{ color: "blue" }}>0.0</Text>
              <Text style={{ color: "blue" }}>0.0</Text>
              <Text style={{ color: "blue" }}>0.0</Text>
              <Text style={{ color: "blue" }}>0.0</Text>
              <Text style={{ color: "blue" }}>0.0</Text>
              <Text style={{ color: "blue" }}>0.0</Text>
            </View>
          </View>
        </ScrollView>

        <FoodModal
          closeModal={hideFoodModal}
          visible={isFoodModalVisible}
          handleItem={(prevData) => {
            if (prevData !== undefined) {
              console.log("id", prevData.id);
              prevData.peso = weightValue.toString();
              handleItem(prevData);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Home;
