import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "~/app/_layout";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SuggestScrollView = ({
  suggest,
}: {
  suggest: {
    name: string;
  }[];
}) => {
  const [selectedSuggest, setSelectedSuggest] = useState<string[]>([]);
  const updateSelectedSuggest = (item: string) => {
    const copyArray = [...selectedSuggest];
    copyArray.push(item);
    setSelectedSuggest(copyArray);
  };
  return (
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
  );
};
export default SuggestScrollView;
