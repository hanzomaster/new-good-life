/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image, TouchableOpacity, View } from "react-native";

const SignInWithOAuth = () => {
  return (
    <View className="flex flex-col gap-5">
      <TouchableOpacity>
        <Image
          className="w-full"
          source={require("assets/images/signin/Google.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          className="w-full"
          source={require("assets/images/signin/Facebook.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SignInWithOAuth;
