import React from "react";
import { ScrollView } from "react-native";
import { NoticeCartUpdate } from "../../NoticeCartUpdate";

import { NoticeOptions } from "../../NoticeOptions";

export const Update = () => {
  return (
    <ScrollView
      style={{ flex: 1, marginTop: 5 }}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
    >
      <NoticeOptions
        icon={"shopify"}
        iconColor={"tomato"}
        title={"Cập nhật đơn hàng"}
        // badge={62}
      />
      <NoticeOptions
        icon={"wallet"}
        iconColor={"tomato"}
        title={"Ví người bán"}
        // badge={1}
      />
      <NoticeOptions
        icon={"location-arrow"}
        iconColor={"tomato"}
        title={"Kênh marketing"}
      />
      <NoticeCartUpdate title={"Cập nhật người bán"} badge={0} />
    </ScrollView>
  );
};
