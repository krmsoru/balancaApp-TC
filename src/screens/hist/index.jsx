import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Chart from './components/cardChart';
import StylesApp from '../../styles';
import Storage from '../../hooks/storageFood';
import { useState } from 'react';

export default function Hist() {
    const { getData } = Storage('@foods');
    const [today, setToday] = useState();

    const Styles = StylesApp();

    const getToday = () => {
        let data = getData();
        setToday(data);
    }

    return (
        <View>
            <View style={Styles.card}>
                <TouchableOpacity style={Styles.button} onPress={getToday}>
                    <Text style={Styles.buttonText}>Teste</Text>
                </TouchableOpacity>
            </View>
            <Chart />
        </View>
    );
}