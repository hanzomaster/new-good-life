/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ImageSourcePropType } from "react-native";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { Route } from "expo-router";
import { Link, useRouter } from "expo-router";

import { styles } from "~/app/_layout";

const options: {
  name: string;
  image: unknown;
  url: Route<string>;
}[] = [
  {
    name: "Gần đây",
    image: require("assets/images/profile/recent.png"),
    url: "/(tabs)/profile/recent",
  },
  {
    name: "Yêu thích",
    image: require("assets/images/profile/heart.png"),
    url: "/(tabs)/profile/love",
  },
  {
    name: "Đã lưu",
    image: require("assets/images/profile/save.png"),
    url: "/(tabs)/profile/save",
  },
  {
    name: "Nhóm",
    image: require("assets/images/profile/group.png"),
    url: "/(tabs)/profile/group",
  },
  {
    name: "Checkin",
    image: require("assets/images/profile/checkin.png"),
    url: "/(tabs)/profile/checkin",
  },
  {
    name: "Chính sách bảo mật",
    image: require("assets/images/profile/security.png"),
    url: "/(tabs)/profile/security",
  },
  {
    name: "Đăng xuất",
    image: require("assets/images/profile/logout.png"),
    url: "/auth/SignIn",
  },
];

const Options = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="inset-0 h-full w-screen bg-primary-backgroundColor">
      <View className="absolute inset-x-0" style={{ alignItems: "center" }}>
        <Image
          className="h-auto w-full object-cover"
          source={require("assets/images/profile/header.png")}
        />
        <View className="absolute mt-[25%] flex flex-row gap-4">
          <View className="h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-slate-50">
            <Image
              className="relative object-cover"
              source={require("assets/images/profile/avatar.png")}
            />
          </View>
          {/* <View className="box-content h-10 w-10 rounded-full bg-black">
            <Image
              className="relative max-h-fit max-w-fit"
              source={require("../assets/images/profile/avatar.png")}
            />
          </View> */}

          <View style={{ justifyContent: "center" }} className="ml-5">
            <Text
              className="text-2xl text-white"
              style={styles().textFontSemiBold}
            >
              Trang
            </Text>
            <TouchableOpacity
              onPress={() => <Link href={"/(tabs)/profile/information"} />}
            >
              <Text className="text-sm text-white" style={styles().textFont}>
                Xem và sửa thông tin của bạn!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        className="inset-x-0 mt-[65%]"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles().itemsWrap}>
          {options.map((item) => {
            return (
              <View
                className="z-50 mt-5 justify-center"
                style={styles(1).singleItem}
                key={item.name}
              >
                <TouchableOpacity
                  className="flex flex-row items-baseline space-x-6"
                  onPress={() => router.push(item.url as `http${string}`)}
                >
                  <Image
                    className="h-auto object-cover"
                    source={item.image as ImageSourcePropType}
                  />
                  <Text
                    className="font-quicksand ml-10 text-lg text-primary-textColor"
                    style={styles().textFontBold}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <View className="h-0.5 bg-[#CACACA]"></View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
