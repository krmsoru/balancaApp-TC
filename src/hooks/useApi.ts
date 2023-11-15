async function fetchData(value: string): Promise<any> {
  const url = `https://apibalancadavida.azurewebsites.net/api/Food/ByName/${value}`;

  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

// Exemplo de uso
export default async function useApi(value: string) {
  try {
    const data = await fetchData(value);
    console.log("Dados da API:", data);
    return data;
  } catch (error) {
    console.error("Erro no exemplo principal:", error);
    return;
  }
}
