import { StyleSheet, View, Text, Image } from "react-native";
import home from "../../../../assets/home.png";
import {
  Foundation,
  AntDesign,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const NoticeOptions = () => {
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentTitleWrapper}>
            <Text style={styles.contentTitle}>TITLE 01</Text>
          </View>
          <View style={styles.contentTextWrapper}>
            <Text style={styles.contentText}>Dit me may test</Text>
          </View>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
      {/* Section 2 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentTitleWrapper}>
            <Text style={styles.contentTitle}>TITLE 01</Text>
          </View>
          <View style={styles.contentTextWrapper}>
            <Text style={styles.contentText}>Dit me may test</Text>
          </View>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
      {/* Section 3 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentTitleWrapper}>
            <Text style={styles.contentTitle}>TITLE 01</Text>
          </View>
          <View style={styles.contentTextWrapper}>
            <Text style={styles.contentText}>Dit me may test</Text>
          </View>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
      {/* Section 4 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentTitleWrapper}>
            <Text style={styles.contentTitle}>TITLE 01</Text>
          </View>
          <View style={styles.contentTextWrapper}>
            <Text style={styles.contentText}>Dit me may test</Text>
          </View>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 5,
    flex: 1,
  },
  optionRowWrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconWrapper: {
    flex: 1 / 8,
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 6 / 8,
    justifyContent: "center",
    flexDirection: "column",
  },
  content: {},
  arrowWrapper: {
    flex: 1 / 8,
    flexDirection: "row",
    alignItems: "center",
  },
  redNumberWrapper: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  redNumber: {
    backgroundColor: "tomato",
    color: "white",
    borderRadius: 10,
    justifyContent: "center",
    padding: 2,
    fontSize: 12,
  },
  arrow: { flex: 1, justifyContent: "center" },
  contentTitleWrapper: {
    flex: 1,
  },
  contentTitle: {
    fontWeight: "600",
  },
  contentTextWrapper: {
    flex: 1,
  },
  contentText: {},
});
