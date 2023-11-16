function useFoodsApi() {
  function FetchFoodData(value: string) {
    const url = `https://apibalancadavida.azurewebsites.net/api/Food/ByName/${value}`;
    return fetchAsync(url);
  }

  async function fetchAsync(url: string) {
    var resposta = await fetch(url);
    if (resposta.ok) {
      return await resposta.text();
    } else {
      return "Erro na API";
    }
  }

  return { FetchFoodData };
}

export default useFoodsApi;
