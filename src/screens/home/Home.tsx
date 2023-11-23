import React, { useState, useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import DeviceModal from "../../modal/DeviceModal/DeviceConnectionModal";
import FoodModal from "../../modal/SearchModal";
import useBLE from "../../hooks/useBle";
import TagList from "../../components/TagList";
import Button from "../../components/Button";
import style from "./styles";
import { Feather } from "@expo/vector-icons";
import { itemData, foodData } from "../../types";

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
  const [Data, setData] = useState<any[]>([]);
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
      const data = Data.filter((item) => item.id !== obj.id);
      const Item = nutrientsMath(obj, weightValue);
      const newData = [...data, Item];
      setData(newData);
      hideFoodModal();
    }
  };
  const nutrientsMath = (item: itemData, peso: number) => {
    const nutrients = (itemProperty: string) => {
      if (!Number.isNaN(Number(itemProperty))) {
        return ((Number(itemProperty) * peso) / 100).toFixed(1);
      } else {
        return itemProperty;
      }
    };

    const res = {
      id: item?.id,
      peso: peso,
      nome: item?.nome,
      descricao: item?.descricao,
      umidade: nutrients(item?.umidade),
      energia_kcal: nutrients(item?.energia_kcal),
      proteina_g: nutrients(item?.proteina_g),
      colesterol_mg: nutrients(item?.colesterol_mg),
      carboidrato_g: nutrients(item?.carboidrato_g),
      fibra_g: nutrients(item?.fibra_g),
      calcio_mg: nutrients(item?.calcio_mg),
      ferro_mg: nutrients(item?.ferro_mg),
      sodio_mg: nutrients(item?.sodio_mg),
      potassio_mg: nutrients(item?.potassio_mg),
      vitaminaC_mg: nutrients(item?.vitaminaC_mg),
      saturados_g: nutrients(item?.saturados_g),
      monoinsaturados_g: nutrients(item?.monoinsaturados_g),
      poliinsaturados_g: nutrients(item?.poliinsaturados_g),
    };
    return res;
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

      <View style={style.card}>
        <Button title="Buscar Alimentos" onPress={openFoodModal} btnclass={1}></Button>
        {Data.length > 0 && (
          <TagList
            data={Data}
            onLongPress={(item) => {
              const newData = Data.filter((obj) => obj.id !== item.id);
              setData(newData);
            }}
          />
        )}
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
