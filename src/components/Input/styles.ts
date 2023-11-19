import { StyleSheet } from "react-native";

import theme from "../../styles/app";

const style = StyleSheet.create({
  container: {},
  Input: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: theme.primaryColor,
    borderRadius: 6,
    fontSize: 20,
    fontWeight: "500",
    color: theme.primaryColor,
  },
  button: {
    padding: 10,
    backgroundColor: theme.primaryColor,
    color: theme.neutralColor,
  },
});

export default style;
