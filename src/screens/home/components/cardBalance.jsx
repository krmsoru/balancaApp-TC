// Balance.js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CardBalance({ connectionStatus }) {
  const [weightValue, setWeightValue] = useState(0);
  const [weightNotation, setWeightNotation] = useState("g");
  const updateWeight = (weight) => {
    setWeightNotation(weight > 1000 ? "kg" : "g");
    setWeightValue(weight);
  };

  return (
    <View className="rounded-lg bg-white p-10 m-4 shadow-lg shadow-blue-600">
      <View className="m-auto">
        {connectionStatus ? (
          <View className="flex-row items-center">
            <Text className="text-6xl font-medium">{weightValue}</Text>
            <Text className="text-6xl">{weightNotation}</Text>
          </View>
        ) : (
          <View className="items-center">
            <Text className="text-3xl font-medium leading-tight text-neutral-100">
              Sem conexão
            </Text>
            <MaterialIcons
              name="bluetooth-disabled"
              size={50}
              color="#efefef"
            />
          </View>
        )}
      </View>
    </View>
  );
}
