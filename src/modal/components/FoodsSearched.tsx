import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Data from "../../data/Data.json";

interface Food {
  id: string;
  nome: string | null;
  umidade: string | null;
  energia_kcal: string | null;
  proteína_g: string | null;
  colesterol_mg: string | null;
  carboidrato_g: string | null;
  fibra_alimentar_g: string | null;
  calcio_mg: string | null;
  ferro_mg: string | null;
  sodio_mg: string | null;
  potassio_mg: string | null;
  vitaminac_mg: string | null;
  saturados_g: string | null;
  monoinsaturados_g: string | null;
  poliinsaturados_g: string | null;
}

const FoodsSearched = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Food | Object>({});
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const search = () => {
    if (searchText.length >= 3) {
      filterData(searchText);
      setSelectedItem({});
    }
  };

  const filterData = (text: string) => {
    try {
      const filter = text.toLowerCase();
      const filteredData = Data.filter((item) =>
        item.nome?.toLowerCase().includes(filter)
      );
      setFilteredFoods(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const selectFood = (item: Food) => {
    if (item) setSelectedItem(item);
  };

  const RenderList = () => {
    try {
      return (
        <View style={foodsStyle.container}>
          <FlatList
            data={filteredFoods}
            keyExtractor={(item, index) =>
              item.id?.toString() || index.toString()
            }
            renderItem={({ item }) => (
              <View style={foodsStyle.foodsCard}>
                <View style={foodsStyle.foodTitle}>
                  <Text style={{}}>{item.nome}</Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
          />
        </View>
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return {
    handleSearch,
    search,
    filterData,
    selectFood,
    RenderList,
    filteredFoods,
  };
};

export default FoodsSearched;

const foodsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:"100%"
  },

  foodsCard: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 4,
    marginHorizontal: "auto",
    
  },
  foodTitle: {
    flex: 1,
  },
  foodTitleText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  foodName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  paginationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  paginationButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  Button: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
