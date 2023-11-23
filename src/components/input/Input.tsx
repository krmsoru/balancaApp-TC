import { FC } from "react";
import {
  InputModeOptions,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import style from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type InputProps = {
  onChangeTextProp: (value: string) => void;
  onPress: () => void;
  styleProp: {} | null;
  placeholderProp: string | undefined;
  inputModeProp: InputModeOptions | undefined;
  buttonEnable: boolean | undefined;
};

const Input = ({
  onChangeTextProp,
  styleProp,
  placeholderProp,
  inputModeProp,
  buttonEnable,
  onPress,
}: InputProps) => (
  <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
    <TextInput
      style={[style.Input, styleProp, { width: buttonEnable ? "70%" : "auto" }]}
      inputMode={inputModeProp || "text"}
      placeholder={placeholderProp || ""}
      onChangeText={(evt) => onChangeTextProp(evt)}
    />
    {buttonEnable ? (
      <TouchableOpacity style={style.button} onPress={onPress}>
        <FontAwesome name="search" size={24} color={style.button.color} />
      </TouchableOpacity>
    ) : (
      <View />
    )}
  </View>
);

export default Input;
