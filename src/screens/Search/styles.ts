import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  input: {
    borderBottomWidth: 4,
    borderRadius: 8,
    borderColor: theme.secodaryColor,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "60%",
  },
  button: {
    padding: 15,
    backgroundColor: theme.primaryColor,
    borderRadius: 8,
    alignItems: "center",
    tintColor: theme.neutralColor,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: theme.secodaryColor,
    textAlign: "center",
  },
});

export default style;
