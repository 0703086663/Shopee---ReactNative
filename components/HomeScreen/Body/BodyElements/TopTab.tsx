import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const TopTab = () => {
  const item1Data = [
    { id: 1, name: "Nguyen Anh Tai" },
    { id: 2, name: "Nguyen Anh Tai" },
    { id: 3, name: "Nguyen Anh Tai" },
  ];
  const item2Data = [
    { id: 1, name: "Nguyen Tien Thanh" },
    { id: 2, name: "Nguyen Tien Thanh" },
    { id: 3, name: "Nguyen Tien Thanh" },
  ];
  const item3Data = [
    { id: 1, name: "Vu Nguyen Binh Giang" },
    { id: 2, name: "Vu Nguyen Binh Giang" },
    { id: 3, name: "Vu Nguyen Binh Giang" },
  ];
  const [flatListData, setFlatListData] = useState(item1Data);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setFlatListData(item1Data);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Text style={{ justifyContent: "flex-start" }}>List 01</Text>
              <AntDesign
                style={{ justifyContent: "flex-start" }}
                name="caretdown"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFlatListData(item2Data);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Text style={{ justifyContent: "flex-start" }}>List 02</Text>
              <AntDesign
                style={{ justifyContent: "flex-start" }}
                name="caretdown"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFlatListData(item3Data);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Text style={{ justifyContent: "flex-start" }}>List 03</Text>
              <AntDesign
                style={{ justifyContent: "flex-start" }}
                name="caretdown"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FlatList
        data={flatListData}
        numColumns={2}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
  },
  rowItemWrapper: {
    flex: 1,
    width: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
