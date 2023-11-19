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
    backgroundColor: theme.thirdaryColor,
    paddingVertical: 10,
    flexShrink: 1,
    flexGrow: 1,
    elevation:3

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
});

export default style;
