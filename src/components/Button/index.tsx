import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface buttonProps {
  title: string;
  btnclass: number;
  onPress: () => void;
}
import style from "./styles";

export default function Button({ title, onPress, btnclass }: buttonProps) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={btnclass === 1 ? style.btn : style.btn_err}
      >
        <Text style={btnclass === 1 ? style.text : style.text_err}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
