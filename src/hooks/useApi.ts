import { useMemo, useState } from "react";
import { itemData } from "../types";

interface FoodsApi {
  FetchFoodData: (value: string) => void;
  response?: itemData[];
}

export default function useAPI(): FoodsApi {
  const [response, setResponse] = useState<itemData[]>();

  function FetchFoodData(value: string) {
    const url = `https://apibalancadavida.azurewebsites.net/api/Food/ByName/${value}`;

    fetchAsync(url).then((e) => setResponse(JSON.parse(e)));
  }

  async function fetchAsync(url: string) {
    var response = await fetch(url);
    if (response.ok) {
      const data = await response.text();
      return data;
    } else {
      return "Erro na API";
    }
  }

  return { response, FetchFoodData };
}
