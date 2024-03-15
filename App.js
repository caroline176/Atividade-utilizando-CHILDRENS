import { View, Text } from "react-native";
import { styles } from "./src/assets/style/stylesheet.js";
import Login from "./src/assets/pages/Login.js";
import ButtonComponent from "./src/assets/components/ButtonComponent.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <ButtonComponent>
        <Text style={styles.botao}>Botão</Text>
      </ButtonComponent>
    </View>
  );
}
