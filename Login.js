import { ImageBackground } from "react-native";
import TxtComponent from "../components/TxtComponent";
import TxtComponent2 from "../components/TxtComponent2";
import TxtComponent3 from "../components/TxtComponent3";

export default function Login({ children }) {
  return (
    <ImageBackground>
      <TxtComponent />
      <TxtComponent2 />
      <TxtComponent3 />
      {children}
    </ImageBackground>
  );
}
