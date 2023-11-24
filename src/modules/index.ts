import { itemData } from "../types";

export const nutrientsMath = (item: itemData, peso: number) => {
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
