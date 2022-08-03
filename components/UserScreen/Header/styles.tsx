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
    backgroundColor: "white",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  tomatoText: { color: "tomato" },
  topRightHeader: {
    flexDirection: "row-reverse",
    flex: 1,
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
    paddingRight: 10,
  },
  bottomRightHeader: {
    flexDirection: "column",
  },
  bottomRightName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomRightRoleBadge: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 50,
    flexDirection: "row",
    maxWidth: "50%",
    marginTop: 2,
    marginBottom: 2,
  },
  bottomRightRole: {
    color: "tomato",
    fontSize: 12,
  },
  bottomRightFollow: {
    color: "white",
    fontSize: 12,
  },
  bottomRightFollowNumber: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
