// Home.js
import React, { useState } from "react";
import { FlatList, View, Scr } from "react-native";
import CardBalance from "./components/cardBalance";
import CardList from "./components/cardList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [weight, setWeight] = useState(0.0);

  const reciveWeightValue = (value) => {
    setWeight(value);
  };
  const handleWeightValue = () => {
    const value = weight;
    return value;
  };

  const components = [
    { key: "cardBalance", element: <CardBalance connectionStatus={connectionStatus} /> },
    { key: "cardList", element: <CardList homeWeight={weight} /> },
  ];

  return (
    <SafeAreaView className=" flex-1 bg-gray-100">
      <FlatList
        data={components}
        renderItem={({ item }) => <View key={item.key}>{item.element}</View>}
      />
    </SafeAreaView>
  );
}
