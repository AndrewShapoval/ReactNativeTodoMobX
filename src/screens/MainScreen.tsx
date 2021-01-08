import React from "react";
import {View, StyleSheet, FlatList, Image} from "react-native";
import {AddTodo} from "../Components/AddTodo";
import {Todo} from "../Components/Todo";
import {TodoType} from "../../App";

export const MainScreen = (props: PropsType) => {

    let content = <FlatList keyExtractor={item => item.id}
                            data={props.todos}
                            renderItem={({item}) =>
                                <Todo todo={item} onRemove={props.removeTodo} onOpen={props.onOpen}/>}/>

    if (props.todos.length === 0) {
        content = <View style={styles.imgWrap}>
            <Image style={styles.image} source={require("../../assets/no-items.png")}/>
            {/*<Image style={styles.image} source={{*/}
            {/*    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"*/}
            {/*}}/>*/}
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={props.addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
})

type PropsType = {
    todos: Array<TodoType>
    removeTodo: (id: string) => void
    addTodo: (title: string) => void
    onOpen: (id: string) => void
}