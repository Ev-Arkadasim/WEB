import React from "react";
import { View, Text, Image, Pressable, StatusBar } from "react-native";

const StartPage = ({ navigation }) => {
  return (
    <View className="flex-1 text-center items-center justify-center gap-y-10">
      <View className="w-auto">
        <Image
          resizeMode="contain"
          source={require("../../assets/startpage/pngwing1.png")}
        />
      </View>
      <View className="w-full flex flex-col gap-12 items-center">
        <Pressable
          className="w-1/2 bg-[#4E9678] items-center py-3 border-solid border border-[#4E9678] rounded-full active:bg-white active:border active:border-solid active:border-[#4E9678] "
          style={{
            shadowColor: "black",
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 0,
            shadowOpacity: 0.2,
            elevation: 15,
          }}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text className="text-xl italic ">LOGIN</Text>
        </Pressable>
        <Pressable
          className="w-1/2 bg-[#4E9678] items-center py-3 border-solid border border-[#4E9678] rounded-full active:bg-white active:border active:border-solid active:border-[#4E9678] "
          onPress={() => navigation.navigate("RegisterPage")}
          style={{
            shadowColor: "black",
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 0,
            shadowOpacity: 0.2,
            elevation: 15,
          }}
        >
          <Text className="text-xl italic ">REGISTER</Text>
        </Pressable>
      </View>
      <StatusBar backgroundColor="darkgray" />
    </View>
  );
};

export default StartPage;
