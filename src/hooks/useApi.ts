import { useState } from "react";
import { Alert } from "react-native";

interface useAPI {
  apiRequest?: any[];
  FetchFoodData: (value: string) => void;
}

export default function useAPI(): useAPI {
  const [apiRequest, setApiRequest] = useState<any[]>();

  function FetchFoodData(value: string) {
    const url = `https://apibalancadavida.azurewebsites.net/api/Food/ByName/${value}`;
    return fetchAsync(url);
  }

  async function fetchAsync(url: string) {
    var response = await fetch(url);
    if (response.ok) {
      const data = await response.text();
      setApiRequest(JSON.parse(data))

    } else {
      Alert.alert('ERRO API','Erro ao se comunicar com a API.')
    }
  }

  return { apiRequest, FetchFoodData };
}
