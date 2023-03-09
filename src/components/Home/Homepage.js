import React from "react";
import { View, Text, Image, Pressable, StatusBar } from "react-native";

const Homepage = ({ navigation }) => {
  return (
    <View className="flex-1 text-center items-center justify-center gap-y-10">
      <View className="w-auto">
        <Image
          resizeMode="contain"
          source={require("../../../assets/startpage/pngwing1.png")}
        />
      </View>
      <View className="w-full flex flex-col gap-12 items-center">
        <Pressable className="w-1/2 bg-[#4E9678] items-center py-3 rounded-full ">
          <Text
            className="text-xl italic font-inter"
            onPress={() => navigation.navigate("LoginPage")}
          >
            LOGIN
          </Text>
        </Pressable>
        <Pressable
          className="w-1/2 bg-[#4E9678] items-center py-3 rounded-full "
          onPress={() => navigation.navigate("RegisterPage")}
        >
          <Text className="text-xl italic font-inter">REGISTER</Text>
        </Pressable>
      </View>
      <StatusBar backgroundColor="darkgray" />
    </View>
  );
};

export default Homepage;
