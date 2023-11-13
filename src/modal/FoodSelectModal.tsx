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
} from "react-native";
import FoodsSearched from "./components/FoodsSearched";

type FoodModalProps = {
  visible: boolean;
  closeModal: () => void;
};

const FoodModal: FC<FoodModalProps> = (props) => {
  const { visible, closeModal } = props;
  const {
    RenderList,
    filterData,
    handleSearch,
    search,
    selectFood,
    filteredFoods,
  } = FoodsSearched();

  return (
    <Modal
      style={modalStyle.modalContainer}
      animationType="slide"
      transparent={false}
      visible={visible}
    >
      <SafeAreaView style={modalStyle.modalTitle}>
        <View style={modalStyle.modalTitle}>
          <Text style={modalStyle.modalTitleText}>Buscar alimentos</Text>
          <View>
            <TextInput
              style={modalStyle.modalInput}
              placeholder="Digite o nome do alimento"
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={modalStyle.searchButton} onPress={search}>
              <Text style={modalStyle.ButtonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          {/* <RenderList /> */}
          <View style={modalStyle.container}>
            <FlatList
              data={filteredFoods}
              keyExtractor={(item, index) =>
                item.id?.toString() || index.toString()
              }
              renderItem={({ item }) => (
                <View style={modalStyle.foodsCard}>
                  <View style={modalStyle.foodTitle}>
                    <Text style={modalStyle.foodTitleText}>{item.nome}</Text>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
            />
          </View>
          <TouchableOpacity
            style={[
              modalStyle.Button,
              {
                backgroundColor: "white",
                borderColor: "#FF6060",
                borderWidth: 4,
              },
            ]}
            onPress={closeModal}
          >
            <Text style={[modalStyle.ButtonText, { color: "#FF6060" }]}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
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
    backgroundColor: "#f2f2f2",
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
    borderBottomColor: "#FF6060",
    borderRadius: 6,
    fontSize: 20,
    fontWeight: "500",
  },
  Button: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
  },
  foodsCard: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 12,
    borderColor: "#FF6060",
    borderWidth: 1,
  },
  foodTitle: {
    flex: 1,
  },
  foodTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FoodModal;
