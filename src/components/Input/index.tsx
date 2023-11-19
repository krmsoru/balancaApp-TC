import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface buttonProps {
  title: string;
  onChangeText: (evt:Event) => {};
  onPress: () => void;
}
import style from "./styles";

export default function Input({ title, onChangeText, onPress }: buttonProps) {
  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        placeholder={title}
        onChangeText={(evt) => onChangeText}
      />
      <TouchableOpacity onPress={onPress} style={style.button}>
        <FontAwesome name="search" size={style.Input.fontSize*1.5} color={style.button.color} />
      </TouchableOpacity>
    </View>
  );
}
