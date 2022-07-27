import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ForgotPasswordMember() {
  return (
    <View>
      <TouchableOpacity style={styles.forgotPasswordRegisterContainer}>
        <Text style={styles.forgotPasswordButton}>Şifreni mi Unuttun?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  forgotPasswordRegisterContainer: {
    position: "absolute",
    bottom: 10,
    right: 30,
  },
  forgotPasswordButton: {
    color: "#0077C2",
    position: "relative",
    fontSize: 14.4,
  },
});