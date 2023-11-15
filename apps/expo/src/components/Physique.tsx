/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "~/app/_layout";
import HeartAndDate from "./HeartAndDate";
import SearchBar from "./SearchBar";
import SuggestScrollView from "./SuggestScrollView";

const video = [
  {
    name: "Pilates xx",
    image: require("assets/images/physique/img1.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Giãn cơ 20 phút",
    image: require("assets/images/physique/img2.png"),
    time: 21,
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Chạy",
    image: require("assets/images/physique/img3.png"),
    time: 21,
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Tập cơ tay",
    image: require("assets/images/physique/img4.png"),
    time: 20,
    heart: 52,
    date: "11.02.2023",
  },
  {
    name: "Má ",
    image: require("assets/images/physique/img4.png"),
    time: 20,
    heart: 52,
    date: "11.02.2023",
  },
];

const suggest = [
  {
    name: "Gợi ý",
  },
  {
    name: "Yoga",
  },
  {
    name: "Cardio",
  },
  {
    name: "Pilates",
  },
  {
    name: "Giãn cơ",
  },
];

export const Physique = () => {
  return (
    <View className="mt-4 h-full">
      <SearchBar />
      <SuggestScrollView suggest={suggest} />

      <ScrollView
        className="mt-6 flex w-full"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles().itemsWrap}>
          {video.map((item) => {
            return (
              <TouchableOpacity key={item.name} style={styles(2).singleItem}>
                <View className="w-40 self-center">
                  <View>
                    <Image
                      className="h-40 w-40 rounded-lg"
                      source={item.image}
                    />
                    <View className="absolute bottom-2 left-2 rounded-2xl bg-slate-900/40 bg-opacity-10 p-1">
                      <Text className="text-white" style={styles().textFont}>
                        {item.time} phút
                      </Text>
                    </View>
                    <Image
                      className="absolute bottom-2 right-2 h-6 w-6 rounded-2xl"
                      source={require("assets/images/physique/play.png")}
                    />
                  </View>
                  <View className="mt-2">
                    <Text className="text-[#5A2D22]" style={styles().textFont}>
                      {item.name}
                    </Text>
                    <HeartAndDate
                      heart={item.heart}
                      date={item.date}
                      color="#B2B2B2"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="h-4" />
      </ScrollView>
    </View>
  );
};
