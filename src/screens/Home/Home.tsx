import React, { useState } from "react";
import { Text, View } from "react-native";
import DeviceModal from "../../modal/DeviceModal/DeviceConnectionModal";
import FoodModal from "../../modal/SearchModal/searchModal";
import useBLE from "../../hooks/useBle";
import TagList from "../../components/TagList/taglist";
import Button from "../../components/Button";
import style from "./styles";
import { Feather } from "@expo/vector-icons";
import { itemData } from "../../types";
import { nutrientsMath } from "../../modules";



const Home = () => {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    weightValue,
    disconnectFromDevice,
    postRequest,
  } = useBLE();

  const [isDeviceModalVisible, setIsDeviceModalVisible] =
    useState<boolean>(false);
  const [isFoodModalVisible, setIsFoodModalVisible] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  // const weightValue = 234;

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
  const handleItem = (obj: itemData) => {
    if (obj.id != undefined) {
      const data = selectedItems.filter((item) => item.id !== obj.id);
      const Item = nutrientsMath(obj, weightValue);
      const newData = [...data, Item];
      setSelectedItems(newData);
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
                <Text style={style.titleText}>VALOR RECEBIDO</Text>
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
          <View style={connectedDevice ? { flexDirection: "row" } : {}}>
            <View style={connectedDevice ? { width: "50%" } : {}}>
              <Button
                title={connectedDevice ? "Desconectar" : "Conectar"}
                onPress={
                  connectedDevice ? disconnectFromDevice : openDeviceModal
                }
                btnclass={connectedDevice ? 2 : 1}
              />
            </View>
            <View style={connectedDevice ? { width: "50%" } : {}}>
              {connectedDevice && (
                <Button
                  btnclass={1}
                  onPress={() => postRequest(connectedDevice)}
                  title="Calibrar"
                />
              )}
            </View>
          </View>
          <DeviceModal
            closeModal={hideDeviceModal}
            visible={isDeviceModalVisible}
            connectToPeripheral={connectToDevice}
            devices={allDevices}
          />
        </View>
      </View>
      {/* ----------------- ALIMENTOS--------------------- */}

      <View style={[style.card, { opacity: connectedDevice ? 1 : 0.7 }]}>
        <Button
          title="Buscar Alimentos"
          onPress={openFoodModal}
          btnclass={1}
          disabled={connectedDevice ? false : true}
        ></Button>

        <TagList
          data={selectedItems}
          onLongPress={(item) => {
            const newData = selectedItems.filter((obj) => obj.id !== item.id);
            setSelectedItems(newData);
          }}
        />

        <FoodModal
          closeModal={hideFoodModal}
          visible={isFoodModalVisible}
          handleItem={(prevData) => {
            if (prevData !== undefined) {
              handleItem(prevData);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Home;
