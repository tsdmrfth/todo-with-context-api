import { azure, ebony, golden, police, white } from '../../../resources/colors'

export default {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: ebony,
        alignItems: 'center',
        paddingTop: 50
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: white
    },
    todoInput: {
        fontSize: 22,
        color: white,
        backgroundColor: police,
        borderRadius: 20,
        paddingHorizontal: 15,
        width: '90%',
        height: 60,
        marginTop: 20
    },
    todoItemContainer: {
        flex: 1,
        minHeight: 90,
        backgroundColor: golden,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        paddingTop: 45
    },
    todoItemText: {
        color: white,
        fontSize: 22,
        fontWeight: 'bold'
    },
    removeButton: {
        position: 'absolute',
        left: 10,
        top: 10,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: white
    },
    removeButtonText: {
        color: white,
        fontSize: 22,
        fontWeight: 'bold'
    },
    todoContainer: {
        width: '100%',
        marginTop: 20
    }
}