import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  input: {
    borderBottomWidth: 4,
    borderRadius: 8,
    borderColor: theme.secodaryColor,
    fontSize: 20,
    fontWeight: "500",
  },
  button: {
    color: theme.neutralColor,
  },
});

export default style;
