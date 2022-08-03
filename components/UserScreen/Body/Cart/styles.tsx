import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Section 1
  rowIconWithText: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  rowTextBehindIcon: {
    paddingLeft: 10,
  },
  badge: {
    backgroundColor: "tomato",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    padding: 2,
    fontSize: 10,
    color: "white",
  },
  rowBigIconWithTextUnder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  bigIconTop: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  hr: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
  },
  textUnderIcon: {
    fontSize: 12,
  },
  // Section 2
  rowIconTextWithNav: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowIconTextWithNavLeft: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  rowAboveIcon: {
    paddingHorizontal: 10,
  },
  rowIconTextWithNavRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Boostrap
  secondaryText: {
    color: "grey",
    fontSize: 10,
  },
  textBadgeNoti: {
    color: "tomato",
    fontWeight: "bold",
  },
});
