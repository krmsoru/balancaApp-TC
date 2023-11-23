import React, { FC, useState, memo } from "react";
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
import { itemData } from "../../types";
import useAPI from "../../hooks/useApi";

type FoodModalProps = {
  visible: boolean;
  closeModal: () => void;
  handleItem: (item: itemData) => void;
};

type ItemProps = {
  item: itemData;
  onPress: () => void;
  onLongPress: () => void;
  verifyId: string;
};

const Item = memo(({ item, onPress, onLongPress, verifyId }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={[style.item, { borderWidth: item.id === verifyId ? 3 : 0 }]}
  >
    <Text style={[style.itemTitle]}>{item.nome}</Text>
    <Text style={[style.itemSubTitle, { opacity: 0.7 }]}>{item.descricao}</Text>

    {item.id === verifyId && (
      <View style={style.itemContainer}>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Umidade(%)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Energia(kcal)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Proteina
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Colesterol(mg):
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Carboidrato g:
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Fibra(g)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            calcio(mg)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Ferro(mg)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Sódio(mg)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Potássio(mg)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Vitamina C(mg)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Saturados(g)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Monoinsaturados(g)
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Poliinsaturados(g)
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.umidade}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.energia_kcal}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.proteina_g}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.colesterol_mg}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.carboidrato_g}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.fibra_g}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.calcio_mg}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.ferro_mg}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.sodio_mg}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.poliinsaturados_g}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.vitaminaC_mg}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.saturados_g}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.monoinsaturados_g}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {item.poliinsaturados_g}
          </Text>
        </View>
      </View>
    )}
  </TouchableOpacity>
));

const FoodModal: FC<FoodModalProps> = (props) => {
  const { visible, closeModal, handleItem } = props;
  const [inputText, setInputText] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");

    const {FetchFoodData,response} = useAPI();
  const handleInput = (evt: string) => {
    setInputText(evt);
  };
  const handleSearch = async () => {
    const search = await FetchFoodData(inputText.toLowerCase());
  };

  const renderItem = ({ item }: { item: itemData }) => (
    <Item
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
            <Button
              title="Buscar"
              onPress={() =>
                inputText.length > 3
                  ? handleSearch()
                  : Alert.alert("Deve conter ao menos 3 letras")
              }
              btnclass={1}
            ></Button>
          </View>
          {/* <RenderList /> */}
          <View style={style.container}>
            <FlatList
              style={{ flex: 1, width: "100%", margin: 0 }}
              data={response}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>

          <Button
            title="Fechar"
            onPress={() => {
              setSelectedId("");
              setInputText("");
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
