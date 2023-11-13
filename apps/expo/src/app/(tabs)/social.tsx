import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const social = () => {
  return (
    <View>
      <FontAwesome.Button name="facebook-f" backgroundColor={"#3b5998"}>
        Login with Facebook
      </FontAwesome.Button>
    </View>
  );
};

export default social;
