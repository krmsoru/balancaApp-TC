import theme from "../../styles/app";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.neutralColor,
    elevation: 20,
    margin: 4,
    flex: 1,
    borderRadius: 12,
    borderColor: theme.primaryColor,
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title_text: {
    color: theme.primaryColor,
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:4
  },
  inner_text: {},
  left: { alignItems: "flex-start", padding: 4 },
  right: { alignItems: "flex-end", padding: 4 },
});

export default style;
