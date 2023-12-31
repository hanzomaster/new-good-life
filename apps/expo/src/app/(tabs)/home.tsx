/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import RectangleCard from "~/components/RectangleCard";
import SquareCard from "~/components/SquareCard";
import { getCurrentDateVn } from "~/utils/date";
import { styles } from "../_layout";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full w-full bg-primary-backgroundColor">
      <ScrollView>
        <View className="mt-5 flex flex-row justify-between px-4">
          <Text
            className="text text-2xl text-primary-textColor"
            style={styles().textFont}
          >
            The good life
          </Text>
          <View className="flex flex-row">
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/notification")}
            >
              <Image source={require("assets/images/home/noti.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className="ml-5"
                source={require("assets/images/home/message.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(tabs)/search")}>
              <Image
                className="ml-5"
                source={require("assets/images/home/search.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="inset-x-0 mt-9 flex flex-col items-center justify-between">
          <Image source={require("assets/images/home/center.png")} />
          <View className="inset-x-0 items-center">
            <Text
              className="text-2xl text-primary-textColor"
              style={styles().textFontSemiBold}
            >
              Chào bạn
            </Text>
            <Text
              className="text-md text-primary-textColor"
              style={styles().textFont}
            >
              Hãy đồng hành cùng với TGL mỗi ngày nhé !
            </Text>
          </View>
        </View>
        <View className="bottom-0 left-0 right-0 -z-10 w-full">
          <Image
            className="z-10 -mt-20 w-full"
            source={require("assets/images/home/flowerCtr.png")}
          />
          <Image
            className="absolute mt-5 w-full"
            source={require("assets/images/home/bottom.png")}
          />

          <View className="relative -mt-20 p-4 pb-0">
            <Text
              className="relative text-lg text-white"
              style={styles().textFontSemiBold}
            >
              {getCurrentDateVn()}
            </Text>
            <TouchableOpacity
              className="z-10 mt-10"
              onPress={() => router.push("/(tabs)/home")}
            >
              <View className="flex w-full flex-row gap-4">
                <View className="rounded-2xl bg-white">
                  <Image
                    className="m-2"
                    source={require("assets/images/home/neutral.png")}
                  />
                </View>
                <View>
                  <Text className="text-[#DED5C6]" style={styles().textFont}>
                    DAILY CHECK IN
                  </Text>
                  <Text
                    className="text-white"
                    style={styles().textFontSemiBold}
                  >
                    Hôm nay bạn cảm thấy thế nào?
                  </Text>
                  <Text className="text-[#DED5C6]" style={styles().textFont}>
                    Tạm ổn &#8226; 2 ngày trước
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View>
              <TouchableOpacity className="mt-10">
                <View className="flex w-full flex-row gap-4">
                  <View className="w-20 items-center rounded-2xl bg-white">
                    <Image
                      className="m-2"
                      source={require("assets/images/home/coffee.png")}
                    />
                  </View>
                  <View>
                    <Text className="text-[#DED5C6]" style={styles().textFont}>
                      SUGGESTED
                    </Text>
                    <Text
                      className="text-white"
                      style={styles().textFontSemiBold}
                    >
                      Gần đây
                    </Text>
                    <Text className="text-[#DED5C6]" style={styles().textFont}>
                      Thiền buổi sáng
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mx-4 mt-8">
          <View style={{ height: 1, backgroundColor: "#C4C4C4" }} />
        </View>

        <View className="mx-6 mt-4 flex flex-row items-baseline justify-between">
          <Text
            className="text-lg text-white"
            style={styles().textFontSemiBold}
          >
            Dành cho bạn
          </Text>
          <Text className="text-sm text-white" style={styles().textFont}>
            Xem thêm
          </Text>
        </View>

        <ScrollView horizontal className="mt-4 pb-4">
          <View className="relative ml-4 flex w-full flex-row gap-4">
            {Array.from(Array(3).keys()).map((i) => (
              <RectangleCard key={i} />
            ))}
          </View>
        </ScrollView>

        <View className="mx-6 mt-4 flex flex-row items-baseline justify-between">
          <Text
            className="text-lg text-white"
            style={styles().textFontSemiBold}
          >
            Nội dung mới
          </Text>
          <Text className="text-sm text-white" style={styles().textFont}>
            Xem thêm
          </Text>
        </View>

        <ScrollView horizontal className="mt-4 pb-4">
          <View className="relative ml-4 flex w-full flex-row gap-4">
            {Array.from(Array(3).keys()).map((i) => (
              <SquareCard key={i} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
