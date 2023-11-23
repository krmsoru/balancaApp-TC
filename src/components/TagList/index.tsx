import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import style from "./styles";
import { itemData } from "../../types";
import { useEffect, useState } from "react";
import InfoModal from "./modal";
import { soma } from "../../modules/Math";

interface tagListProps {
  data: itemData[];
  onLongPress: (item: itemData) => void;
}

export default function TagList({ data, onLongPress }: tagListProps) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setItem] = useState<itemData>();
  const [total, setTotal] = useState<itemData>();

  useEffect(() => {
    totalNutrients();
  }, [data]);

  const totalNutrients = () => {
    try {
      const res: itemData = {
        id: "1000",
        peso: 0,
        nome: "Total",
        descricao: "Total de nutrientes",
        umidade: "0",
        energia_kcal: "0",
        proteina_g: "0",
        colesterol_mg: "0",
        carboidrato_g: "0",
        fibra_g: "0",
        calcio_mg: "0",
        ferro_mg: "0",
        sodio_mg: "0",
        potassio_mg: "0",
        vitaminaC_mg: "0",
        saturados_g: "0",
        monoinsaturados_g: "0",
        poliinsaturados_g: "0",
      };
      data.forEach((item) => {
        res.umidade = soma(res.umidade, item.umidade);
        res.energia_kcal = soma(res.energia_kcal, item.energia_kcal);
        res.proteina_g = soma(res.proteina_g, item.proteina_g);
        res.colesterol_mg = soma(res.colesterol_mg, item.colesterol_mg);
        res.carboidrato_g = soma(res.carboidrato_g, item.carboidrato_g);
        res.fibra_g = soma(res.fibra_g, item.fibra_g);
        res.calcio_mg = soma(res.calcio_mg, item.calcio_mg);
        res.ferro_mg = soma(res.ferro_mg, item.ferro_mg);
        res.sodio_mg = soma(res.sodio_mg, item.sodio_mg);
        res.potassio_mg = soma(res.potassio_mg, item.potassio_mg);
        res.vitaminaC_mg = soma(res.vitaminaC_mg, item.vitaminaC_mg);
        res.saturados_g = soma(res.saturados_g, item.saturados_g);
        res.monoinsaturados_g = soma(
          res.monoinsaturados_g,
          item.monoinsaturados_g
        );
        res.poliinsaturados_g = soma(
          res.poliinsaturados_g,
          item.poliinsaturados_g
        );
      });
      setTotal(res);
    } catch (error) {
      Alert.prompt("Erro de Conversao");
    }
  };

  const openModal = (item: itemData) => {
    setItem(item);
    setVisible(true);
  };

  const closeModal = () => setVisible(false);

  type ItemProps = {
    item: itemData;
    onLongPress: (item: itemData) => void;
  };

  const renderItem = ({ item, onLongPress }: ItemProps) => (
    <View>
      <TouchableOpacity
        onPress={() => openModal(item)}
        onLongPress={() => onLongPress(item)}
        style={[style.item]}
      >
        <Text style={style.title}>{item.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem({ item, onLongPress })}
      />
      <View>
        <View>
          <Text style={[style.title, { fontWeight: "bold" }]}>
            {data.length > 0 ? total?.nome : ""}
          </Text>
        </View>
        {data.length > 0 && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={style.title}>Umidade(%):</Text>
              <Text style={style.title}>Energia(kcal):</Text>
              <Text style={style.title}>Proteína(g):</Text>
              <Text style={style.title}>Colesterol(g):</Text>
              <Text style={style.title}>Carboidrato:(g):</Text>
              <Text style={style.title}>Fibra Alimentar:(g):</Text>
              <Text style={style.title}>Calcio:(mg):</Text>
              <Text style={style.title}>Sódio:(mg):</Text>
              <Text style={style.title}>Potássio:(mg):</Text>
              <Text style={style.title}>Vitamina C(mg):</Text>
              <Text style={style.title}>Gorduras Saturadas(mg):</Text>
              <Text style={style.title}>Gorduras Monoinsaturados(mg):</Text>
              <Text style={style.title}>Gorduras Poliinsaturados(mg):</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.umidade}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.energia_kcal}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.proteina_g}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.colesterol_mg}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.carboidrato_g}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.fibra_g}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.calcio_mg}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.sodio_mg}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.potassio_mg}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.vitaminaC_mg}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.saturados_g}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.monoinsaturados_g}
              </Text>
              <Text style={[style.title, { fontWeight: "bold" }]}>
                {total?.poliinsaturados_g}
              </Text>
            </View>
          </View>
        )}
      </View>
      <InfoModal
        closeModal={closeModal}
        item={selectedItem}
        visible={isVisible}
      />
    </View>
  );
}
