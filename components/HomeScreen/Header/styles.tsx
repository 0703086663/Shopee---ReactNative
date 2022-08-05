import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: "column",
    flex: 2,
    backgroundColor: "#f19a6f",
  },
  wrapper: {
    flex: 1 / 4,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    flex: 4 / 5,
    backgroundColor: "white",
    borderRadius: 5,
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
  carouselContainer: {
    flex: 3 / 4,
  },
  carousel: {
    height: "100%",
    width: "100%",
  },
  badgeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    zIndex: 1,
  },
});
