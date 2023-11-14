/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

import { styles } from "../_layout";

export default function LandingPage2() {
  return (
    <SafeAreaView className="h-full w-full bg-[#7A9861]">
      <View className=" relative left-auto top-0 p-0">
        <Image
          className=" h-40 w-1/2 object-scale-down"
          source={require("assets/images/landingpage3/topleft.png")}
        />
      </View>

      <View className="relative right-0 flex-1 items-end">
        <Image
          className="object-fit h-auto w-auto scale-[.8]"
          source={require("assets/images/landingpage3/centerright.png")}
        />
      </View>

      <View className="absolute inset-x-0 ml-auto mr-auto mt-28 flex h-3/5 flex-col items-center justify-between align-baseline">
        <View className=" relative inset-x-0 mx-auto w-full items-center">
          <Text
            className=" font-quicksand h-auto w-2/3 flex-wrap text-center text-3xl text-[#FFFF]"
            style={styles().textFont}
          >
            BODY
          </Text>
        </View>

        <Text
          className="font-primary h-auto w-2/3 flex-wrap text-justify text-lg text-[#FFFF]"
          style={styles().textFont}
        >
          Cung cấp những bài tập rèn luyện thể chất và phương pháp ăn uống đủ
          dinh dưỡng cho cơ thể.
        </Text>

        <Image
          className=" relative h-fit w-fit scale-[.8]"
          source={require("assets/images/landingpage3/center.png")}
        />
      </View>

      <View className="inset-x-0 mb-0 items-center ">
        <Image
          className=" absolute mt-40 h-fit w-fit"
          source={require("assets/images/landingpage3/slider.png")}
        />
        <TouchableOpacity
          className="absolute z-10 mt-44 h-14 w-14 items-center justify-center rounded-full bg-[#FF835C]"
          onPress={() => router.push("/onboarding/landing3")}
        >
          <Image
            className=" relative h-fit w-fit "
            source={require("assets/images/landingpage3/arrow.png")}
          />
        </TouchableOpacity>
        <View>
          <Image
            className="h-auto w-auto scale-x-90"
            source={require("assets/images/landingpage3/bottom.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
