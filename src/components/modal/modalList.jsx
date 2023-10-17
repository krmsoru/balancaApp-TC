import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, FlatList, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import StylesApp from '../../styles';
import foodsData from '../../assets/data/foodsData.json';

export default function ModalFoods({ handClose, handleSelectedFood }) {
    const [listFoods, setListFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [searchText, setSearchText] = useState('');
    const focused = useIsFocused();

    useEffect(() => {
        setListFoods(foodsData);
    }, [focused]);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const selectFood = (item) => {
        // console.log('[Modal] Selecionado =>', item)
        setSelectedFood(item)
    }

    const handleSelectedFoodLog = (item) => {
        handleSelectedFood(item)
        console.log('[Modal] Enviado =>', item)
    }

    const filteredFoods = listFoods.filter((item) =>
        item.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                borderColor: '#000',
                padding: 10,
            }}
        >
            <View
                style={[
                    {
                        width: '80%',
                        height: '75%',
                        padding: 15,
                        backgroundColor: '#fff',
                        elevation: 8,
                    },
                ]}
            >
                <TextInput
                    style={Styles.searchInput}
                    placeholder="Pesquisar alimentos"
                    onChangeText={handleSearch}
                    value={searchText}
                />
                <FlatList
                    data={filteredFoods}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={Styles.radioButtonContainer}>
                            <RadioButton
                                value={item.nome}
                                status={selectedFood === item ? 'checked' : 'unchecked'}
                                onPress={() => selectFood(item)}
                            />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={Styles.foodName}>{item.nome}</Text>
                                <Text style={Styles.foodDescription}>{item.descricao}</Text>
                                <View style={{}}>
                                    <Text style={Styles.nutrientText}>Calorias: {item.nutrientes.calorias} </Text>
                                    <Text style={Styles.nutrientText}>Sódio: {item.nutrientes.sodio}</Text>
                                    <Text style={Styles.nutrientText}>Gorduras: {item.nutrientes.gorduras}</Text>
                                    <Text style={Styles.nutrientText}>Proteínas: {item.nutrientes.proteinas}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />

                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={[Styles.button, { backgroundColor: '#fff' }]} onPress={handClose}>
                        <Text style={[Styles.buttonText, { color: '#b50000' }]}>Fechar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.button} onPress={() => handleSelectedFoodLog(selectedFood)}>
                        <Text style={Styles.buttonText}>Selecionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Styles = StylesApp();
