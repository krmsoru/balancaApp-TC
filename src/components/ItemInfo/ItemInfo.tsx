import { TouchableOpacity, View, Text, Alert } from "react-native";
import { itemData } from "../../types";
import style from "./styles";

type ItemProps = {
  item?: itemData;
  selectedID: string | undefined;
  setID: (id: string | undefined) => void;
  onLongPress: (item: any) => void;
};

const ItemInfo = ({ item, setID, selectedID, onLongPress }: ItemProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          style.container,
          { borderWidth: item?.id === selectedID ? 2 : 0 },
        ]}
        onPress={() => (item?.id !== selectedID ? setID(item?.id) : {})}
        onLongPress={() => {
          if (item?.id === selectedID) {
            onLongPress(item);
            Alert.alert(`O item ${item?.nome} ${item?.descricao}`, `foi adicionado`);
          }
        }}
      >
        <View style={style.title}>
          <Text style={style.title_text}>{item?.nome}</Text>
          <Text style={[style.title_text, { opacity: 0.7 }]}>
            {item?.descricao}
          </Text>
        </View>
        {/* ------------------------------------------------------------------------------------- */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={style.left}>
            <View style={style.item}>
              <View style={style.left}>
                <Text style={style.inner_text}>Umidade</Text>
                <Text style={style.inner_text}>Energia</Text>
                <Text style={style.inner_text}>Proteina</Text>
                <Text style={style.inner_text}>Colesterol</Text>
                <Text style={style.inner_text}>Carboidrato</Text>
                <Text style={style.inner_text}>Fibra Alimentar</Text>
                <Text style={style.inner_text}>calcio</Text>
              </View>
              <View style={style.right}>
                <Text style={style.inner_text}>{item?.umidade}</Text>
                <Text style={style.inner_text}>{item?.energia_kcal}</Text>
                <Text style={style.inner_text}>{item?.proteina_g}</Text>
                <Text style={style.inner_text}>{item?.colesterol_mg}</Text>
                <Text style={style.inner_text}>{item?.carboidrato_g}</Text>
                <Text style={style.inner_text}>{item?.fibra_g}</Text>
                <Text style={style.inner_text}>{item?.calcio_mg}</Text>
              </View>
            </View>
          </View>
          {/* -------------------------------------------------------------------- */}
          <View style={style.right}>
            <View style={style.item}>
              <View style={style.left}>
                <Text style={style.inner_text}>Sodio</Text>
                <Text style={style.inner_text}>potassio</Text>
                <Text style={style.inner_text}>Vitamina C</Text>
                <Text style={style.inner_text}>Gordura Saturada</Text>
                <Text style={style.inner_text}>Gordura Moninsaturada</Text>
                <Text style={style.inner_text}>Gordura Poliinsaturada</Text>
              </View>
              <View style={style.right}>
                <Text style={style.inner_text}>{item?.sodio_mg}</Text>
                <Text style={style.inner_text}>{item?.potassio_mg}</Text>
                <Text style={style.inner_text}>{item?.vitaminaC_mg}</Text>
                <Text style={style.inner_text}>{item?.saturados_g}</Text>
                <Text style={style.inner_text}>{item?.monoinsaturados_g}</Text>
                <Text style={style.inner_text}>{item?.poliinsaturados_g}</Text>
              </View>
            </View>
          </View>
          {/* ------------------------------------------------------------------------------------------- */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemInfo;
