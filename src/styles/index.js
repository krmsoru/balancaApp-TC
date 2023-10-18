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
        shadowColor: '#007AFF',
        // shadowColor: '#7e44b8',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 8,
        textAlign: 'center',
        // backgroundColor: '#7e44b8',
        backgroundColor: '#007AFF',

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
        width: '100%',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        borderColor: '#e6e6e6',
        borderWidth: 2
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    foodDescription: {
        fontWeight: '700',
        color: 'gray',
        fontSize: 16,
    },
    nutrientText: {
        fontSize: 14,
    },
    tagStyles: {
        // backgroundColor: '#7e44b8',
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    tagTextStyles: {
        color: '#FFF',
        fontSize: 16,
    },
    searchInput: {
        padding: 5,
        fontSize: 14,
        borderRadius: 8,
    }
})



