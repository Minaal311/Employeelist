import { View, Image, Text } from "react-native";
import { Images } from "@/styles/ImagePath";
import { Colors } from "@/styles/Colors";

const NoDataComponent = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 250,
    }}
  >
    <Image source={Images.NO_HISTORY} />
    <Text
      style={{
        //   ...commonStyles.font4Bold,
        fontSize: 16,
        fontWeight: "500",
        color: Colors.appColorPrimary,
      }}
    >
      No data found.
    </Text>
  </View>
);

export default NoDataComponent;
