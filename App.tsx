import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading';

import {Navbar} from "./src/Components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApplication() {
    await Font.loadAsync({
        "roboto-regular": require('./assets/fonts/Roboto-Regular.ttf'),
        "roboto-bold": require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {

    const [isReady, setIsReady] = useState(false)
    const [todoId, setTodoId] = useState<null | string>(null)
    const [todos, setTodos] = useState<Array<TodoType>>([
        {id: "1", title: "Выучить RN"},
        {id: "2", title: "Написать приложение"}
    ])

    if (!isReady) {
        return <AppLoading startAsync={loadApplication}
                           onError={(err) => console.log(err)}
                           onFinish={() => setIsReady(true)}/>
    }

    const addTodo = (title: string) => {
        setTodos(prevState => [
            ...prevState,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }

    const removeTodo = (id: string) => {
        const todo = todos.find(t => t.id === id)
        // Works on both Android and iOS
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todo?.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: "destructive",
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prevState => prevState.filter(todo => todo.id !== id))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    const updateTodo = (id: string, title: string) => {
        setTodos(prevState => prevState.map(todo => todo.id === id ? {...todo, title: title} : todo))
    }

    let content = <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} onOpen={(id) => setTodoId(id)}/>

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        //@ts-ignore
        content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)}
                              removeTodo={removeTodo}
                              onSave={updateTodo}/>
    }

    return (
        <View>
            <Navbar title={"Todo App"}/>
            <View style={styles.container}>{content}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});

export type TodoType = {
    id: string,
    title: string
}