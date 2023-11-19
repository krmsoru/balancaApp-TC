import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: theme.neutralColor,
  },
  Title: {
    flex: 1,
  },
  TitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
    color: theme.secodaryColor,
  },
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: theme.primaryColor,
  },
  item: {
    flex: 1,
    borderRadius: 6,
    padding: 20,
    borderColor: theme.primaryColor,
    marginBottom: 10,
    marginHorizontal: 2,
  },
  innerItem: {
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: theme.thirdaryColor,
    padding: 6,
    marginTop: 4,
    borderRadius: 6,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  innerItemText: {
    color: theme.secodaryColor,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default style;
