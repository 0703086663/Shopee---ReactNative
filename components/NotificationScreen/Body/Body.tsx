import { StyleSheet, View, Text, Image } from "react-native";
import { NoticeOptions } from "./BodyElements/NoticeOptions";
import { NoticeCartUpdate } from "./BodyElements/NoticeCartUpdate";

export const Body = () => {
  return (
    <View style={{ flex: 1 }}>
      <NoticeOptions />
      <NoticeCartUpdate />
    </View>
  );
};
