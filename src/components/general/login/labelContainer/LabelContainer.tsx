import { StyleSheet, TextInput, View } from "react-native";


export default function LabelContainer(props:any) {
  return (
    <View>
      <TextInput
        style={styles.label}
        placeholder= {props.placeholder}
        placeholderTextColor="#04495A"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    height: 50,
    margin: 12,
    marginBottom: 1,
    borderRadius: 6,
    padding: 10,
    textAlign: "left",
    backgroundColor: "#F5F5F5",
  },
});