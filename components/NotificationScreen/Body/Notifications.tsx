import { StyleSheet, ScrollView, Text, Image } from "react-native";
import { NoticeOptions } from "../../NoticeOptions";
import { NoticeCartUpdate } from "../../NoticeCartUpdate";

export const Notifications = () => {
  return (
    <ScrollView
      style={{ flex: 1, marginTop: 5 }}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
    >
      <NoticeOptions
        icon={"salesforce"}
        iconColor={"#ffb640"}
        title={" Khuyến mãi"}
        desc={"zyxel ơi,"}
        badge={62}
      />
      <NoticeOptions
        icon={"camera-retro"}
        iconColor={"green"}
        title={"Shopee Live & Feed"}
        desc={
          "Xem bài đăng của chenglovehairs: Tèn ten kết quả là người được sale"
        }
        badge={1}
      />
      <NoticeOptions
        icon={"bell"}
        iconColor={"darkgreen"}
        title={"Hoạt động"}
      />
      <NoticeOptions
        icon={"shopping-basket"}
        iconColor={"tomato"}
        title={"Cập nhật Shopee"}
      />
      <NoticeOptions
        icon={"gift"}
        iconColor={"darkblue"}
        title={"Giả Thưởng Shopee"}
        desc={"Ưu đãi chỉ Quà Tặng Shopee mới có"}
        badge={10}
      />
      <NoticeCartUpdate title="Cập nhật Shopee" badge={5} />
    </ScrollView>
  );
};
