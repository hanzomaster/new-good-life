/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "~/app/_layout";
import HeartAndDate from "./HeartAndDate";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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
  const [selectedSuggest, setSelectedSuggest] = useState<string[]>([]);
  const updateSelectedSuggest = (item: string) => {
    const copyArray = [...selectedSuggest];
    copyArray.push(item);
    setSelectedSuggest(copyArray);
  };
  return (
    <View className="mt-4 h-full">
      <View className="mx-5 mt-0 flex flex-row items-center rounded-lg border-2 border-[#FF835C33] bg-primary-backgroundColor px-3 py-1">
        <Image source={require("assets/images/physique/Icon.png")} />
        <TextInput
          placeholder="Tìm kiếm"
          className="w-full px-2 py-1 text-sm text-[#9B9B9B]"
        />
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-6 flex h-full flex-row gap-4 py-9">
          {suggest.map((item) => {
            return (
              <TouchableOpacity
                className="h-20"
                key={item.name}
                onPress={() => {
                  if (selectedSuggest.includes(item.name)) {
                    setSelectedSuggest(
                      selectedSuggest.filter((i) => i !== item.name),
                    );
                  } else {
                    updateSelectedSuggest(item.name);
                  }
                }}
              >
                <View
                  className={classNames(
                    selectedSuggest.includes(item.name)
                      ? "bg-[#7A9861]"
                      : "bg-white",
                    "rounded-xl p-4",
                  )}
                >
                  <Text
                    className={classNames(
                      selectedSuggest.includes(item.name)
                        ? "text-white"
                        : "text-[#A5A5A5]",
                    )}
                    style={styles().textFontSemiBold}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

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
