export interface foodData {
  id: string;
  nome: string
  peso: string | null;
  descricao: string | null;
  umidade: string;
  energia_kcal: string | null;
  proteina_g: string | null;
  colesterol_mg: string | null;
  carboidrato_g: string | null;
  fibra_g: string | null;
  calcio_mg: string | null;
  ferro_mg: string | null;
  sodio_mg: string | null;
  potassio_mg: string | null;
  vitaminaC_mg: string | null;
  saturados_g: string | null;
  monoinsaturados_g: string | null;
  poliinsaturados_g: string | null;
}

export const fooditem: foodData[] = [
  {
    id: "1",
    peso: "0.42",
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
    peso: "0.42",
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
