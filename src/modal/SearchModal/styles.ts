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
  // -----------------------------------NOVO-------------------------------
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
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.primaryColor,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default style;
