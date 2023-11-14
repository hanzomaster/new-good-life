/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../_layout";

export default function LandingPage3() {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full w-full bg-[#FFF4ED]">
      <View className=" relative right-0 top-0 items-end p-0">
        <Image
          className="h-auto w-1/2"
          source={require("assets/images/landingpage4/topright.png")}
        />
      </View>

      <View className="relative right-0 flex-1 items-start">
        <Image
          className="object-fit mt-5 h-auto w-auto"
          source={require("assets/images/landingpage4/centerleft.png")}
        />
      </View>

      <View className="absolute inset-x-0 ml-auto mr-auto mt-24 flex h-3/5 flex-col items-center justify-between align-baseline">
        <Image
          className=" relative h-fit w-fit scale-[.8]"
          source={require("assets/images/landingpage4/center.png")}
        />

        <View className=" relative inset-x-0 mx-auto flex h-1/3 w-full flex-col items-center justify-between">
          <Text
            className=" font-quicksand h-auto w-2/3 flex-wrap text-center text-2xl text-[#608144] "
            style={styles().textFont}
          >
            MIND
          </Text>
          <Text
            className=" font-quicksand h-auto w-2/3 flex-wrap text-justify text-lg text-[#608144] "
            style={styles().textFont}
          >
            Những bài học về tâm lý, hướng dẫn thiền, list âm nhạc giúp bạn có
            một tâm trí khỏe mạnh.
          </Text>
        </View>
      </View>

      <View className="inset-x-0 mb-0 items-center ">
        <Image
          className=" absolute mt-32 h-fit w-fit"
          source={require("assets/images/landingpage4/slider.png")}
        />
        <TouchableOpacity
          className="absolute z-10 mt-36 h-14 w-14 items-center justify-center rounded-full bg-[#FF835C]"
          onPress={() => router.replace("/home")}
        >
          <Image
            className=" relative h-fit w-fit "
            source={require("assets/images/landingpage2/arrow.png")}
          />
        </TouchableOpacity>
        <View>
          <Image
            className="h-auto w-auto"
            source={require("assets/images/landingpage4/bottom.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
