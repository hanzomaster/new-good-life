/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "~/app/_layout";
import HeartAndDate from "./HeartAndDate";

const SquareCard = () => {
  return (
    <TouchableOpacity>
      <View className="relative">
        <Image
          className="h-40 w-40 rounded-lg"
          source={require("assets/images/home/testnewcontentpic.png")}
        />
        <View className="absolute bottom-2 left-4 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1 ">
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
          Thiền buổi tối
        </Text>
        <HeartAndDate heart={22} date="11.02.2023" color="#DED5C6" />
      </View>
    </TouchableOpacity>
  );
};

export default SquareCard;
