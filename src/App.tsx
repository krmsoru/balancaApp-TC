import React from "react";
import Routes from "./routes";
import { KeyboardAvoidingView } from "react-native";

const App = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Routes></Routes>
    </KeyboardAvoidingView>
  );
};

export default App;
