import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const HeaderIcons = (props: any) => {
  const navigation = useNavigation();
  const { iconColor } = props;
  return (
    <View style={styles.row}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CartScreen' as any);
          }}
        >
          <Badge value="6" status="error" containerStyle={styles.badgeIcon} />
          <Ionicons
            style={styles.iconTopRight}
            name={"cart-outline"}
            size={28}
            color={iconColor}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Badge value="53" status="error" containerStyle={styles.badgeIcon} />
        <Ionicons
          style={styles.iconTopRight}
          name={"md-chatbubbles-outline"}
          size={28}
          color={iconColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconTopRight: { paddingLeft: 10 },
  badgeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    zIndex: 1,
  },
  row: { flexDirection: "row" },
});
