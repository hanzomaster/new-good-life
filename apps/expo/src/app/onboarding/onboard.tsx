/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { Quicksand_500Medium, useFonts } from "@expo-google-fonts/quicksand";

import { styles } from "~/app/_layout";

export default function OnboardingLayout() {
  const [loaded] = useFonts({
    Quicksand_500Medium,
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView className="h-full w-full bg-[#FFF4ED]">
      <View className="relative left-auto top-0 p-0">
        <Image
          className="h-40 w-1/2 object-scale-down"
          source={require("assets/images/landingpage2/topleft.png")}
        />
      </View>

      <View className="relative right-0 flex-1 items-end">
        <Image
          className="object-fit h-auto w-auto scale-75"
          source={require("assets/images/landingpage2/centerright.png")}
        />
      </View>

      <View className="absolute inset-x-0 ml-auto mr-auto mt-24 flex h-3/5 flex-col items-center justify-between align-baseline">
        <Image
          className="relative h-fit w-fit scale-[.8]"
          source={require("assets/images/landingpage2/center.png")}
        />

        <View className="relative inset-x-0 mx-auto w-full items-center">
          <Text
            className="font-quicksand h-auto w-2/3 flex-wrap text-justify text-lg text-[#608144]"
            style={styles().textFont}
          >
            The good life - ứng dụng điện thoại sẽ đồng hành xây dựng Cuộc Sống
            Tốt Đẹp cùng bạn thông qua các nội dung về thể chất, dinh dưỡng, tâm
            lý và phát triển bản thân.
          </Text>
        </View>
      </View>

      <View className="inset-x-0 mb-0 items-center ">
        <Image
          className="absolute mt-40 h-fit w-fit"
          source={require("assets/images/landingpage2/slider.png")}
        />
        <TouchableOpacity
          className="absolute z-10 mt-44 h-14 w-14 items-center justify-center rounded-full bg-[#FF835C]"
          onPress={() => router.push("/onboarding/landing2")}
        >
          <Image
            className="relative h-fit w-fit "
            source={require("assets/images/landingpage2/arrow.png")}
          />
        </TouchableOpacity>
        <View>
          <Image
            className="h-auto w-auto scale-x-90 object-fill"
            source={require("assets/images/landingpage2/bottom.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
