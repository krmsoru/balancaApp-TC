import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: theme.neutralColor,
  },
  Title: {
    flex: 1,
    backgroundColor: theme.neutralColor,
  },
  TitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
    color: theme.secodaryColor,
  },

  innerItemText: {
    color: theme.secodaryColor,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default style;
