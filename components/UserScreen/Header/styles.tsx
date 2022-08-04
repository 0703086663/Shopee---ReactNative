import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  topHeader: {
    flexDirection: "column",
    backgroundColor: "tomato",
    paddingTop: 50,
  },
  topLeftHeader: {
    flex: 1 / 3,
  },
  topLeftHeaderItems: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingLeft: 20,
    marginRight: 10,
    // paddingRight: -10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  topCenterHeader: {
    flex: 1 / 3,
  },
  tomatoText: { color: "tomato" },
  topRightHeader: {
    flexDirection: "row-reverse",
    flex: 1 / 3,
    paddingLeft: 10,
  },
  iconTopRight: { paddingLeft: 10 },
  badgeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    zIndex: 1,
  },
  bottomHeader: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
  },
  bottomLeftHeader: {
    paddingLeft: 20,
    flex: 1 / 6,
  },
  bottomRightHeader: {
    flex: 5 / 6,
    flexDirection: "column",
  },
  bottomRightName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomRightRoleBadge: {
    // justifyContent: "space-between",
    // flexDirection: "row",
    // flex: 1 / 4,
    // backgroundColor: "white",
    // paddingVertical: 1,
    // paddingHorizontal: 10,
    // borderRadius: 50,
    paddingLeft: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1 / 4,
    borderRadius: 50,
  },
  bottomRightRole: {
    color: "tomato",
    fontSize: 12,
  },
  bottomRightFollow: {
    color: "white",
    fontSize: 10,
  },
  bottomRightFollowNumber: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
