import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { memo } from "react";
import { itemData } from "../../types";
import style from "./style";

type ItemProps = {
  item?: itemData;
  onPress?: () => void;
  onLongPress?: () => void;
  verifyId?: string;
};

const ItemInfo = memo(({ item, onPress, onLongPress, verifyId }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={[style.item, { borderWidth: item?.id === verifyId ? 3 : 0 }]}
  >
    <Text style={[style.itemTitle]}>{item?.nome}</Text>
    <Text style={[style.itemSubTitle, { opacity: 0.7 }]}>
      {item?.descricao}
    </Text>

    {item?.id === verifyId && (
      <View style={style.itemContainer}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",gap:5
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Text style={style.infoText}>Umidade(%)</Text>
            <Text style={style.infoText}>Energia(kcal)</Text>
            <Text style={style.infoText}>Proteina(g)</Text>
            <Text style={style.infoText}>Colesterol(mg):</Text>
            <Text style={style.infoText}>Carboidrato(g)</Text>
            <Text style={style.infoText}>Fibra(g)</Text>
            <Text style={style.infoText}>Cálcio(mg)</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={style.infoText}>{item?.umidade}</Text>
            <Text style={style.infoText}>{item?.energia_kcal}</Text>
            <Text style={style.infoText}>{item?.proteina_g}</Text>
            <Text style={style.infoText}>{item?.colesterol_mg}</Text>
            <Text style={style.infoText}>{item?.carboidrato_g}</Text>
            <Text style={style.infoText}>{item?.fibra_g}</Text>
            <Text style={style.infoText}>{item?.calcio_mg}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Text style={style.infoText}>Ferro(mg)</Text>
            <Text style={style.infoText}>Sódio(mg)</Text>
            <Text style={style.infoText}>Potássio(mg)</Text>
            <Text style={style.infoText}>Vitamina C(mg)</Text>
            <Text style={style.infoText}>Gordura Saturada(g)</Text>
            <Text style={style.infoText}>Gordura Monoinsaturados(g)</Text>
            <Text style={style.infoText}>Gordura Poliinsaturados(g)</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={style.infoText}>{item?.ferro_mg}</Text>
            <Text style={style.infoText}>{item?.sodio_mg}</Text>
            <Text style={style.infoText}>{item?.poliinsaturados_g}</Text>
            <Text style={style.infoText}>{item?.vitaminaC_mg}</Text>
            <Text style={style.infoText}>{item?.saturados_g}</Text>
            <Text style={style.infoText}>{item?.monoinsaturados_g}</Text>
            <Text style={style.infoText}>{item?.poliinsaturados_g}</Text>
          </View>
        </View>
      </View>
    )}
  </TouchableOpacity>
));

export default ItemInfo;
