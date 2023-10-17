import { CONSUMER_KEY, CONSUMER_SECRET } from 'react-native-dotenv';

const url = 'https://platform.fatsecret.com/rest/server.api';

const method = 'foods.search';
const query = 'apple'; // 

const params = {
    method: method,
    format: 'json',
    search_expression: query,
    max_results: 5,
    page_number: 0,
};

const queryString = new URLSearchParams(params).toString();

fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONSUMER_KEY}:${CONSUMER_SECRET}`,
    },
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erro de solicitação: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data); // Aqui está a resposta da API
    })
    .catch((error) => {
        console.error('Erro na chamada da API', error);
    });
