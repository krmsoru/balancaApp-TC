import { Text, View, SafeAreaView } from "react-native";
import style from "./style";
import { itemData } from "../../types";

type infoTextProps = {
  item?: itemData;
};

export default function TextInfo({ item }: infoTextProps) {
  return (
    <SafeAreaView style={[style.container]}>
      <View style={style.container}>
        <View style={style.left}>
          <Text style={style.infoText}>Umidade(%)</Text>
          <Text style={style.infoText}>Energia(kcal)</Text>
          <Text style={style.infoText}>Proteina(g)</Text>
          <Text style={style.infoText}>Colesterol(mg)</Text>
          <Text style={style.infoText}>Carboidrato(g)</Text>
          <Text style={style.infoText}>Fibra(g)</Text>
          <Text style={style.infoText}>Cálcio(mg)</Text>
        </View>
        <View style={style.right}>
          <Text style={style.infoText}>{item?.umidade}</Text>
          <Text style={style.infoText}>{item?.energia_kcal}</Text>
          <Text style={style.infoText}>{item?.proteina_g}</Text>
          <Text style={style.infoText}>{item?.colesterol_mg}</Text>
          <Text style={style.infoText}>{item?.carboidrato_g}</Text>
          <Text style={style.infoText}>{item?.fibra_g}</Text>
          <Text style={style.infoText}>{item?.calcio_mg}</Text>
        </View>
      </View>
      <View style={style.container}>
        <View style={style.left}>
          <Text style={style.infoText}>Ferro(mg)</Text>
          <Text style={style.infoText}>Sódio(mg)</Text>
          <Text style={style.infoText}>Potássio(mg)</Text>
          <Text style={style.infoText}>Vitamina C(mg)</Text>
          <Text style={style.infoText}>Gordura Saturada(g)</Text>
          <Text style={style.infoText}>Gordura Monoinsaturados(g)</Text>
          <Text style={style.infoText}>Gordura Poliinsaturados(g)</Text>
        </View>
        <View style={style.right}>
          <Text style={style.infoText}>{item?.ferro_mg}</Text>
          <Text style={style.infoText}>{item?.sodio_mg}</Text>
          <Text style={style.infoText}>{item?.poliinsaturados_g}</Text>
          <Text style={style.infoText}>{item?.vitaminaC_mg}</Text>
          <Text style={style.infoText}>{item?.saturados_g}</Text>
          <Text style={style.infoText}>{item?.monoinsaturados_g}</Text>
          <Text style={style.infoText}>{item?.poliinsaturados_g}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
