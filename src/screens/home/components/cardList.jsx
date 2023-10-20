import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import ModalFoods from "../../../components/modal/modalList";
import Storage from "../../../hooks/storageFood";
import { useEffect } from "react";

export default function CardList(homeWeight) {
  const { storeData } = Storage("@foods");
  const [modalsVisible, setModalVisible] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [nutrients, setNutrients] = useState({});
  const weight = 20.0;

  const handleModalOpenClose = () => {
    setModalVisible(!modalsVisible);
  };

  function handleSelectedFood(food) {
    if (food) {
      let AllReadyIn = false;
      selectedFoods.forEach((obj) => {
        if (obj === food) AllReadyIn = true;
      });
      if (!AllReadyIn) {
        setSelectedFoods([...selectedFoods, food]);
        handleModalOpenClose();
      }
    }
  }

  const removeItem = (food) => {
    const newList = selectedFoods.filter((value) => value !== food);
    setSelectedFoods(newList);
  };

  const calculateNutrients = () => {
    let data = {
      calorias: 0,
      gordura_total_g: 0,
      gordura_saturada_g: 0,
      proteina_g: 0,
      sodio_mg: 0,
      potassio_mg: 0,
      colesterol_mg: 0,
      carboidratos_total_g: 0,
      fibra_g: 0,
      acucar_g: 0,
    };

    if (selectedFoods.length > 0) {
      selectedFoods.forEach((item) => {
        data.calorias += (item.calorias * weight) / item.tamanho_procao_g;
        data.gordura_total_g +=
          (item.gordura_total_g * weight) / item.tamanho_procao_g;
        data.gordura_saturada_g +=
          (item.gordura_saturada_g * weight) / item.tamanho_procao_g;
        data.proteina_g += (item.proteina_g * weight) / item.tamanho_procao_g;
        data.sodio_mg += (item.sodio_mg * weight) / item.tamanho_procao_g;
        data.potassio_mg += (item.potassio_mg * weight) / item.tamanho_procao_g;
        data.colesterol_mg +=
          (item.colesterol_mg * weight) / item.tamanho_procao_g;
        data.carboidratos_total_g +=
          (item.carboidratos_total_g * weight) / item.tamanho_procao_g;
        data.fibra_g += (item.fibra_g * weight) / item.tamanho_procao_g;
        data.acucar_g += (item.acucar_g * weight) / item.tamanho_procao_g;
      });
    }
    setNutrients(data);
  };

  const storeSelectedFoods = () => {
    try {
      if (selectedFoods.length > 0) {
        storeData(nutrients);
        setSelectedFoods([]);
      }
    } catch (error) {
      console.log("Erro =>", error);
    }
  };

  useEffect(() => {
    calculateNutrients(weight);
  }, [selectedFoods]);

  return (
    <View className="bg-white m-4 rounded-lg shadow-lg shadow-blue-600 flex-grow">
      <Modal visible={modalsVisible} transparent={true}>
        <ModalFoods
          handClose={handleModalOpenClose}
          handleSelectedFood={handleSelectedFood}
        />
      </Modal>

      <View>
        <View>
          {selectedFoods.length > 0 ? (
            <View className="flex-row justify-between flex my-2 mx-8">
              <TouchableOpacity
                className="bg-transparent border border-red-600  items-center m-3 py-4 px-6 rounded-lg"
                onPress={() => setSelectedFoods([])}
              >
                <Text className="text-red-600 font-bold text-">Limpar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-blue-500 m-3 py-4 px-6 rounded-lg flex-grow items-center"
                onPress={handleModalOpenClose}
              >
                <Text className="text-white font-bold text-">Adicionar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="mx-8">
              <TouchableOpacity
                className="bg-blue-500 m-3 py-4 px-6 rounded-lg items-center"
                onPress={handleModalOpenClose}
              >
                <Text className="text-white font-bold text-base">
                  Adicionar
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View className="m-auto flex-shrink">
            <FlatList
              className=" fle"
              numColumns={5}
              automaticallyAdjustsScrollIndicatorInsets={true}
              data={selectedFoods}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="flex-shrink border border-blue-500  w-auto px-3 py-2 m-0.5 rounded-2xl items-center animate-bounce"
                  onLongPress={() => removeItem(item)}
                >
                  <Text className="text-blue-500 font-bold text-base flex-shrink">
                    {item.nome}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View className=" p-4 mx-4 my-auto">
          <View className="">
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Calorias:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0 ? nutrients.calorias.toFixed(2) : 0}{" "}
                cal
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Gordura:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0
                  ? nutrients.gordura_total_g.toFixed(2)
                  : 0}{" "}
                g
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Gordura Saturada:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0
                  ? nutrients.gordura_saturada_g.toFixed(2)
                  : 0}{" "}
                g
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Proteina:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0 ? nutrients.proteina_g.toFixed(2) : 0}{" "}
                g
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Sódio</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0 ? nutrients.sodio_mg.toFixed(2) : 0}{" "}
                mg
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Potássio:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0
                  ? nutrients.potassio_mg.toFixed(2)
                  : 0}{" "}
                mg
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Colesterol:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0
                  ? nutrients.colesterol_mg.toFixed(2)
                  : 0}{" "}
                mg
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Carboidratos:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0
                  ? nutrients.carboidratos_total_g.toFixed(2)
                  : 0}{" "}
                g
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Fibra:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0 ? nutrients.fibra_g.toFixed(2) : 0} g
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-medium text-base">Açucar:</Text>
              <Text className="font-medium text-base">
                {selectedFoods.length > 0 ? nutrients.acucar_g.toFixed(2) : 0} g
              </Text>
            </View>
          </View>
        </View>
        {selectedFoods.length > 0 ? (
          <TouchableOpacity
            className="border border-blue-500 mx-8 my-6 py-4 px-6 rounded-lg items-center"
            onPress={() => storeSelectedFoods()}
          >
            <Text className="text-blue-500 font-bold text-base">Salvar</Text>
          </TouchableOpacity>
        ) : (
          <Pressable className=" border border-blue-100 mx-8 my-6 py-4 px-6 rounded-lg items-center">
            <Text className="text-blue-100 font-bold text-base">Salvar</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
