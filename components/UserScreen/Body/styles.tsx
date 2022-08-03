import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: "100%",
  },
  container: {
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  notificationContainer: {
    flexDirection: "row",
    margin: 5,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
  },
  notificationIcon: {
    justifyContent: "center",
    padding: 5,
  },
  notificationMsg: {
    padding: 5,
    fontSize: 12,
    width: "50%",
  },
  body: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  text: {
    // flexDirection: "row",
  },
});
