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

const food = [
  {
    name: "Súp bí đỏ",
    image: require("assets/images/nutrition/img1.png"),
    heart: 2,
    date: "11.02.2023",
  },
  {
    name: "Sinh tố dâu",
    image: require("assets/images/nutrition/img2.png"),
    heart: 20,
    date: "11.02.2023",
  },
  {
    name: "Bánh plan",
    image: require("assets/images/nutrition/img4.png"),
    heart: 10,
    date: "11.02.2023",
  },
  {
    name: "Cốm",
    image: require("assets/images/nutrition/img3.png"),
    heart: 52,
    date: "11.02.2023",
  },
];

const suggest = [
  {
    name: "Gợi ý",
  },
  {
    name: "Món chính",
  },
  {
    name: "Bữa sáng",
  },
  {
    name: "Ăn nhẹ",
  },
];

export const Nutrition = () => {
  const [selectedSuggest, setSelectedSuggest] = useState<string[]>([]);
  const updateSelectedSuggest = (item: string) => {
    const copyArray = [...selectedSuggest];
    copyArray.push(item);
    setSelectedSuggest(copyArray);
  };
  return (
    <View className="mt-4 h-full">
      <View className="mx-5 mt-0 flex flex-row items-center rounded-lg border-2 border-[#FF835C33] bg-primary-backgroundColor px-3 py-1">
        <Image source={require("assets/images/nutrition/Icon.png")} />
        <TextInput
          placeholder="Tìm kiếm"
          className="px-2 py-1 text-sm text-[#9B9B9B]"
        />
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View className="ml-6 flex flex-row gap-4 py-9">
          {suggest.map((item) => {
            return (
              <View
                key={item.name}
                className={classNames(
                  selectedSuggest.includes(item.name)
                    ? "bg-[#7A9861]"
                    : "bg-white",
                  "h-14 w-fit items-center justify-center rounded-xl p-4",
                )}
              >
                <TouchableOpacity
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
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <ScrollView
        className="-mt-2"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="ml-9" style={styles().itemsWrap}>
          {food.map((item) => {
            return (
              <TouchableOpacity
                key={item.name}
                style={styles(2).singleItem}
                onPress={() => null}
              >
                <View className="w-40">
                  <Image className="h-40 w-40 rounded-lg" source={item.image} />
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
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="h-4" />
      </ScrollView>
    </View>
  );
};