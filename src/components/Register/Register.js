import { View, Text, Pressable, Alert, TextInput, Image } from "react-native";
import React from "react";

const Register = ({ navigation }) => {
  return (
    <View className="relative">
      <View className="absolute flex-1 items-center justify-end text-center w-full gap-y-20">
        <View className="w-[70%] flex gap-y-4">
          <View className="flex gap-y-8">
            <TextInput
              placeholder="name"
              className="w-full placeholder:italic placeholder:tracking-widest border-b border-black no-underline "
            />
            <TextInput
              placeholder="surname"
              className="w-full placeholder:italic placeholder:tracking-widest border-b border-black no-underline"
            />
            <TextInput
              placeholder="e-mail"
              className="w-full placeholder:italic placeholder:tracking-widest border-b border-black no-underline "
            />
            <TextInput
              placeholder="password"
              className="w-full placeholder:italic placeholder:tracking-widest border-b border-black no-underline"
            />
            <TextInput
              placeholder="password again"
              className="w-full placeholder:italic placeholder:tracking-widest border-b border-black no-underline "
            />
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
                Alert.alert(
                  "Ev Arkadaşım",
                  "Kayıt Oldunuz Lütfen Giriş Yapınız"
                );
                setTimeout(() => {
                  navigation.navigate("LoginPage");
                }, 1000);
              }}
            >
              <Text className="text-xl italic ">REGISTER</Text>
            </Pressable>
          </View>

          <View className="relative w-auto">
            <Image
              resizeMode="contain"
              className="fixed bottom-0 top-20"
              source={require("../../assets/spot.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
