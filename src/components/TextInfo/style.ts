import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  infoText: {
    fontWeight: "bold",
    fontSize: 14,
    color: theme.primaryColor,
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    paddingHorizontal: 5,
    flexWrap: "wrap",
  },
  left: {
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 1,
  },
  right: {
    flexShrink: 1,
    alignItems: "flex-end",
    flexGrow: 1,
  },
});

export default style;
