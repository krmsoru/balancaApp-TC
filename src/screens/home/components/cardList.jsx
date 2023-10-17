import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native';
import StylesApp from '../../../styles';
import ModalFoods from '../../../components/modal/modalList';
import Storage from '../../../hooks/storageFood';


export default function List() {

    const { storeData } = Storage('@foods');

    const [modalsVisible, setModalVisible] = useState(false);
    const [foodsSelected, setFoodsSelected] = useState([]);


    const handleModalOpenClose = () => {
        setModalVisible(!modalsVisible);
        console.log(foodsSelected.length)
    };

    function handleSelectedFood(food) {
        if (foodsSelected == null) setFoodsSelected([food])
        else setFoodsSelected([...foodsSelected, food]);

        handleModalOpenClose();
        // console.log('[CardList] Recebido =>', food)
    };

    const removeItem = (food) => {
        const newList = foodsSelected.filter((value) => value !== food);
        setFoodsSelected(newList);
    };

    const calculateNutrients = (value) => {
        let res = 0.0
        if (foodsSelected) {
            foodsSelected.forEach((food) => {
                if (value == 'calorias')
                    res += food.nutrientes.calorias;
                if (value == 'gorduras')
                    res += food.nutrientes.gorduras;
                if (value == 'sodio')
                    res += food.nutrientes.sodio;
                if (value == 'proteinas')
                    res += food.nutrientes.proteinas;
            })
        }
        return res;
    }

    const showResult = () => {
        if (foodsSelected.length === 0) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[Styles.heading, { color: '#e6e6e6' }]}>
                        Selecione o alimento
                    </Text>
                </View>
            );
        }

        return (
            <View style={{flex:1}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'flex-start' }}>

                        <View style={{ flexDirection: 'column', gap: 10 }}>
                            <Text style={Styles.nutrientText}>Calorias:</Text>
                            <Text style={Styles.nutrientText}>Proteinas:</Text>
                            <Text style={Styles.nutrientText}>Gorduras:</Text>
                            <Text style={Styles.nutrientText}>Sodio:</Text>
                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end' }}>

                        <View style={{ flexDirection: 'column', gap: 10 }}>
                            <Text style={Styles.nutrientText}>.......{calculateNutrients('calorias')}</Text>
                            <Text style={Styles.nutrientText}>.......{calculateNutrients('proteinas')}</Text>
                            <Text style={Styles.nutrientText}>.......{calculateNutrients('gorduras')}</Text>
                            <Text style={Styles.nutrientText}>.......{calculateNutrients('sodio')}</Text>
                        </View>

                    </View>
                </View>


                <View style={{ alignItems: 'center', alignContent: 'flex-end' }}>
                    <TouchableOpacity style={[Styles.button]} onPress={() => storeSelectedFoods()}>
                        <Text style={Styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>

            </View >
        );
    }

    const storeSelectedFoods = () => {
        try {
            if (foodsSelected != []) {
                storeData(foodsSelected);
                setFoodsSelected([])
            }
        } catch (error) {
            console.log('Erro =>', error);
        }
    }


    return (
        <SafeAreaView style={[Styles.card, Styles.elevation, { height: '63%', justifyContent: 'flex-start' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                <TouchableOpacity style={[Styles.button, Styles.buttonWarning]} onPress={() => setFoodsSelected([])}>
                    <Text style={[Styles.buttonText, Styles.buttonTextWarning]}>
                        Limpar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Styles.button]} onPress={handleModalOpenClose}>
                    <Text style={Styles.buttonText}>
                        Adicionar
                    </Text>
                </TouchableOpacity>

                <Modal visible={modalsVisible} transparent={true}>
                    <ModalFoods handClose={handleModalOpenClose} handleSelectedFood={handleSelectedFood} />
                </Modal>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    numColumns={4}
                    data={foodsSelected}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={Styles.tagStyles} onLongPress={() => removeItem(item)}>
                            <Text style={Styles.tagTextStyles}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {showResult()}

        </SafeAreaView>
    );
}


const Styles = StylesApp();
