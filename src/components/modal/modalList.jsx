import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { RadioButton } from "react-native-paper";
import StylesApp from "../../styles";
import foodsData from "../../assets/data/foodsData.json";
import { FontAwesome } from "@expo/vector-icons";

export default function ModalFoods({ handClose, handleSelectedFood }) {
  const [listFoods, setListFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchText, setSearchText] = useState("");
  const focused = useIsFocused();

  useEffect(() => {
    setListFoods(foodsData);
  }, [focused]);

  const handleSearch = (text) => {
    setSearchText(text);
    setSelectedFood(null);
  };

  const selectFood = (item) => {
    if (item) setSelectedFood(item);
  };

  const filteredFoods = listFoods.filter((item) =>
    item.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView
      nameClass=" flex-1"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderColor: "#000",
        padding: 10,
      }}
    >
      <View
        style={[
          {
            width: "100%",
            height: "100%",
            padding: 15,
            backgroundColor: "#fff",
            elevation: 8,
          },
        ]}
      >
        <TextInput
          style={[
            Styles.searchInput,
            {
              fontSize: 20,
              borderWidth: 2,
              borderColor: "#e6e6e6",
              padding: 10,
            },
          ]}
          placeholder="Pesquisar alimentos"
          onChangeText={handleSearch}
          value={searchText}
        />
        <FlatList
          data={filteredFoods}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                Styles.radioButtonContainer,
                {
                  borderColor:
                    selectedFood && selectedFood.id === item.id
                      ? "#007AFF"
                      : "#e6e6e6",
                },
              ]}
              onPress={() => selectFood(item)}
            >
              <RadioButton
                value={item.nome}
                status={selectedFood === item ? "checked" : "unchecked"}
                onPress={() => selectFood(item)}
              />
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => selectFood(item)}
              >
                <Text style={Styles.foodName}>{item.nome}</Text>
                <Text style={Styles.foodDescription}>{item.descricao}</Text>
                {selectedFood && selectedFood.id === item.id && (
                  <View style={{ paddingVertical: 5 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Calorias: </Text>
                      <Text style={Styles.nutrientText}>{item.calorias} </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Gordura: </Text>
                      <Text style={Styles.nutrientText}>
                        {item.gordura_total_g} g
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>
                        Gordura Saturada:{" "}
                      </Text>
                      <Text style={Styles.nutrientText}>
                        {item.gordura_saturada_g} g
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Proteina: </Text>
                      <Text style={Styles.nutrientText}>
                        {item.proteina_g} g
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Sodio: </Text>
                      <Text style={Styles.nutrientText}>
                        {" "}
                        {item.sodio_mg} mg
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Potassio: </Text>
                      <Text style={Styles.nutrientText}>
                        {" "}
                        {item.potassio_mg} mg
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Colesterol: </Text>
                      <Text style={Styles.nutrientText}>
                        {" "}
                        {item.colesterol_mg} mg
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Carboidratos: </Text>
                      <Text style={Styles.nutrientText}>
                        {" "}
                        {item.carboidratos_total_g} g
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={Styles.nutrientText}>Fibra: </Text>
                      <Text style={Styles.nutrientText}> {item.fibra_g} g</Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={[
                          Styles.nutrientText,
                          { justifyContent: "flex-start" },
                        ]}
                      >
                        Açucar:{" "}
                      </Text>
                      <Text
                        style={[
                          Styles.nutrientText,
                          { justifyContent: "flex-end" },
                        ]}
                      >
                        {" "}
                        {item.acucar_g} g
                      </Text>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          )}
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[Styles.button, { backgroundColor: "#fff" }]}
            onPress={handClose}
          >
            <Text style={[Styles.buttonText, { color: "#b50000" }]}>
              Fechar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.button}
            onPress={() => handleSelectedFood(selectedFood)}
          >
            <Text style={Styles.buttonText}>Selecionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StylesApp();
