/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, Text, View } from "react-native";

const HeartAndDate = ({
  heart,
  date,
  color,
}: {
  heart: number;
  date: string;
  color: string;
}) => {
  return (
    <View className="flex flex-row items-baseline space-x-1">
      <Image source={require("assets/images/home/heart.png")} />
      <Text> </Text>
      <Text className={`text-xs`} style={{ color: color }}>
        {heart} &#8226; {date}
      </Text>
    </View>
  );
};

export default HeartAndDate;
