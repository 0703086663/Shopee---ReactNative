import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 65,
    flex: 1 / 4,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red", // white when scrolldown (notdone)
    zIndex: 1,
    position: "absolute",
    width: "100%",
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    flex: 4 / 5,
    backgroundColor: "white",
    borderRadius: 2,
    paddingVertical: 5,
  },
  searchBarIcon: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  topRightActionContainer: {
    flexDirection: "row",
    flex: 1 / 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
