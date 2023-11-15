/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "~/app/_layout";
import HeartAndDate from "./HeartAndDate";
import SearchBar from "./SearchBar";
import SuggestScrollView from "./SuggestScrollView";

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
  return (
    <View className="mt-4 h-full">
      <SearchBar />
      <SuggestScrollView suggest={suggest} />

      <ScrollView
        className=" flex w-full"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles().itemsWrap}>
          {food.map((item) => {
            return (
              <TouchableOpacity
                key={item.name}
                style={styles(2).singleItem}
                onPress={() => null}
              >
                <View className="self-center">
                  <Image className="h-40 w-40 rounded-lg" source={item.image} />

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
