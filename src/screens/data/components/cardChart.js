import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import StylesApp from '../../../styles/index';

const width = Dimensions.get("window").width;

const data = {
    labels: ["08/10", "", "09/10", "", "11/10", "", "Hoje"],
    datasets: [
        {
            data: [2, 0, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(141, 44, 158, ${opacity})`, // optional
            strokeWidth: 3 // optional
        }
    ],
};

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForLabels: {
        fontWeight: '900'
    },
    strokeWidth: 2, // optional, default 3
    barPercentage: 2,
    useShadowColorFromDataset: false // optional
};

export default function Chart() {

    const Styles = StylesApp();

    return (
        <View>
            <View style={[Styles.card, Styles.elevation]}>
                <Text style={Styles.heading}>
                    Histórico
                </Text>

                <LineChart
                    data={data}
                    width={width-70}
                    height={220}
                    chartConfig={chartConfig}
                />

            </View>
        </View>
    );
}
