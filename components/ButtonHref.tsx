import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ButtonHref = (route: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title={"Go to " + route.route}
        onPress={() => {
          navigation.navigate(route.route);
        }}
      ></Button>
    </View>
  );
};
