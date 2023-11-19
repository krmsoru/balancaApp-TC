import React, { FC, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import style from "./styles";
import Button from "../../components/Button";
import { foodData } from "../../types";

type FoodModalProps = {
  visible: boolean;
  closeModal: () => void;
  handleItem: (item: foodData) => void;
};

type ItemProps = {
  item: foodData;
  onPress: () => void;
  onLongPress: () => void;
  verifyId: string;
};

const Item = ({ item, onPress, onLongPress, verifyId }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={[style.item, { borderWidth: item.id === verifyId ? 2 : 0 }]}
  >
    <Text style={[style.itemTitle]}>{item.nome}</Text>
    <Text style={[style.itemTitle]}>{item.descricao}</Text>

    {item.id === verifyId ? (
      <View>
        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Umidade:</Text>
            <Text style={style.innerItemText}>{item.umidade} %</Text>
          </View>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Energia:</Text>
            <Text style={style.innerItemText}>{item.energia_kcal} kcal</Text>
          </View>
        </View>

        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Proteína:</Text>
            <Text style={style.innerItemText}>{item.proteina_g} g</Text>
          </View>

          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Colesterol:</Text>
            <Text style={style.innerItemText}>{item.colesterol_mg} mg</Text>
          </View>
        </View>

        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Carboidrato:</Text>
            <Text style={style.innerItemText}>{item.carboidrato_g}</Text>
          </View>

          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Fibra:</Text>
            <Text style={style.innerItemText}>{item.fibra_g}</Text>
          </View>
        </View>
        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Calcio:</Text>
            <Text style={style.innerItemText}>{item.calcio_mg}</Text>
          </View>

          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Ferro:</Text>
            <Text style={style.innerItemText}>{item.ferro_mg} mg </Text>
          </View>
        </View>
        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Sódio:</Text>
            <Text style={style.innerItemText}>{item.sodio_mg} mg</Text>
          </View>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Potássio:</Text>
            <Text style={style.innerItemText}>{item.potassio_mg} mg</Text>
          </View>
        </View>
        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Vitamina C:</Text>
            <Text style={style.innerItemText}>{item.vitaminaC_mg} mg</Text>
          </View>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Saturados:</Text>
            <Text style={style.innerItemText}>{item.saturados_g} g</Text>
          </View>
        </View>

        <View style={style.innerItem}>
          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Monoinsaturados:</Text>
            <Text style={style.innerItemText}>{item.monoinsaturados_g}g</Text>
          </View>

          <View style={style.innerItem}>
            <Text style={style.innerItemText}>Poliinsaturados:</Text>
            <Text style={style.innerItemText}>{item.poliinsaturados_g} g</Text>
          </View>
        </View>
      </View>
    ) : (
      <View></View>
    )}
  </TouchableOpacity>
);

const FoodModal: FC<FoodModalProps> = (props) => {
  const { visible, closeModal, handleItem } = props;
  const [inputText, setInputText] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<foodData[] | null>();

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
    setApiResponse(null);
    const search = await FetchFoodData(inputText.toLowerCase());
    const toJSON = JSON.parse(search);
    setApiResponse(toJSON);
  };

  const renderItem = ({ item }: { item: foodData }) => {
    return (
      <Item
        verifyId={selectedId}
        item={item}
        onLongPress={() => {
          // Alert.alert("LongPress", item.nome);
          handleItem(item);
        }}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <SafeAreaView style={style.modal}>
        <View style={style.Title}>
          <Text style={[style.TitleText, { marginBottom: 0 }]}>
            Buscar alimentos
          </Text>

          <View>
            <TextInput
              style={style.Input}
              placeholder="Digite o nome do alimento"
              onChangeText={(evt) => handleInput(evt)}
            />
            <Button title="Buscar" onPress={handleSearch} btnclass={1}></Button>
          </View>
          {/* <RenderList /> */}
          <View style={style.container}>
            <FlatList
              style={{ flex: 1, width: "100%", margin: 0 }}
              data={apiResponse}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>

          <Button
            title="Fechar"
            onPress={() => {
              setApiResponse(null);
              setSelectedId("");
              closeModal();
            }}
            btnclass={2}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default FoodModal;
