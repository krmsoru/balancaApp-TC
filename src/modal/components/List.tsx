import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

interface FoodItem {
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

interface FoodListProps {
  data: FoodItem[];
}

const FoodList: React.FC<FoodListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: FoodItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.subtitle}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
});

export default FoodList;
