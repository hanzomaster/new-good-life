import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import {
  BodyIcon,
  HomeIcon,
  MindIcon,
  ProfileIcon,
  SocialIcon,
} from "assets/svgs";

import Color from "~/constants/Color";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color["primary-orange"],
        tabBarInactiveTintColor: "#CBB8B1",
        tabBarInactiveBackgroundColor: Color["primary-backgroundColor"],
        tabBarActiveBackgroundColor: Color["primary-backgroundColor"],
        tabBarLabelStyle: {
          fontFamily: "Quicksand_500Medium",
          fontWeight: "normal",
          fontSize: 11,
          lineHeight: 21,
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarAccessibilityLabel: "Home",
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-2 border-t-primary-orange px-4 pt-2">
                <HomeIcon color={color} />
              </View>
            ) : (
              <HomeIcon color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="body"
        options={{
          tabBarAccessibilityLabel: "Body",
          tabBarLabel: "Hình thể",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-2 border-t-primary-orange px-4 pt-2">
                <BodyIcon color={color} />
              </View>
            ) : (
              <BodyIcon color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="mind"
        options={{
          tabBarAccessibilityLabel: "Mind",
          tabBarLabel: "Tâm trí",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-2 border-t-primary-orange px-4 pt-2">
                <MindIcon color={color} />
              </View>
            ) : (
              <MindIcon color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          tabBarAccessibilityLabel: "Social",
          tabBarLabel: "Kết nối",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-2 border-t-[#FF835C] px-4 pt-2">
                <SocialIcon color={color} />
              </View>
            ) : (
              <SocialIcon color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarAccessibilityLabel: "Profile",
          tabBarLabel: "Hồ sơ",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View className="border-t-2 border-t-primary-orange px-4 pt-2">
                <ProfileIcon color={color} />
              </View>
            ) : (
              <ProfileIcon color={color} />
            );
          },
        }}
      />
      <Tabs.Screen name="notification" options={{ href: null }} />
      <Tabs.Screen name="search" options={{ href: null }} />
    </Tabs>
  );
}
