import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../style/stylesheet";

export default function ButtonComponent({ children }) {
  return (
    <TouchableOpacity
      style={styles.Btn}
      onPress={() => console.log("Você pressionou o botão")}
    >
      <Image
        style={styles.btnImage}
        source={require("../imagens/planeta.jpg")}
      />
      {children}
    </TouchableOpacity>
  );
}
