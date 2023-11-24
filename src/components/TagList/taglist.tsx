import { FlatList, TouchableOpacity, View, Text, Alert } from "react-native";
import style from "./styles";
import { itemData } from "../../types";
import { useEffect, useState } from "react";
import InfoModal from "./modal";
import TextInfo from "../TextInfo/textinfo";

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
        const soma = (item1: string, item2: string) => {
          if (Number.isNaN(Number(item1)) || Number.isNaN(Number(item2)))
            return item1;
          return (Number(item1) + Number(item2)).toFixed(1);
        };

        res.umidade = soma(res.umidade, item.umidade);
        res.energia_kcal = soma(res.energia_kcal, item.energia_kcal);
        res.energia_kcal = soma(res.energia_kcal, item.energia_kcal);
        res.proteina_g = soma(res.proteina_g, item.proteina_g);
        res.colesterol_mg = soma(res.colesterol_mg, item.colesterol_mg);
        res.carboidrato_g = soma(res.carboidrato_g, item.carboidrato_g);

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
      <View style={{ alignItems: "center" }}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem({ item, onLongPress })}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          opacity: data.length > 0 ? 1 : 0.5,
        }}
      >
        <Text style={[style.title, { fontSize: 30 }]}>TOTAL</Text>
        <TextInfo item={total} />
      </View>

      <InfoModal
        closeModal={closeModal}
        item={selectedItem}
        visible={isVisible}
      />
    </View>
  );
}
