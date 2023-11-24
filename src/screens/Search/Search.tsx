import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useAPI from "../../hooks/useApi";
import style from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import ItemInfo from "../../components/ItemInfo/itemInfo";
import { itemData } from "../../types";
import { nutrientsMath } from "../../modules";
import TagList from "../../components/TagList/taglist";

export default function Search() {
  const [inputText, setText] = useState<string>("");
  const [inputNumeric, setNumeric] = useState<number>(0);
  const { FetchFoodData, apiRequest } = useAPI();
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedItems, setSelected] = useState<any[]>([]);

  const handleItem = (obj: itemData) => {
    if (obj.id != undefined) {
      let data = selectedItems.filter((item) => item.id !== obj.id);
      const Item = nutrientsMath(obj, inputNumeric);
      data = [...data, Item];
      setSelected(data);
    }
  };
  const handleSearch = async () => {
    FetchFoodData(inputText.toLowerCase());
    console.log("APIREQUEST ->  ", apiRequest);
  };

  const renderItem = ({ item }: { item: itemData }) => (
    <ItemInfo
      key={item.id}
      verifyId={selectedId}
      item={item}
      onLongPress={() => {
        handleItem(item);
      }}
      onPress={() => setSelectedId(item.id)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* ---------------------------BUSCA-------------------------------- */}
      <View style={{ flex: 1, marginVertical: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Buscar Alimentos
        </Text>
        <View style={{ flex: 1, width: "90%", alignItems: "center" }}>
          <TextInput
            style={[style.input, { width: "95%" }]}
            keyboardType="web-search"
            placeholder="alimento"
            onChangeText={(value) => setText(value)}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <TextInput
              style={[style.input, { flex: 1 }]}
              keyboardType="numeric"
              placeholder="peso"
              onChangeText={(value) => setNumeric(Number(value))}
            />
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: "#4245",
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
              onPress={() => handleSearch()}
            >
              <Feather name="search" size={25} color={"#000"} />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Pesquisar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* ------------------------ ITENS BUSCA---------------------------------- */}
      <View style={{}}></View>
      {/* ------------------------- RESULTADOS ------------------------------------ */}
      <FlatList
        style={{ flex: 1, width: "100%", margin: 0 }}
        data={apiRequest}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        
      />
      <TagList
        data={selectedItems}
        onLongPress={(item) => {
          let data = selectedItems.filter((obj) => obj.id !== item.id);
          setSelected(data);
        }}
      />
    </SafeAreaView>
  );
}
