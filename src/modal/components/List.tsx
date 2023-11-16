import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface foodData {
  id: string;
  nome: string;
  descricao: string;
  umidade: string;
  energia_kcal: string;
  proteina_g: string;
  colesterol_mg: string;
  carboidrato_g: string;
  fibra_g: string;
  calcio_mg: string;
  ferro_mg: string;
  sodio_mg: string;
  potassio_mg: string;
  vitaminaC_mg: string;
  saturados_g: string;
  monoinsaturados_g: string;
  poliinsaturados_g: string;
}

type ItemProps = {
  item: foodData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.nome}</Text>
  </TouchableOpacity>
);

const FoodDataList = ({ data = [] }) => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: foodData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FoodDataList;
