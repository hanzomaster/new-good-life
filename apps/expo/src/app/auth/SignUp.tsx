/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";

import { styles } from "../_layout";

const SignUp = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));

    // if (!isLoaded) {
    //   return;
    // }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(
        "Vui lòng nhập mật khẩu có ít nhất 8 kí tự, trong đó có ít nhất một kí tự đặc biệt !!!",
      );
      console.log("Error:> " + err?.status || "");
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute">
        <Image source={require("assets/images/signin/Vector.png")} />
      </View>
      <View className=" mt-20 flex flex-row justify-between px-6">
        <TouchableOpacity>
          <Image source={require("assets/images/signin/Mask.png")} />
        </TouchableOpacity>
        <View className="flex flex-row">
          <Text
            className="text-sm font-semibold text-[#A5A5A5]"
            style={styles().textFont}
          >
            Bạn đã có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => router.replace("/auth/SignIn")}>
            <Text
              className="text-sm font-semibold text-[#ff835c]"
              style={styles().textFont}
            >{` Đăng nhập?`}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-24 px-6">
        <Text
          className="mb-10 text-xl font-bold text-[#5A2D22]"
          style={styles().textFontBold}
        >
          Đăng ký
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
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Mật khẩu phải có ít nhất 8 ký tự, chữ hoa, chữ thường, số và ký tự đặc biệt",
                },
              }}
            />
            {errors.password && errors.password?.type === "required" && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                Vui lòng nhập vào trường này
              </Text>
            )}
            {errors.password && errors.password?.type === "pattern" && (
              <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                {errors.password?.message}
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
                      placeholder="Nhập lại mật khẩu"
                      className="w-full px-3 py-2 text-inherit focus:outline-none"
                      secureTextEntry={!showRepeatPassword}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      style={styles().textFont}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setShowRepeatPassword(!showRepeatPassword);
                    }}
                    className="absolute right-0 mr-5"
                  >
                    <Image
                      source={require("assets/images/signin/Group.png")}
                      className=""
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="repeatPassword"
              rules={{
                required: true,
                validate: (value) => value === watch("password"),
              }}
            />

            {errors.repeatPassword &&
              errors.repeatPassword.type === "required" && (
                <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                  Vui lòng nhập vào trường này
                </Text>
              )}

            {errors.repeatPassword &&
              errors.repeatPassword.type === "validate" && (
                <Text className="mt-2 text-[#A5A5A5]" style={styles().textFont}>
                  Mật khẩu không khớp
                </Text>
              )}
          </View>
        </View>
        <TouchableOpacity
          className="mx-8 mt-10 rounded-full bg-[#FF8669] py-3"
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            className="m-auto text-base text-white"
            style={styles().textFont}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>

      <View className="inset-x-0 mt-10 flex flex-col">
        <View className="mt-10 flex flex-row justify-center">
          <TouchableOpacity>
            <Text
              className="text-sm text-[#BABABA] underline"
              style={styles().textFont}
            >
              Chính sách bảo mật
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex flex-row justify-center">
          <TouchableOpacity>
            <Text
              className="text-sm text-[#BABABA] underline"
              style={styles().textFont}
            >
              Điều khoản sử dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
