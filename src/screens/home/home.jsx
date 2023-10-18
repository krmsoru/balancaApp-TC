// Home.js
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import CardBalance from './components/cardBalance';
import CardList from './components/cardList';

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [weight, setWeight] = useState(0.00)

  const reciveWeightValue = (value) => {
    setWeight(value)
  }
  const handleWeightValue = () => {
    const value = weight
    return value
  }

  const componentes = [
    <CardBalance connectionStatus={connectionStatus} />,
    <CardList homeWeight={weight} />
  ]

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 40, justifyContent: 'flex-start', height: '100%' }}>
      <FlatList
        data={componentes}
        renderItem={({ item }) => item}
      />
    </SafeAreaView>
  );
}
