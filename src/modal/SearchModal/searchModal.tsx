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
import ItemInfo from "../../components/ItemInfo/itemInfo";

type FoodModalProps = {
  visible: boolean;
  closeModal: () => void;
  handleItem: (item: itemData) => void;
};

const FoodModal: FC<FoodModalProps> = (props) => {
  const { visible, closeModal, handleItem } = props;
  const [inputText, setInputText] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const { FetchFoodData, apiRequest } = useAPI();

  const handleInput = (evt: string) => {
    setInputText(evt);
  };
  const handleSearch = async () => {
    await FetchFoodData(inputText);
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
              disabled={inputText.length < 3 ? true : false}
              onPress={() =>
                inputText.length > 3
                  ? handleSearch()
                  : Alert.alert("Deve conter ao menos 3 letras")
              }
              btnclass={1}
            />
          </View>
          
          <View style={style.container}>
            <FlatList
              style={{ flex: 1, width: "100%", margin: 0 }}
              data={apiRequest}
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
