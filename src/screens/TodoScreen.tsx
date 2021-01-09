import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {FontAwesome, AntDesign} from "@expo/vector-icons"
import {TodoType} from "../../App";
import {THEME} from "../theme";
import {AppCard} from "../Components/ui/AppCard";
import {EditModal} from "../Components/EditModal";
import {AppTextBold} from "../Components/ui/AppTextBold";
import {AppButton} from "../Components/ui/AppButton";

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
                <AppTextBold style={styles.title}>{props.todo.title}</AppTextBold>
                <AppButton onPress={() => {
                    setModal(true)
                }}>
                    <FontAwesome name={"edit"} size={20}/>
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={props.goBack} color={THEME.GREY_COLOR}>
                        <AntDesign name={"back"} size={20} color={"#fff"}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => {
                        props.removeTodo(props.todo.id)
                    }} color={THEME.DANGER_COLOR}>
                        <FontAwesome name={"remove"} size={20}/>
                    </AppButton>
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