import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Storage(chave) {

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(chave, jsonValue);
        } catch (error) {
            console.log('Erro =>', error)
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(chave);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.log('Erro =>', error);
        }
    };

    return { storeData, getData };
};

