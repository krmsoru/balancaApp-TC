import { StyleSheet } from "react-native";
import theme from "../../../styles/app";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.neutralColor,
    opacity: 0.9,
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.primaryColor,
  },
  subTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: theme.secodaryColor,
  },
  text: {
    fontSize: 20,
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
});

export default style;
