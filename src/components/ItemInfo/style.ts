import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  itemTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: theme.primaryColor,
    paddingHorizontal: 10,
  },

  itemSubTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: theme.secodaryColor,
    paddingHorizontal: 10,
  },

  item: {
    flex: 1,
    borderRadius: 12,
    borderColor: theme.primaryColor,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: theme.neutralColor,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.primaryColor,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  infoText: {
    fontWeight: "bold",
    fontSize: 14,
    color: theme.neutralColor,
    flexWrap: "wrap"
  },
});

export default style;
