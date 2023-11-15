/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";

import SignInWithOAuth from "~/components/SignInWithOAuth";
import { styles } from "../_layout";

const SignIn = () => {
  const isLoaded = null;
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));
    // if (!isLoaded) {
    //   return;
    // }

    try {
      router.replace("/(tabs)/home");
    } catch (err: any) {
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <View className="min-h-full bg-[#FFF4ED]">
      <Image
        className="absolute"
        source={require("assets/images/signin/Vector.png")}
      />
      <View className="mt-[40%] px-6">
        <Text
          className="mb-10 text-4xl font-bold text-[#5A2D22]"
          style={styles().textFontBold}
        >
          Đăng nhập
        </Text>
        <View className="flex flex-col gap-5">
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex flex-row items-center rounded-md bg-white px-5 py-1">
                  <Image source={require("assets/images/signin/Message.png")} />
                  <TextInput
                    placeholder="Email"
                    className="w-full px-3 py-2 text-inherit focus:outline-none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles().textFont}
                  />
                </View>
              )}
              name="email"
              rules={{ required: true }}
            />
            {errors.email && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Vui lòng nhập vào trường này
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex flex-row items-center justify-between rounded-md bg-white px-5 py-1">
                  <View className="flex flex-row items-center">
                    <Image source={require("assets/images/signin/Frame.png")} />
                    <TextInput
                      placeholder="Password"
                      className="w-full px-3 py-2 text-inherit focus:outline-none"
                      secureTextEntry={!showPassword}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      style={styles().textFont}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-0 mr-5"
                  >
                    <Image source={require("assets/images/signin/Group.png")} />
                  </TouchableOpacity>
                </View>
              )}
              name="password"
              rules={{
                required: true,
              }}
            />
            {errors.password && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Vui lòng nhập vào trường này
              </Text>
            )}
          </View>

          <TouchableOpacity onPress={() => router.push("/auth/ForgotPassword")}>
            <Text className="text-[#FF8669]" style={styles().textFontSemiBold}>
              Quên mật khẩu
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row">
            <Text
              className="text-sm font-semibold text-[#A5A5A5]"
              style={styles().textFont}
            >
              Bạn chưa có tài khoản?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/SignUp")}>
              <Text
                className="text-sm font-semibold text-[#ff835c]"
                style={styles().textFont}
              >{` Đăng ký?`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className="mx-12 mt-8 flex rounded-full bg-[#FF8669] py-5"
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            className="m-auto self-center text-xl text-white"
            style={styles().textFontSemiBold}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>

        <View className="inset-x-0 my-8">
          <Image
            className="max-w-full object-cover"
            source={require("assets/images/signin/Group_37198.png")}
          />
        </View>
        <SignInWithOAuth />
      </View>
    </View>
  );
};

export default SignIn;
