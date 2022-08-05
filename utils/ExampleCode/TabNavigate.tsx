// import { View, StyleSheet, FlatList, Image } from "react-native";
// import { useState } from "react";
// import { Product } from "./Product";
// import { Blog } from "../../../UserScreen/Body/Blog";
// import { Cart } from "../../../UserScreen/Body/Cart";
// import { Ionicons } from "@expo/vector-icons";

// import dress from "../../../../assets/dress.png";
// import beauty from "../../../../assets/beauty.png";
// import freeship from "../../../../assets/freeship.png";
// import house from "../../../../assets/house.png";
// import jewels from "../../../../assets/jewels.png";
// import like from "../../../../assets/like.png";
// import refund from "../../../../assets/refund.png";
// import sale from "../../../../assets/dress.png";
// import shoes from "../../../../assets/shoes.png";
// import voucher from "../../../../assets/voucher.png";

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// const Tab = createMaterialTopTabNavigator();

// export const ListProductsElement = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Product 01Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 100000,
//       buyCount: 1000,
//     },
//     {
//       id: 2,
//       name: "Product 02Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 150000,
//       buyCount: 2000,
//     },
//     {
//       id: 3,
//       name: "Product 03Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 200000,
//       buyCount: 3000,
//     },
//     {
//       id: 4,
//       name: "Product 04Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 250000,
//       buyCount: 4000,
//     },
//     {
//       id: 5,
//       name: "Product 05Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 300000,
//       buyCount: 5000,
//     },
//     {
//       id: 6,
//       name: "Product 06Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 350000,
//       buyCount: 6000,
//     },
//     {
//       id: 7,
//       name: "Product 07Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 400000,
//       buyCount: 7000,
//     },
//     {
//       id: 8,
//       name: "Product 08Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 450000,
//       buyCount: 8000,
//     },
//     {
//       id: 9,
//       name: "Product 09Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 500000,
//       buyCount: 9000,
//     },
//     {
//       id: 10,
//       name: "Product 10Product 01Product 01Product 01Product 01Product 01",
//       image: "",
//       price: 550000,
//       buyCount: 1000,
//     },
//   ]);
//   return (
//     <View style={styles.productsListContainer}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color }) => {
//             let size: number = 32;

//             if (route.name === "All") {
//               return (
//                 <Image
//                   source={like}
//                   resizeMode={"contain"}
//                   style={styles.tabImage}
//                 />
//               );
//             } else if (route.name === "ScanAndPay") {
//               return <Image source={voucher} style={styles.tabImage} />;
//             } else if (route.name === "Sale") {
//               return <Image source={sale} style={styles.tabImage} />;
//             } else if (route.name === "Freeship") {
//               return <Image source={freeship} style={styles.tabImage} />;
//             } else if (route.name === "Refund") {
//               return <Image source={refund} style={styles.tabImage} />;
//             } else if (route.name === "WomanClothes") {
//               return <Image source={dress} style={styles.tabImage} />;
//             } else if (route.name === "Beauty") {
//               return <Image source={beauty} style={styles.tabImage} />;
//             } else if (route.name === "House") {
//               return <Image source={house} style={styles.tabImage} />;
//             } else if (route.name === "Jewels") {
//               return <Image source={jewels} style={styles.tabImage} />;
//             } else if (route.name === "WomanShoes") {
//               return <Image source={shoes} style={styles.tabImage} />;
//             }
//           },
//           tabBarScrollEnabled: true,
//           tabBarActiveTintColor: "tomato",
//           tabBarInactiveTintColor: "gray",
//           tabBarIndicatorStyle: {
//             // backgroundColor: "green",
//             display: "none",
//           },
//           tabBarStyle: {
//             height: 100,
//           },
//           tabBarItemStyle: { width: 100 },
//           tabBarLabelStyle: { textTransform: "capitalize" },
//         })}
//       >
//         <Tab.Screen name="All" component={Cart} options={{ title: "Tất cả" }} />
//         <Tab.Screen
//           name="ScanAndPay"
//           component={Blog}
//           options={{ title: "Scan & Pay Voucher" }}
//         />
//         <Tab.Screen
//           name="Sale"
//           component={Cart}
//           options={{ title: "8.8 Siêu Sale Giảm 50%" }}
//         />
//         <Tab.Screen
//           name="Freeship"
//           component={Blog}
//           options={{ title: "Freeship Xtra" }}
//         />
//         <Tab.Screen
//           name="Refund"
//           component={Blog}
//           options={{ title: "Hoàn Xu Đơn Bất Kỳ" }}
//         />
//         <Tab.Screen
//           name="WomanClothes"
//           component={Blog}
//           options={{ title: "Thời Trang Nữ" }}
//         />
//         <Tab.Screen
//           name="Beauty"
//           component={Blog}
//           options={{ title: "Sắc Đẹp" }}
//         />
//         <Tab.Screen
//           name="House"
//           component={Blog}
//           options={{ title: "Nhà Cửa & Đời Sống" }}
//         />
//         <Tab.Screen
//           name="Jewels"
//           component={Blog}
//           options={{ title: "Phụ Kiện Và Trang Sức" }}
//         />
//         <Tab.Screen
//           name="WomanShoes"
//           component={Blog}
//           options={{ title: "Giày Dép Nữ" }}
//         />
//       </Tab.Navigator>
//       {/* <FlatList
//         contentContainerStyle={styles.flatList}
//         data={products}
//         numColumns={2}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={({ item }) => <Product product={item} />}
//       ></FlatList> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   productsListContainer: {
//     // flex: 1,
//     flexDirection: "row",
//     height: "100%",
//   },
//   flatList: {
//     alignItems: "center",
//     borderWidth: 5,
//     borderColor: "#f2f2f2",
//   },
//   tabImage: { height: 32, width: 32 },
// });
