// Balance.js
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CardBalance({ connectionStatus, weightValue}) {

  useEffect(() => {
    console.log("[",new Date(),"] CardBalance =>","weightValue =>", weightValue, "Typeof =>", typeof weightValue);
  }, [weightValue]);


  return (
    <View className="rounded-lg bg-white p-10 mx-4 my-1 shadow-lg shadow-blue-600">
      <View className="m-auto">
        {connectionStatus ? (
          <View className="flex-row items-center">
            <Text className="text-6xl font-medium">{weightValue}</Text>
            <Text className="text-6xl">{weightValue > 1000 ? "kg" : "g"}</Text>
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
