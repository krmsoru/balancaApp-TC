import React, { FC, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import FoodList from "./components/List";
import useApi from "../hooks/useApi";

type FoodModalProps = {
  visible: boolean;
  closeModal: () => void;
};

const FoodModal: FC<FoodModalProps> = (props) => {
  const { visible, closeModal } = props;
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState<[]>([]);

  const handleSearch = async () => {
    if (inputText.length < 3) {
      const data = await useApi(inputText);
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <SafeAreaView style={modalStyle().modalContainer}>
        <View style={modalStyle().modalTitle}>
          <Text style={modalStyle().modalTitleText}>Buscar alimentos</Text>
          <View>
            <TextInput
              style={modalStyle().modalInput}
              placeholder="Digite o nome do alimento"
              // onChangeText={}
            />
            <TouchableOpacity
              style={modalStyle().searchButton}
              onPress={search}
            >
              <Text style={modalStyle().btnText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          {/* <RenderList /> */}
          <View style={modalStyle().container}>
            <FoodList data={data} />
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
    modalFlatlistContiner: {
      flex: 1,
      justifyContent: "center",
    },
    modalCellOutline: {
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      marginHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 8,
    },
    modalTitle: {
      flex: 1,
      backgroundColor: sColor,
    },
    modalTitleText: {
      marginTop: 40,
      fontSize: 30,
      fontWeight: "bold",
      marginHorizontal: 20,
      textAlign: "center",
    },
    modalInput: {
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
      backgroundColor: pColor,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginHorizontal: 20,
      marginBottom: 5,
      borderRadius: 8,
    },
    btnWarning: {
      backgroundColor: sColor,
      borderColor: pColor,
      borderWidth: 4,
    },
    searchButton: {
      backgroundColor: pColor,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginHorizontal: 20,
      marginBottom: 5,
      borderRadius: 8,
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
      width: "100%",
      paddingVertical: 20,
    },
    card: {
      backgroundColor: sColor,
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginVertical: 4,
      marginHorizontal: 4,
      borderRadius: 12,
      borderColor: pColor,
      borderWidth: 1,
    },
    title: {
      flex: 1,
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
};

export default FoodModal;
