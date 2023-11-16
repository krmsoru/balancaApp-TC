import React, { FC, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Animated,
} from "react-native";
import FoodDataList from "./components/List";

type FoodModalProps = {
  visible: boolean;
  closeModal: () => void;
};

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
  verifyId: string;
};
type DetailProps = {
  item: foodData;
};

const Item = ({
  item,
  onPress,

  verifyId,
}: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[modalStyle().item, { borderWidth: item.id === verifyId ? 2 : 0 }]}
  >
    <Text style={[modalStyle().itemTitle]}>{item.nome}</Text>
    <Text style={[modalStyle().itemTitle]}>{item.descricao}</Text>

    {item.id === verifyId ? (
      <View>
        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Umidade:</Text>
            <Text style={modalStyle().innerItemText}>{item.umidade} %</Text>
          </View>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Energia:</Text>
            <Text style={modalStyle().innerItemText}>
              {item.energia_kcal} kcal
            </Text>
          </View>
        </View>

        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Proteína:</Text>
            <Text style={modalStyle().innerItemText}>{item.proteina_g} g</Text>
          </View>

          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Colesterol:</Text>
            <Text style={modalStyle().innerItemText}>
              {item.colesterol_mg} mg
            </Text>
          </View>
        </View>

        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Carboidrato:</Text>
            <Text style={modalStyle().innerItemText}>{item.carboidrato_g}</Text>
          </View>

          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Fibra:</Text>
            <Text style={modalStyle().innerItemText}>{item.fibra_g}</Text>
          </View>
        </View>
        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Calcio:</Text>
            <Text style={modalStyle().innerItemText}>{item.calcio_mg}</Text>
          </View>

          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Ferro:</Text>
            <Text style={modalStyle().innerItemText}>{item.ferro_mg} mg </Text>
          </View>
        </View>
        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Sódio:</Text>
            <Text style={modalStyle().innerItemText}>{item.sodio_mg} mg</Text>
          </View>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Potássio:</Text>
            <Text style={modalStyle().innerItemText}>
              {item.potassio_mg} mg
            </Text>
          </View>
        </View>
        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Vitamina C:</Text>
            <Text style={modalStyle().innerItemText}>
              {item.vitaminaC_mg} mg
            </Text>
          </View>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Saturados:</Text>
            <Text style={modalStyle().innerItemText}>{item.saturados_g} g</Text>
          </View>
        </View>

        <View style={modalStyle().innerItem}>
          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Monoinsaturados:</Text>
            <Text style={modalStyle().innerItemText}>
              {item.monoinsaturados_g}g
            </Text>
          </View>

          <View style={modalStyle().innerItem}>
            <Text style={modalStyle().innerItemText}>Poliinsaturados:</Text>
            <Text style={modalStyle().innerItemText}>
              {item.poliinsaturados_g} g
            </Text>
          </View>
        </View>
      </View>
    ) : (
      <View></View>
    )}
  </TouchableOpacity>
);

const FoodModal: FC<FoodModalProps> = (props) => {
  const { visible, closeModal } = props;
  const [inputText, setInputText] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [data, setData] = useState<foodData[] | null>();

  function FetchFoodData(value: string) {
    const url = `https://apibalancadavida.azurewebsites.net/api/Food/ByName/${value}`;
    return fetchAsync(url);
  }

  async function fetchAsync(url: string) {
    var response = await fetch(url);
    if (response.ok) {
      const data = await response.text();
      return data;
    } else {
      return "Erro na API";
    }
  }
  const handleInput = (evt: string) => {
    setInputText(evt);
  };
  const handleSearch = async () => {
    setData(null);
    const search = await FetchFoodData(inputText.toLowerCase());
    const toJSON = JSON.parse(search);
    setData(toJSON);
  };

  const renderItem = ({ item }: { item: foodData }) => {
    return (
      <Item
        verifyId={selectedId}
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <SafeAreaView style={modalStyle().modalContainer}>
        <View style={modalStyle().Title}>
          <Text style={[modalStyle().TitleText, { marginBottom: 0 }]}>
            Buscar alimentos
          </Text>
          <View>
            <TextInput
              style={modalStyle().Input}
              placeholder="Digite o nome do alimento"
              onChangeText={(evt) => handleInput(evt)}
            />
            <TouchableOpacity style={modalStyle().btn} onPress={handleSearch}>
              <Text style={modalStyle().btnText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          {/* <RenderList /> */}
          <View style={modalStyle().container}>
            <FlatList
              style={{ flex: 1, width: "100%", margin: 0 }}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>
          <TouchableOpacity
            style={[modalStyle().btn, modalStyle().btnWarning]}
            onPress={closeModal}
          >
            <Text style={[modalStyle().btnText, modalStyle().btnTextWarning]}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const modalStyle = (pColor: string = "#FF6060", sColor: string = "#f2f2f2") => {
  return StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: sColor,
    },
    FlatlistContiner: {
      flex: 1,
    },
    Title: {
      flex: 1,
      backgroundColor: sColor,
    },
    TitleText: {
      marginTop: 40,
      fontSize: 30,
      fontWeight: "bold",
      marginHorizontal: 20,
      textAlign: "center",
    },
    Input: {
      width: "auto",
      marginVertical: 10,
      marginHorizontal: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: pColor,
      borderRadius: 6,
      fontSize: 20,
      fontWeight: "500",
    },
    btn: {
      borderRadius: 8,
      backgroundColor: pColor,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
      marginVertical: 4,
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    btnWarning: {
      backgroundColor: sColor,
      borderColor: pColor,
      borderWidth: 4,
    },
    btnText: {
      fontSize: 18,
      fontWeight: "bold",
      color: sColor,
    },
    btnTextWarning: {
      color: pColor,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 20,
    },
    itemTitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#FF6060",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    item: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: 6,
      padding: 20,
      elevation: 4,
      borderColor: "#FF6060",
      marginBottom: 10,
      marginHorizontal: 2,
      // flexWrap: "nowrap",
    },
    innerItem: {
      flex: 1,
      flexShrink: 1,
      flexGrow: 1,
      backgroundColor: "#FF6060",
      padding: 6,
      marginTop: 4,
      borderRadius: 6,
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    innerItemText: {
      color: "#fff",
    },
  });
};

export default FoodModal;
