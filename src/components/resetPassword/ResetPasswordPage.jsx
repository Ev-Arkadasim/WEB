import { StyleSheet, Text, View } from "react-native";
import ForgotPasswordMember from "../general/login/forgotPasswordButton/ForgotPasswordMember";
import LabelContainer from "../general/login/labelContainer/LabelContainer";
import LoginButton from "../general/login/loginButton/LoginButton";
import NextButton from "../general/login/nextButton/nextButton";
import RegisterButton from "../general/login/registerButton/registerButton";

export default function ResetPasswordPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Ev Arkadaşım</Text>
      <View style={styles.emailPasswordContainer}>
        <LabelContainer placeholder="email" />
      </View>
      <View style={{ alignSelf: "flex-start" }}>
      </View>
      <NextButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#DDF1D5",
    borderRadius: 10,
    marginTop: 35,
  },
  textColor: {
    color: "#04495A",
    fontWeight: "bold",
    height: 100,
    fontSize: 40,
    bottom: 50,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 7,
  },

  emailPasswordContainer: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
  },
});
