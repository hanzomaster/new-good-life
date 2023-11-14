/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "~/app/_layout";
import HeartAndDate from "./HeartAndDate";

const RectangleCard = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          className="rounded-lg"
          source={require("assets/images/home/testpic.png")}
        />
        <View className="absolute bottom-2 left-4 rounded-xl bg-slate-900/40 bg-opacity-10 p-1">
          <Text className="text-white" style={styles().textFont}>
            21 phút
          </Text>
        </View>
      </View>

      <View className="mt-2">
        <Text className="text-white" style={styles().textFontSemiBold}>
          Thiền buổi sáng
        </Text>
        <HeartAndDate heart={22} date="11.02.2023" color="#DED5C6" />
      </View>
    </TouchableOpacity>
  );
};

export default RectangleCard;
