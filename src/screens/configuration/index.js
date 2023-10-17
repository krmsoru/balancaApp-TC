import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import StylesApp from '../../styles';

export default function Configuration() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <View style={[Style.card, { flexDirection: 'row', alignContent: 'center', alignItems: 'center' }]}>
                <Text>Modo Escuro</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}

const Style = StylesApp();