import { useState } from 'react';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ForgotPasswordMember from './ForgotPasswordMember';
import LoginButton from './LoginButton';

export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Ev Arkadaşım</Text>
      <View style={styles.emailPasswordContainer}>
        <TextInput
          style={styles.mail}
          placeholder="Email"
          placeholderTextColor="#04495A"
        />
        <TextInput
          style={styles.password}
          placeholder="password"
          placeholderTextColor="#04495A"
          secureTextEntry={passwordVisible}
        />
      </View>
      <ForgotPasswordMember/>
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

  mail: {
    height: 50,
    margin: 12,
    marginBottom: 1,
    borderRadius: 6,
    padding: 10,
    textAlign: "left",
    backgroundColor: "#F5F5F5",
    
  },
  password: {
    borderRadius: 6,
    height: 50,
    margin: 12,
    padding: 10,
    marginBottom: 50,
    textAlign: "left",
    backgroundColor: "#F5F5F5",
    position: "relative",
    
  },
  emailPasswordContainer: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
  },
});
