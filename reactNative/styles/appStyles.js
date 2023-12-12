import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    margin: 0,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly"
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "tomato",
    width: 350,
    borderRadius: 3,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  listView: {
    flex: 1,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default styles;
