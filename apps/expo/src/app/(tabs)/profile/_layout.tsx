/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

import { styles } from "~/app/_layout";

const options = [
  {
    name: "Gần đây",
    image: require("assets/images/profile/recent.png"),
  },
  {
    name: "Yêu thích",
    image: require("assets/images/profile/heart.png"),
  },
  {
    name: "Đã lưu",
    image: require("assets/images/profile/save.png"),
  },
  {
    name: "Nhóm",
    image: require("assets/images/profile/group.png"),
  },
  {
    name: "Checkin",
    image: require("assets/images/profile/checkin.png"),
  },
  {
    name: "Chính sách bảo mật",
    image: require("assets/images/profile/security.png"),
  },
  {
    name: "Đăng xuất",
    image: require("assets/images/profile/logout.png"),
  },
];

const profile = () => {
  return (
    <SafeAreaView className="absolute inset-0 box-content w-screen bg-[#FFF4ED]">
      <View className="absolute inset-x-0" style={{ alignItems: "center" }}>
        <Image
          className="h-auto max-w-full object-cover"
          source={require("assets/images/profile/header.png")}
        />
        <View className="absolute flex flex-row" style={{ marginTop: "25%" }}>
          <View className="box-content h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-slate-50">
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
              className="text-2xl text-[#FFFFFF]"
              style={styles().textFontSemiBold}
            >
              Trang
            </Text>
            <TouchableOpacity
              onPress={() => <Redirect href={"/(tabs)/profile/information"} />}
              className=""
            >
              <Text
                className="text-sm text-[#FFFFFF]"
                style={styles().textFont}
              >
                Xem và sửa thông tin của bạn!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        className="inset-x-0 mt-60 "
        showsVerticalScrollIndicator={false}
      >
        <View className="" style={styles().itemsWrap}>
          {options.map((item) => {
            return (
              <View
                className="z-50 mt-5 justify-center"
                style={styles(1).singleItem}
                key={item.name}
              >
                <TouchableOpacity
                  className=" flex flex-row items-baseline space-x-6"
                  onPress={() => {
                    switch (item.name) {
                      case "Gần đây":
                        <Redirect href={"/(tabs)/profile/recent"} />;
                        break;
                      case "Yêu thích":
                        <Redirect href={"/(tabs)/profile/love"} />;
                        break;
                      case "Đã lưu":
                        <Redirect href={"/(tabs)/profile/save"} />;
                        break;
                      case "Nhóm":
                        break;
                      case "Checkin":
                        <Redirect href={"/(tabs)/profile/checkin"} />;
                        break;
                      case "Chính sách bảo mật":
                        <Redirect href={"/(tabs)/profile/security"} />;
                        break;
                      case "Đăng xuất":
                        console.log("logout");
                        break;
                      default:
                        break;
                    }
                  }}
                >
                  <Image className="h-auto object-cover" source={item.image} />
                  <Text
                    className=" font-quicksand ml-10 text-lg text-[#5A2D22] "
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

export default profile;
