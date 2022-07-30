import { useState } from 'react';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ForgotPasswordMember from './ForgotPasswordMember';
import LabelContainer from './labelContainer';
import LoginButton from './LoginButton';

export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Ev Arkadaşım</Text>
      <View style={styles.emailPasswordContainer}>
        <LabelContainer placeholder='email'/>
        <LabelContainer placeholder='password'/>
      </View>
      <View style={{ alignSelf: "flex-start" }}>
        <ForgotPasswordMember />
      </View>
      <LoginButton />
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
