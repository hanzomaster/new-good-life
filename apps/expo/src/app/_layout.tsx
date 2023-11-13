import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts as useQuickSandFont,
} from "@expo-google-fonts/quicksand";
import { FontAwesome } from "@expo/vector-icons";

import { TRPCProvider } from "~/utils/api";

import "../styles.css";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const { width } = Dimensions.get("window");
const gap = 12;
const itemPerRow = 2;
const windowWidth = width;
export const styles = (props?: number) =>
  StyleSheet.create({
    textFont: {
      fontFamily: "Quicksand_500Medium",
    },
    textFontBold: {
      fontFamily: "Quicksand_700Bold",
    },
    textFontSemiBold: {
      fontFamily: "Quicksand_600SemiBold",
    },

    itemsWrap: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginVertical: -(gap / 2),
      marginHorizontal: -(gap / 2),
    },
    singleItem: {
      marginHorizontal: gap / 2,
      marginVertical: gap / 2,

      minWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / (props ?? 1),
      maxWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / (props ?? 1),
    },

    singleItemCloser: {
      marginHorizontal: 0,
      marginVertical: 0,

      minWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / (props ?? 1),
      maxWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / (props ?? 1),
    },

    GridHorizontal: {
      marginHorizontal: 0,
      marginVertical: 0,

      // minWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / 3,
      // maxWidth: (windowWidth - (itemPerRow - 1) * gap - gap * 4) / 3,
    },
  });

// This is the main layout of the app
// It wraps your pages with the providers they need
function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });
  const [loadedFont, fontError] = useQuickSandFont({
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
    if (fontError) throw fontError;
  }, [error, fontError]);

  useEffect(() => {
    if (loaded && loadedFont) {
      SplashScreen.hideAsync();
    }
  }, [loaded, loadedFont]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <TRPCProvider>
      {/*
        The Stack component displays the current page.
        It also allows you to configure your screens
      */}
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar hidden={false} networkActivityIndicatorVisible={true} />
    </TRPCProvider>
  );
}

export default RootLayout;
