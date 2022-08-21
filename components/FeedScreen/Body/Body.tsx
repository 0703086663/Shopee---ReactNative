import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

import { RenderItem } from "./RenderItem";

export const Body = () => {
  const [dataList, setDataList] = useState([
    {
      userId: 1,
      userName: "Thanh`",
      id: 1,
      title: "lazadaaaaa",
      body: [{ userId: 1, comment: 'hehe' }, { userId: 1, comment: 'hoho' }]
    }, {
      userId: 2,
      userName: "Son",

      id: 2,
      title: "shoppeeeee",
      body: [{ userId: 1, comment: 'hahaaaaa' }]
    },]);

  // const getDataUsingSimpleGetCall = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(function (response) {
  //       setDataList(response.data);
  //     })
  //     .catch(function (error) {
  //       alert(error.message);
  //     });
  //   //   .finally(function () {
  //   //     // always executed
  //   //     alert("Finally called");
  //   //   });
  // };
  useEffect(() => {
    // getDataUsingSimpleGetCall();
    setDataList(dataList)
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataList}
        // numColumns={2}
        // keyExtractor={(item) => item}
        renderItem={({ item }) => <RenderItem data={item} />}
      />
    </View>
  );
};
