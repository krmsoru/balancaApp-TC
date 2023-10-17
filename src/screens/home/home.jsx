// Home.js
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Balance from './components/cardBalance';
import List from './components/cardList';

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <View>
        <Balance connectionStatus={connectionStatus} />
        <List />
      </View>
    </SafeAreaView>
  );
}
