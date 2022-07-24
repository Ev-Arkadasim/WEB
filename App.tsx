import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [name,setName] = useState('mash')

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Vinc App</Text>
      <TextInput
        style={styles.mail}
        placeholder="Email"
        placeholderTextColor="#04495A"
      />
      <TextInput
        style={styles.password}
        placeholder="password"
        placeholderTextColor="#04495A"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
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
    fontSize: 50,
    fontFamily: "Cochin",
    bottom: 50,
  },
  button: {
    height: 30,
    width: 200,
    borderRadius: 10,
    borderColor: "#DDF1D5",
    borderWidth: 1.5,
    backgroundColor: "#008A62",
    alignItems: "center",
  },
  buttonText: {
    color: "#F1F2F6",
    fontSize: 20,
    fontWeight: "bold",
  },
  mail: {
    height: 40,
    margin: 12,
    width: "90%",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#D2D2DB",
  },
  password: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    width: "90%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 50,
    textAlign: "center",
    backgroundColor: "#D2D2DB",
  },
});
