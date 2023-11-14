/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { Nutrition } from "~/components/Nutrition";
import { Physique } from "~/components/Physique";
import Color from "~/constants/Color";
import { classNames } from "~/utils/tailwind";
import { styles } from "../_layout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderTabBar = (props: any) => {
  const width = Dimensions.get("screen").width * 0.7;
  return (
    <TabBar
      {...props}
      renderLabel={({ route, focused }) => (
        <Text
          className={classNames(
            focused ? "text-primary-orange" : "text-[#9B9B9B]",
          )}
          style={[styles().textFontSemiBold, { fontSize: 18 }]}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: "#7A9861",
        height: 2,
        width: width * 0.3,
        left: (width / 2 - width * 0.3) / 2,
      }}
      style={{
        backgroundColor: Color["primary-backgroundColor"],
        width: width,
        justifyContent: "space-between",
        alignSelf: "flex-start",
        height: Dimensions.get("screen").height * 0.05,
        shadowColor: "white",
      }}
    />
  );
};

const Body = () => {
  const FirstRoute = () => <Physique />;
  const SecondRoute = () => <Nutrition />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Thể chất" },
    { key: "second", title: "Dinh dưỡng" },
  ]);

  const layout = useWindowDimensions();

  return (
    <View className="h-full w-full bg-primary-backgroundColor">
      <View>
        <Image
          className="min-w-full"
          source={require("assets/images/physique/header.png")}
        />
        <View className="absolute inset-x-0 mt-16 items-center">
          <Text
            className="text-2xl text-white"
            style={styles().textFontSemiBold}
          >
            Hình thể
          </Text>
        </View>
        <TouchableOpacity
          className="absolute right-10 top-20"
          onPress={() => null}
        >
          <Image source={require("assets/images/physique/expand.png")} />
        </TouchableOpacity>
      </View>

      <Animated.View style={{ flex: 1 }}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, height: layout.height }}
        />
      </Animated.View>
    </View>
  );
};

export default Body;
