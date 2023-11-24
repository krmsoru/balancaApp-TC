import { View, Text, TouchableOpacity } from "react-native";

interface buttonProps {
  title?: string;
  btnclass?: number;
  onPress?: () => void;
  onLongPress?: () => void;

  disabled?: boolean;
}
import style from "./styles";

export default function Button({
  title = "Button",
  onPress,
  btnclass = 1,
  disabled = false,
  onLongPress,
}: buttonProps) {
  return (
    <View>
      <TouchableOpacity
        onLongPress={onLongPress}
        onPress={onPress}
        disabled={disabled}
        style={btnclass === 1 ? style.btn : style.btn_err}
      >
        <Text style={btnclass === 1 ? style.text : style.text_err}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
