import { View, Text, Image, Pressable, TextInput, Alert } from "react-native";
import React from "react";

const ResetPasswordPage = () => {
  return (
    <View className="flex-1 items-center justify-center text-center w-full gap-y-2">
      <View className="flex w-[70%] items-center gap-y-8">
        <Text className="font-normal italic text-2xl">Reset Password</Text>
      </View>
      <View className="w-[70%] flex gap-y-4">
        <View className="flex gap-y-8">
          <TextInput
            placeholder="password"
            className="w-full placeholder:italic placeholder:tracking-widest border-b border-gray-400 no-underline "
          />
          <TextInput
            placeholder="confirm password"
            className="w-full placeholder:italic placeholder:tracking-widest border-b border-gray-400 no-underline "
          />
        </View>
        <View></View>
      </View>
      <View className="flex w-full items-center">
        <View className="w-full items-center top-6">
          <Pressable
            className="group w-1/2 bg-[#dce5df] border-2 border-solid border-[#4E9678] items-center py-3 rounded-full  active:bg-[#4E9678] active:transition-colors active:duration-1000"
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 0,
              shadowOpacity: 0.2,
              elevation: 15,
            }}
            onPress={() => {
              Alert.alert("Ev Arkadaşım", "Şifre Değiştirildi");
            }}
          >
            <Text className="text-xl italic">SUBMIT</Text>
          </Pressable>
        </View>

        <View className="relative w-auto">
          <Image
            resizeMode="contain"
            className="fixed top-full"
            source={require("../../assets/spot.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordPage;
