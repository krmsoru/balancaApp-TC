import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, SafeAreaView, ScrollView } from 'react-native';
import StylesApp from '../../../styles';
import ModalFoods from '../../../components/modal/modalList';
import Storage from '../../../hooks/storageFood';
import { useEffect } from 'react';


export default function CardList(homeWeight) {

    const { storeData } = Storage('@foods');
    const [modalsVisible, setModalVisible] = useState(false);
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [nutrients, setNutrients] = useState({});
    const weight = 20.00;




    const handleModalOpenClose = () => {
        setModalVisible(!modalsVisible);
    };

    function handleSelectedFood(food) {
        if (food) {

            let AllReadyIn = false;
            selectedFoods.forEach((obj) => { if (obj === food) AllReadyIn = true })
            if (!AllReadyIn) {
                setSelectedFoods([...selectedFoods, food])
                handleModalOpenClose();
            }
        }
    }

    const removeItem = (food) => {
        const newList = selectedFoods.filter((value) => value !== food);
        setSelectedFoods(newList);
    };


    const calculateNutrients = () => {

        let data = {
            calorias: 0,
            gordura_total_g: 0,
            gordura_saturada_g: 0,
            proteina_g: 0,
            sodio_mg: 0,
            potassio_mg: 0,
            colesterol_mg: 0,
            carboidratos_total_g: 0,
            fibra_g: 0,
            acucar_g: 0,
        };

        if (selectedFoods.length > 0) {
            selectedFoods.forEach((item) => {
                data.calorias += (item.calorias * weight) / item.tamanho_procao_g;
                data.gordura_total_g += (item.gordura_total_g * weight) / item.tamanho_procao_g;
                data.gordura_saturada_g += (item.gordura_saturada_g * weight) / item.tamanho_procao_g;
                data.proteina_g += (item.proteina_g * weight) / item.tamanho_procao_g;
                data.sodio_mg += (item.sodio_mg * weight) / item.tamanho_procao_g;
                data.potassio_mg += (item.potassio_mg * weight) / item.tamanho_procao_g;
                data.colesterol_mg += (item.colesterol_mg * weight) / item.tamanho_procao_g;
                data.carboidratos_total_g += (item.carboidratos_total_g * weight) / item.tamanho_procao_g;
                data.fibra_g += (item.fibra_g * weight) / item.tamanho_procao_g;
                data.acucar_g += (item.acucar_g * weight) / item.tamanho_procao_g;
            });
        }
        setNutrients(data);
    };

    const storeSelectedFoods = () => {
        try {
            if (selectedFoods.length > 0) {
                storeData(nutrients);
                setSelectedFoods([])
            }
        } catch (error) {
            console.log('Erro =>', error);
        }
    }

    useEffect(() => {
        calculateNutrients(weight);
    }, [selectedFoods]);

    return (
        <View
            style={[Styles.card, Styles.elevation, { justifyContent: 'flex-start', Height: '80%' }]}
        >
            {selectedFoods.length > 0 ? (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                    <TouchableOpacity style={[Styles.button, Styles.buttonWarning]} onPress={() => setSelectedFoods([])}>
                        <Text style={[Styles.buttonText, Styles.buttonTextWarning]}>
                            Limpar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[Styles.button]} onPress={handleModalOpenClose}>
                        <Text style={Styles.buttonText}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={[Styles.button]} onPress={handleModalOpenClose}>
                        <Text style={Styles.buttonText}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            <Modal visible={modalsVisible} transparent={true}>
                <ModalFoods handClose={handleModalOpenClose} handleSelectedFood={handleSelectedFood} />
            </Modal>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    numColumns={4}
                    data={selectedFoods}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={Styles.tagStyles} onLongPress={() => removeItem(item)}>
                            <Text style={Styles.tagTextStyles}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {selectedFoods.length === 0 ?
                (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[Styles.heading, { color: '#e6e6e6' }]}>
                            Selecione o alimento
                        </Text>
                    </View>)
                : (
                    <View>
                        <FlatList
                            data={Object.keys(nutrients)}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                    <Text style={Styles.nutrientText}>{item.includes('_') ? item.replace(/_/g, ' ') : item}:
                                    </Text>
                                    <Text style={Styles.nutrientText}>
                                        {nutrients[item].toFixed(2) + (item.includes('_g') || item.includes('_mg') ? ' mg' : ' g')}
                                    </Text>
                                </View>
                            )}
                        />

                        <View style={{ alignItems: 'center', alignContent: 'flex-end' }}>
                            <TouchableOpacity style={[Styles.button]} onPress={() => storeSelectedFoods()}>
                                <Text style={Styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>

                    </View >
                )
            }

        </View >
    );
}


const Styles = StylesApp();
