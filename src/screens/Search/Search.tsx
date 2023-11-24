import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
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

  const isEnabled = () => {
    if (inputText.length > 3) return false;
    else return true;
  };
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
    <SafeAreaView style={{ height: "100%", gap: 20, padding: 10 }}>
      {/* ---------------------------BUSCA-------------------------------- */}
      <View style={{ height: "25%" }}>
        <Text style={style.title}>Buscar Alimentos</Text>
        <View style={{ alignItems: "center", gap: 20 }}>
          <TextInput
            style={[style.input, { width: "80%" }]}
            keyboardType="web-search"
            placeholder="pesquisar alimento..."
            onChangeText={(value) => setText(value)}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={[style.input, { width: "40%" }]}
              keyboardType="numeric"
              placeholder="inserir peso"
              onChangeText={(value) => setNumeric(Number(value))}
            />
            <Text style={style.title}>(g)</Text>
          </View>
          <TouchableOpacity
            style={[style.button, { width: "80%"}]}
            disabled={isEnabled()}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={25} color={style.button.tintColor} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          ></View>
        </View>
      </View>
      {/* ------------------------ ITENS BUSCA---------------------------------- */}
      <View style={{ height: "35%" }}>
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={apiRequest}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
      {/* ------------------------- RESULTADOS ------------------------------------ */}

      <View style={{ height: "35%" }}>
        <TagList
          data={selectedItems}
          onLongPress={(item) => {
            let data = selectedItems.filter((obj) => obj.id !== item.id);
            setSelected(data);
          }}
        ></TagList>
      </View>
    </SafeAreaView>
  );
}
