import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center text-center gap-2">
      <Text className="text-4xl text-slate-500">Ev Arkadaşım</Text>
      <StatusBar style="auto" />
    </View>
  );
}
