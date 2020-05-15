import React, { useContext, useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import { addTodo as sAddTodo, todoApp, writeSomething } from '../../../resources/strings'
import { ebony, transparent, white } from '../../../resources/colors'
import { DashboardContext } from '../../../context/dashboard'

export const DashboardScreen = () => {
    const { state, addTodo, removeTodo } = useContext(DashboardContext)
    const [todoText, setTodoText] = useState('')
    const { todos } = state
    const {
        container,
        titleText,
        todoInput,
        todoItemContainer,
        todoItemText,
        removeButton,
        removeButtonText,
        todoContainer
    } = styles

    const renderTodoItem = ({ item }) => {
        const { value, id } = item

        return (
            <View style={todoItemContainer} key={id}>
                <Text style={todoItemText}>
                    {value}
                </Text>

                <TouchableOpacity onPress={() => removeTodo(id)} style={removeButton}>
                    <Text style={removeButtonText}>
                        X
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const onAddButtonClicked = () => {
        if (todoText) {
            addTodo(todoText)
            setTodoText('')
        }
    }

    return (
        <View style={container}>

            <StatusBar barStyle={'light-content'} backgroundColor={ebony}/>

            <Text style={titleText}>
                {todoApp}
            </Text>

            <TextInput
                style={todoInput}
                value={todoText}
                returnKeyType={'done'}
                onChangeText={setTodoText}
                placeholder={writeSomething}
                placeholderTextColor={white}
                underlineColorAndroid={transparent}
                onSubmitEditing={onAddButtonClicked}/>

            <FlatList
                data={todos}
                numColumns={3}
                style={todoContainer}
                renderItem={renderTodoItem}
                keyboardShouldPersistTaps={'always'}
                keyExtractor={item => String(item.id)}/>

        </View>
    )
}