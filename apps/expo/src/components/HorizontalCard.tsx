/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "~/app/_layout";

const HorizontalCard = () => {
  return (
    <TouchableOpacity>
      <View className="relative box-content">
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
        <Text
          className="text-base text-white"
          style={styles().textFontSemiBold}
        >
          Thiền buổi sáng
        </Text>
        <View className="flex flex-row items-baseline space-x-1">
          <Image source={require("assets/images/home/heart.png")} />
          <Text> </Text>
          <Text className="text-xs text-[#DED5C6]">22 &#8226; 11.02.2023</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
