import { StyleSheet } from "react-native";
import theme from "../../styles/app";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.neutralColor,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: theme.neutralColor,
    paddingVertical: 10,
    flexShrink: 1,
    flexGrow: 1,
    elevation: 3,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
  },

  titleText: {
    padding: 10,
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    marginHorizontal: 20,
    color: theme.secodaryColor,
  },
  Text: {
    fontSize: 40,
    marginTop: 15,
    fontWeight: "bold",
    paddingVertical: 30,
    color: theme.primaryColor,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.thirdaryColor,
  },
  nutrients: {
    flexDirection: "row",
    backgroundColor: theme.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  item: {
    backgroundColor: theme.neutralColor,
    elevation: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.primaryColor,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default style;
