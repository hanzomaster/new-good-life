/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="mx-5 mt-0 flex flex-row items-center rounded-lg border-2 border-[#FF835C33] bg-primary-backgroundColor px-3 py-1">
      <Image source={require("assets/images/physique/Icon.png")} />
      <TextInput
        placeholder="Tìm kiếm"
        className="w-full px-2 py-1 text-sm text-[#9B9B9B]"
      />
    </View>
  );
};

export default SearchBar;
