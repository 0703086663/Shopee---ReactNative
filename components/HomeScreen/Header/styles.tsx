import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1.5,
    // backgroundColor: "#f19a6f",
  },
  wrapper: {
    paddingTop: 50,
    flex: 1 / 4,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    flex: 4 / 5,
    backgroundColor: "white",
    borderRadius: 2,
    height: "80%",
  },
  searchBarIcon: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  topLeftActionContainer: {
    flexDirection: "row",
    flex: 1 / 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topLeftAction: {
    flex: 1,
    alignItems: "center",
  },
  badgeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    zIndex: 1,
  },
});
