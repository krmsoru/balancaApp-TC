import { Modal, View, Text, Pressable, TouchableOpacity } from "react-native";
import { foodData } from "../../../types";
import { FC } from "react";
import style from "./styles";

interface modalProps {
  visible: boolean;
  item: foodData | undefined;
  closeModal: () => void;
}

const InfoModal: FC<modalProps> = (props) => {
  const { closeModal, item, visible } = props;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={style.container}>
        {item ? (
          <TouchableOpacity onPress={closeModal} onLongPress={closeModal} style={style.item}>
            <View
              style={{
                paddingVertical:10,
                paddingHorizontal: 20,
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={style.title}>{item.nome}</Text>
              <Text style={style.subTitle}>{item.descricao}</Text>
            </View>

            <View style={style.nutrients}>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={style.text}>Peso Inserido</Text>
                <Text style={style.text}>Energia(kcal)</Text>
                <Text style={style.text}>Proteina</Text>
                <Text style={style.text}>Colesterol(mg):</Text>
                <Text style={style.text}>Carboidrato g:</Text>
                <Text style={style.text}>Fibra(g)</Text>
                <Text style={style.text}>calcio(mg)</Text>
                <Text style={style.text}>Ferro(mg)</Text>
                <Text style={style.text}>Sódio(mg)</Text>
                <Text style={style.text}>Potássio(mg)</Text>
                <Text style={style.text}>Vitamina C(mg)</Text>
                <Text style={style.text}>Saturados(g)</Text>
                <Text style={style.text}>Monoinsaturados(g)</Text>
                <Text style={style.text}>Poliinsaturados(g)</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={style.text}>{item.peso}</Text>
                <Text style={style.text}>{item.energia_kcal}</Text>
                <Text style={style.text}>{item.proteina_g}</Text>
                <Text style={style.text}>{item.colesterol_mg}</Text>
                <Text style={style.text}>{item.carboidrato_g}</Text>
                <Text style={style.text}>{item.fibra_g}</Text>
                <Text style={style.text}>{item.calcio_mg}</Text>
                <Text style={style.text}>{item.ferro_mg}</Text>
                <Text style={style.text}>{item.sodio_mg}</Text>
                <Text style={style.text}>{item.poliinsaturados_g}</Text>
                <Text style={style.text}>{item.vitaminaC_mg}</Text>
                <Text style={style.text}>{item.saturados_g}</Text>
                <Text style={style.text}>{item.monoinsaturados_g}</Text>
                <Text style={style.text}>{item.poliinsaturados_g}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
    </Modal>
  );
};

export default InfoModal;
