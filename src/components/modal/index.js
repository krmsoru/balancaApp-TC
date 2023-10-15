import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import StylesApp from '../../styles';

export default function ModalFoods({ handClose, handleSelectedFood }) {
    const [listFoods, setListFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const focused = useIsFocused();

    const Food = [
        {
            id: 1,
            nome: 'Carne',
            descricao: 'Uma fonte rica em proteínas.',
            nutrientes: { calorias: 20, sodio: 45, gorduras: 77, proteinas: 8 }
        },
        {
            id: 2,
            nome: 'Ovo',
            descricao: 'Uma boa fonte de proteína e vitaminas.',
            nutrientes: { calorias: 30, sodio: 60, gorduras: 50, proteinas: 5 }
        },
        {
            id: 3,
            nome: 'Arroz',
            descricao: 'Um grão básico com carboidratos.',
            nutrientes: { calorias: 130, sodio: 0, gorduras: 0.3, proteinas: 2.7 }
        },
        {
            id: 4,
            nome: 'Feijão',
            descricao: 'Uma ótima fonte de proteína vegetal.',
            nutrientes: { calorias: 80, sodio: 1, gorduras: 0.5, proteinas: 5.5 }
        },
        {
            id: 5,
            nome: 'Maçã',
            descricao: 'Uma fruta rica em fibras e vitaminas.',
            nutrientes: { calorias: 52, sodio: 1, gorduras: 0.2, proteinas: 0.3 }
        },
        {
            id: 6,
            nome: 'Banana',
            descricao: 'Uma fruta rica em potássio e carboidratos.',
            nutrientes: { calorias: 89, sodio: 1, gorduras: 0.3, proteinas: 1.1 }
        },
        {
            id: 7,
            nome: 'Espinafre',
            descricao: 'Uma folha verde rica em ferro e vitaminas.',
            nutrientes: { calorias: 23, sodio: 79, gorduras: 0.4, proteinas: 2.9 }
        },
        {
            id: 8,
            nome: 'Tomate',
            descricao: 'Um fruto com vitaminas e antioxidantes.',
            nutrientes: { calorias: 18, sodio: 5, gorduras: 0.2, proteinas: 0.9 }
        },
        {
            id: 9,
            nome: 'Pão',
            descricao: 'Uma fonte comum de carboidratos.',
            nutrientes: { calorias: 265, sodio: 432, gorduras: 3.1, proteinas: 9.4 }
        },
        {
            id: 10,
            nome: 'Queijo',
            descricao: 'Um produto lácteo rico em cálcio e proteínas.',
            nutrientes: { calorias: 402, sodio: 621, gorduras: 33, proteinas: 25 }
        }
    ];


    useEffect(() => {
        setListFoods(Food);
    }, [focused]);



    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderColor: '#000', padding: 10 }}>
            <View style={[{
                width: '80%',
                height: '75%',
                padding: 15,
                backgroundColor: '#fff',
                elevation: 8, // Adiciona uma sombra com elevação 5
            }]}>
                <FlatList
                    data={listFoods}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={Styles.radioButtonContainer}>
                            <RadioButton
                                value={item.nome}
                                status={selectedFood === item ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedFood(item)}
                            />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={Styles.foodName}>{item.nome}</Text>
                                <Text style={Styles.foodDescription}>{item.descricao}</Text>
                                <View style={{}}>
                                    <Text style={Styles.nutrientText}>Calorias: {item.nutrientes.calorias}  </Text>
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


                    <TouchableOpacity style={Styles.button} onPress={() => handleSelectedFood(selectedFood)}>
                        <Text style={Styles.buttonText}>Selecionar</Text>
                    </TouchableOpacity>



                </View>
            </View>
        </SafeAreaView >
    );
}
const Styles = StylesApp();