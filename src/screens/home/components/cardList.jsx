import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import ModalFoods from "../../../components/modal/modalList";
import Storage from "../../../hooks/storageFood";
import { useEffect } from "react";

export default function CardList({ weightValue }) {
  useEffect(() => {
    console.log("[",new Date(),"] CardList =>","weightValue =>", weightValue, "Typeof =>", typeof weightValue);
    setWeightValue(weightValue);
    calculateNutrients(weight);
  }, [selectedFoods, weightValue]);

  const { storeData } = Storage("@foods");
  const [modalsVisible, setModalVisible] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [nutrients, setNutrients] = useState({});
  const [weight, setWeightValue] = useState(weightValue);

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

  function calculateNutrients() {
    if (selectedFoods.length === 0) {
      setNutrients({
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
      });
      return;
    }
    const data = selectedFoods.reduce(
      (accumulator, item) => {
        const factor = weightValue / item.tamanho_procao_g;
        const {
          calorias,
          gordura_total_g,
          gordura_saturada_g,
          proteina_g,
          sodio_mg,
          potassio_mg,
          colesterol_mg,
          carboidratos_total_g,
          fibra_g,
          acucar_g,
        } = item;

        accumulator.calorias += calorias * factor;
        accumulator.gordura_total_g += gordura_total_g * factor;
        accumulator.gordura_saturada_g += gordura_saturada_g * factor;
        accumulator.proteina_g += proteina_g * factor;
        accumulator.sodio_mg += sodio_mg * factor;
        accumulator.potassio_mg += potassio_mg * factor;
        accumulator.colesterol_mg += colesterol_mg * factor;
        accumulator.carboidratos_total_g += carboidratos_total_g * factor;
        accumulator.fibra_g += fibra_g * factor;
        accumulator.acucar_g += acucar_g * factor;
        return accumulator;
      },
      {
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
      }
    );

    setNutrients(data);
  }

  const storeSelectedFoods = () => {
    try {
      if (selectedFoods.length > 0) {
        // storeData(nutrients);
        // setSelectedFoods([]);
      }
    } catch (error) {
      console.log("Erro =>", error);
    }
  };

  const nutrientsData = [
    { label: "Calorias", key: "calorias", unit: "cal" },
    { label: "Gordura", key: "gordura_total_g", unit: "g" },
    { label: "Gordura Saturada", key: "gordura_saturada_g", unit: "g" },
    { label: "Proteina", key: "proteina_g", unit: "g" },
    { label: "Sódio", key: "sodio_mg", unit: "mg" },
    { label: "Potássio", key: "potassio_mg", unit: "mg" },
    { label: "Colesterol", key: "colesterol_mg", unit: "mg" },
    { label: "Carboidratos", key: "carboidratos_total_g", unit: "g" },
    { label: "Fibra", key: "fibra_g", unit: "g" },
    { label: "Açucar", key: "acucar_g", unit: "g" },
  ];

  return (
    <View className="bg-white mx-4 my-1 rounded-lg shadow-lg shadow-blue-600 flex-grow">
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

        <View className="p-4 mx-4 my-auto flex-shrink">
          <View>
            {nutrientsData.map((item) => (
              <View key={item.label} className="flex-row justify-between">
                <Text className="font-medium text-base">{item.label}:</Text>
                <Text className="font-medium text-base">
                  {nutrients[item.key].toFixed(2)} {item.unit}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          className={`border ${
            selectedFoods.length > 0 ? "border-blue-500" : "border-blue-100"
          } mx-8 my-3 py-4 px-6 rounded-lg items-center`}
          onPress={selectedFoods.length > 0 ? () => storeSelectedFoods() : null}
        >
          <Text
            className={`${
              selectedFoods.length > 0 ? "text-blue-500" : "text-blue-100"
            } font-bold text-base`}
          >
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
