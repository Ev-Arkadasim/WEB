import { useState } from 'react';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
      <LoginButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F2F6",
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
    height: 40,
    margin: 12,
    marginBottom: 1,
    borderRadius: 10,
    padding: 10,
    textAlign: "left",
    backgroundColor: "#D2D2DB",
    borderColor: "#04495A",
    borderWidth: 2,
  },
  password: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    padding: 10,
    marginBottom: 50,
    textAlign: "left",
    backgroundColor: "#D2D2DB",
    position: "relative",
    borderColor: "#04495A",
    borderWidth: 2,
  },
  emailPasswordContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
  },
  forgotPasswordRegisterContainer:{
    position:'absolute',
    top:'60%',
    left:'10%'
  }
});
