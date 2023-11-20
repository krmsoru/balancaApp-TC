import { StyleSheet } from "react-native";

import theme from "../../styles/app";

const style = StyleSheet.create({
  btn: {
    backgroundColor: theme.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  btn_err: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
    borderColor: theme.primaryColor,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.neutralColor,
  },
  text_err: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.primaryColor,
  },
});

export default style;
