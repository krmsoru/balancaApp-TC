// Balance.js
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import StylesApp from '../../../styles';

export default function Balance({ connectionStatus }) {

    const [weightValue, setWeightValue] = useState(0);
    const [weightNotation, setWeightNotation] = useState('g');
    const updateWeight = (weight) => {
        setWeightNotation(weight > 1000 ? 'kg' : 'g');
        setWeightValue(weight);
    };

    const setBalanceVisible = () => {
        if (connectionStatus) {
            return (
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[Styles.heading, { fontSize: 50 }]}>
                            {weightValue} {weightNotation}
                        </Text>
                    </View>

                </View>
            );
        } else {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[Styles.heading, { color: '#ededed' }]}>Sem conexão</Text>
                    <MaterialIcons name="bluetooth-disabled" size={50} color="#ededed" />
                </View>
            );
        }
    };
    return (
        <View>
            <View style={[Styles.card, Styles.elevation]}>
                <Text style={Styles.heading}>Balança</Text>
                {setBalanceVisible()}
            </View>
        </View>
    );
}

const Styles = StylesApp();