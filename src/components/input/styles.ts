import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  Input: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: theme.secodaryColor,
    borderRadius: 6,
    fontSize: 20,
    fontWeight: "900",
    color: theme.primaryColor,
  },
  button: {
    backgroundColor: theme.primaryColor,
    color: theme.neutralColor,
    padding: 15,
    borderRadius: 8,
  },
});

export default style;
