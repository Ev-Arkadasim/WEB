import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function LoginButton(props:any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text  style={styles.buttonText}>
          {props.message}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    display: "flex",
    marginTop: 70,
  },
  button: {
    height: 40,
    borderRadius: 10,
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