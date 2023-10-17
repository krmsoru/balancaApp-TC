import React from 'react';
import { TouchableOpacity, View,Text } from 'react-native';
import Chart from './components/cardChart';
import StylesApp from '../../styles';
import Storage from '../../hooks/storageFood';

export default function Hist() {
    const { getData } = Storage('@foods');
    const Styles = StylesApp();

    function log(){
        console.log('AsyncStorage =>',getData())
    }
    return (
        <View>
            <View style={Styles.card}>
                <TouchableOpacity style={Styles.button} onPress={log}>
                    <Text style={Styles.buttonText}>Teste</Text>
                </TouchableOpacity>
            </View>
            <Chart />
        </View>
    );
}