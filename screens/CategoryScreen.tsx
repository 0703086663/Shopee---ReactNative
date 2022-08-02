import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeImage from "../assets/home.png";

import { ButtonHref } from "../components/ButtonHref";

export const CategoryScreen = () => {
  const navigation = useNavigation();
  const [obj, setObj] = useState([
    { id: 1, name: "Thanh" },
    { id: 2, name: "Tai" },
    { id: 3, name: "Son" },
  ]);

  return (
    <View>
      <FlatList
        data={obj}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                "Detail" as never,
                {
                  item,
                } as never
              );
            }}
          >
            <View>
              <Text>{item.name}</Text>
              <Image style={{ width: 65, height: 64 }} source={HomeImage} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `${item.id}`}
      />
      {/* <Text>Category Screen Index</Text> */}
      <ButtonHref route={"Category"} />
    </View>
  );
};
parseInt;
