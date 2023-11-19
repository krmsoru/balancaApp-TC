import React from "react";
import { SafeAreaView } from "react-native";
import theme from "./styles/app";

import Home from "./screens/Home/Home";
const App = () => {
  return (
    <SafeAreaView style={{flex:1 }}>
      <Home />
    </SafeAreaView>
  );
};
export default App;
