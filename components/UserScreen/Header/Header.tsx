import React from "react";
import { View, Text, Image } from "react-native";

import { HeaderCSS } from "./HeaderCSS";
import Avatar from "../../../assets/avatar.png";

export const Header = () => {
  return (
    <View
      style={[
        HeaderCSS.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={HeaderCSS.top}>
        <Text>Top</Text>
      </View>
      <View style={HeaderCSS.body}>
        {/* <Image style={HeaderCSS.avatar} source={Avatar} /> */}
        <Text>Hello</Text>
      </View>
    </View>
  );
};
