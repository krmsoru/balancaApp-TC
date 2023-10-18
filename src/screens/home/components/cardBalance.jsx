// Balance.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import StylesApp from '../../../styles';

export default function CardBalance({ connectionStatus }) {

    const [weightValue, setWeightValue] = useState(0);
    const [weightNotation, setWeightNotation] = useState('g');
    const updateWeight = (weight) => {
        setWeightNotation(weight > 1000 ? 'kg' : 'g');
        setWeightValue(weight);
    };

    return (
        <View>
            <View style={[Styles.card, Styles.elevation,{Height:'20%'}]}>
                {connectionStatus ? (
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[Styles.heading, { fontSize: 50 }]}>
                                {weightValue} {weightNotation}
                            </Text>
                        </View>

                    </View>
                ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[Styles.heading, { color: '#ededed' }]}>Sem conexão</Text>
                        <MaterialIcons name="bluetooth-disabled" size={50} color="#ededed" />
                    </View>
                )}
            </View>
        </View>
    );
}

const Styles = StylesApp();