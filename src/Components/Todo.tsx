import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {TodoType} from "../../App";

export const Todo = (props: PropsType) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.onOpen(props.todo.id)}
                          onLongPress={props.onRemove.bind(null, props.todo.id)}>
            <View style={styles.todo}>
                <Text>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10
    }
})

type PropsType = {
    todo: TodoType
    onRemove: (id: string) => void
    onOpen: (id: string) => void
}