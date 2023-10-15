import React, { useState } from 'react';
import { View, Text, Pressable, Modal, FlatList } from 'react-native';
import StylesApp from '../../../styles';
import ModalFoods from '../../../components/modal';

export default function List() {
    const [modalsVisible, setModalVisible] = useState(false);
    const [foodsSelected, setFoodsSelected] = useState([]);

    const handleModalOpenClose = () => {
        setModalVisible(!modalsVisible);
    };

    const handleSelectedFood = (item) => {
        if (item) {
            handleModalOpenClose();
            setFoodsSelected([...foodsSelected, item]);
            console.log('Alimento selecionado:', foodsSelected);
        }
    };

    return (
        <View style={Styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Pressable style={[Styles.button, Styles.buttonWarning]}>
                    <Text style={[Styles.buttonText, Styles.buttonTextWarning]}>Resetar</Text>
                </Pressable>

                <Pressable style={[Styles.button]}>
                    <Text style={Styles.buttonText} onPress={handleModalOpenClose}>Adicionar</Text>
                </Pressable>

                <Modal visible={modalsVisible} transparent={true}>
                    <ModalFoods handClose={handleModalOpenClose} handleSelectedFood={handleSelectedFood} />
                </Modal>

                <FlatList
                    data={foodsSelected}
                    renderItem={({ item }) => (
                        <View style={Styles.radioButtonContainer}>
                            <Text style={Styles.foodName}>{item.nome}</Text>
                            {/* Renderizar outros detalhes do item se necessário */}
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}


const Styles = StylesApp();