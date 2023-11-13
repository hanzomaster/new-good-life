import { Text, View } from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";

const DetailsPage = () => {
  const { id }: { id: string } = useGlobalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: `Details #${id}`,
        }}
      />
      <Text>My Details for: {id}</Text>
    </View>
  );
};

export default DetailsPage;
