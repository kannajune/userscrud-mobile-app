import { StyleSheet, StatusBar, placeholderTextColor } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
    fontSize: 14,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 12,
  },
  content: {
    fontSize: 32,
  },
  icon: {
    fontSize: 25,
    textAlign: "center",
  },
  formControl: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 18,
  },
  textAreaControl: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 18,
    height: 100,
    textAlignVertical: "top",
  },
});

export default Styles;
