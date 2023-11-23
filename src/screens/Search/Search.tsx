import {
  Alert,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../../components/input/Input";
import { memo, useState } from "react";
import TagList from "../../components/TagList";
import ItemList from "../../components/ItemList/ItemList";
import useAPI from "../../hooks/useApi";
import { itemData } from "../../types";

export default function Search() {
  const [inputFood, setInputFood] = useState<string>("");
  const [inputWeight, setInputWeight] = useState<number>(0);
  const [selected, setSelected] = useState<itemData[]>();
  const { FetchFoodData, response } = useAPI();

  const handleItem = async (obj: itemData) => {
    if (obj.id != undefined) {
      const data = (await selected?.filter((item) => item.id !== obj.id)) || [];
      const Item = nutrientsMath(obj, Number(inputWeight));
      const newData = await [...data, Item];
      await setSelected(newData);
    }
  };
  const nutrientsMath = (item: itemData, peso: number) => {
    const nutrients = (itemProperty: string) => {
      if (!Number.isNaN(Number(itemProperty))) {
        return ((Number(itemProperty) * peso) / 100).toFixed(1);
      } else {
        return itemProperty;
      }
    };

    const res = {
      id: item?.id,
      peso: peso,
      nome: item?.nome,
      descricao: item?.descricao,
      umidade: nutrients(item?.umidade),
      energia_kcal: nutrients(item?.energia_kcal),
      proteina_g: nutrients(item?.proteina_g),
      colesterol_mg: nutrients(item?.colesterol_mg),
      carboidrato_g: nutrients(item?.carboidrato_g),
      fibra_g: nutrients(item?.fibra_g),
      calcio_mg: nutrients(item?.calcio_mg),
      ferro_mg: nutrients(item?.ferro_mg),
      sodio_mg: nutrients(item?.sodio_mg),
      potassio_mg: nutrients(item?.potassio_mg),
      vitaminaC_mg: nutrients(item?.vitaminaC_mg),
      saturados_g: nutrients(item?.saturados_g),
      monoinsaturados_g: nutrients(item?.monoinsaturados_g),
      poliinsaturados_g: nutrients(item?.poliinsaturados_g),
    };
    return res;
  };
  const MemoizedItemList = memo(() => {
    return (
      <ItemList
        dataProp={response || []}
        horizontalProp={true}
        onLongPress={(item) => handleItem(item)}
      />
    );
  });

  StatusBar.setTranslucent(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* -----------------------Area de busca----------------------- */}
      <KeyboardAvoidingView style={{ flex: 1, minHeight: 190 }}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontWeight: "bold",
            fontSize: 20,
            flex: 1,
            flexGrow: 1,
          }}
        >
          Buscar Alimentos
        </Text>
        <Input
          inputModeProp={"text"}
          placeholderProp={"Inserir alimento"}
          onChangeTextProp={(evt) => setInputFood(evt)}
          styleProp={{}}
          buttonEnable={true}
          onPress={() => FetchFoodData(inputFood)}
        />
        <Input
          inputModeProp={"numeric"}
          placeholderProp={"inserir peso"}
          onChangeTextProp={(evt) => {
            if (!isNaN(Number(evt))) setInputWeight(Number(evt));
            else setInputWeight(0);
          }}
          styleProp={{}}
          buttonEnable={false}
          onPress={() => {}}
        />
      </KeyboardAvoidingView>
      {/* -----------------------Area de seleção----------------------- */}
      <View style={{ flex: 1, minHeight: 200 }}>
        <ItemList
          dataProp={response || []}
          horizontalProp={true}
          onLongPress={
            (item) => handleItem(item)
            //   {
            //   if (inputWeight >= 1) {
            //     console.log(item)
            //     handleItem(item);
            //     const newData = selected?.filter((obj) => obj.id !== item.id);
            //     setSelected(newData);
            //   } else {
            //     Alert.alert("Peso", "Digite um valor de peso válido.");
            //   }
            // }
          }
        />
      </View>
      {/* -----------------------Area de Visualização----------------------- */}
      <View style={{ marginBottom: 20, minHeight: 300 }}>
        <TagList
          data={selected || []}
          onLongPress={(item) => {
            const newData = selected?.filter((obj) => obj.id !== item.id);
            setSelected(newData);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
