import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function LoginButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text  style={styles.buttonText}>
          Giriş Yap
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    display: "flex",
    marginTop: 20,
  },
  button: {
    height: 40,
    borderRadius: 10,
    borderColor: "#04495A",
    borderWidth: 1.5,
    backgroundColor: "#008A64",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F1F2F6",
    fontSize: 20,
    fontWeight: "bold",
    
  },
});