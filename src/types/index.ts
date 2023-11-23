

export interface itemData {
  id: string;
  nome: string;
  peso: number | undefined;
  descricao: string;
  umidade: string;
  energia_kcal: string;
  proteina_g: string;
  colesterol_mg: string;
  carboidrato_g: string;
  fibra_g: string;
  calcio_mg: string;
  ferro_mg: string;
  sodio_mg: string;
  potassio_mg: string;
  vitaminaC_mg: string;
  saturados_g: string;
  monoinsaturados_g: string;
  poliinsaturados_g: string;
}

export const foodData: itemData[] = [
  {
    id: "1",
    peso: 0.42,
    nome: "Abacaxi",
    descricao: "fruta",
    umidade: "23",
    energia_kcal: "32",
    proteina_g: "45",
    colesterol_mg: "42",
    carboidrato_g: "24",
    fibra_g: "13",
    calcio_mg: "4",
    ferro_mg: "04",
    sodio_mg: "09",
    potassio_mg: "43",
    vitaminaC_mg: "06",
    saturados_g: "12",
    monoinsaturados_g: "1",
    poliinsaturados_g: "3",
  },
  {
    id: "2",
    peso: 0.42,
    nome: "Maçã",
    descricao: "fruta",
    umidade: "23",
    energia_kcal: "32",
    proteina_g: "45",
    colesterol_mg: "42",
    carboidrato_g: "24",
    fibra_g: "13",
    calcio_mg: "4",
    ferro_mg: "04",
    sodio_mg: "09",
    potassio_mg: "43",
    vitaminaC_mg: "06",
    saturados_g: "12",
    monoinsaturados_g: "1",
    poliinsaturados_g: "3",
  },
];
