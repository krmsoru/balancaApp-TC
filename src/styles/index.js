import { StyleSheet } from 'react-native';

export default function StylesApp() {
    return Styles;
}

const Styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#7e44b8',
    },
    button: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 8,
        textAlign: 'center',
        backgroundColor: '#7e44b8',
        marginHorizontal: 20,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    buttonWarning: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        fontWeight: '600',
    },
    buttonTextWarning: {
        color: '#f34',
    },
    radioButtonContainer: {
        borderRadius: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        elevation: 5,
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    foodDescription: {
        fontWeight: '700',
        color: 'gray',
        fontSize: 14,
    },
    nutrientText: {
        fontSize: 12,
    },
})



