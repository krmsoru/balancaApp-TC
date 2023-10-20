import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import CardBalance from "./components/cardBalance";
import CardList from "./components/cardList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [weightValue, setWeightValue] = useState(1200.0);


  useEffect(() => {
    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 800 + 700);
      setWeightValue(randomNumber);
    };

    const interval = setInterval(generateRandomNumber, 3000);
    return () => clearInterval(interval);
  }, []);

  const components = [
    {
      key: "cardBalance",
      element: (
        <CardBalance
          connectionStatus={connectionStatus}
          weightValue={weightValue}
        />
      ),
    },
    { key: "cardList", element: <CardList weightValue={weightValue} /> },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <FlatList
        data={components}
        renderItem={({ item }) => <View key={item.key}>{item.element}</View>}
      />
    </SafeAreaView>
  );
}
