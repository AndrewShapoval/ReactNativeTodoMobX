import React, {useState} from "react";
import {View, StyleSheet, Text, Button} from "react-native";
import {TodoType} from "../../App";
import {THEME} from "../theme";
import {AppCard} from "../ui/AppCard";
import {EditModal} from "../Components/EditModal";

export const TodoScreen = (props: PropsType) => {

    const [modal, setModal] = useState(false)

    const saveHandler = (title: string) => {
        props.onSave(props.todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal visible={modal} value={props.todo.title} onSave={saveHandler}
                       onCancel={() => setModal(false)}/>

            <AppCard style={styles.card}>
                <Text style={styles.title}>{props.todo.title}</Text>
                <Button title={"Редактировать"} onPress={() => {
                    setModal(true)
                }}/>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={"Назад"} onPress={props.goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title={"Удалить"} onPress={() => {
                        props.removeTodo(props.todo.id)
                    }} color={THEME.DANGER_COLOR}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: "40%"
    },
    title: {
        fontSize: 20
    }
})

type PropsType = {
    goBack: () => void
    todo: TodoType
    removeTodo: (id: string) => void
    onSave: (id: string, title: string) => void
}