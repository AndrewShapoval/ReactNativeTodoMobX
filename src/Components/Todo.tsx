import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {TodoType} from "../../App";
import {AppText} from "./ui/AppText";

export const Todo = (props: PropsType) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.onOpen(props.todo.id)}
                          onLongPress={props.onRemove.bind(null, props.todo.id)}>
            <View style={styles.todo}>
                <AppText>{props.todo.title}</AppText>
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