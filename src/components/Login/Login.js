import { View, Text, Pressable, Alert, TextInput, Image } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center text-center w-full gap-y-20">
      <View className="w-[70%] flex gap-y-4">
        <View className="flex gap-y-8">
          <TextInput
            placeholder="e-mail"
            className="w-full placeholder:italic placeholder:tracking-widest border-b border-gray-400 no-underline "
          />
          <TextInput
            placeholder="password"
            className="w-full placeholder:italic placeholder:tracking-widest border-b border-black no-underline"
          />
        </View>
        <View>
          <Text className="absolute right-0 text-[#4E9678]">
            Forgot Password?
          </Text>
        </View>
      </View>
      <View className="flex w-full items-center">
        <View className="w-full items-center">
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
              Alert.alert("Ev Arkadaşım", "Giriş Başarılı");
              setTimeout(() => {
                navigation.navigate("HomePage");
              }, 1000);
            }}
          >
            <Text className="text-xl italic ">LOGIN</Text>
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

export default Login;
