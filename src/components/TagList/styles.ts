import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  container: {
    padding: 2,
    flex: 1,
  },
  item: {
    minHeight: 40,
    marginVertical: 4,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: theme.primaryColor,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: theme.primaryColor,
    textAlign: "center",
  },
});

export default style;
