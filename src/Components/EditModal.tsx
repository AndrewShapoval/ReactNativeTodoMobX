import React, {useState} from "react";
import {Button, Modal, TextInput, View, StyleSheet, Alert} from "react-native";
import {THEME} from "../theme";

export const EditModal = (props: PropsType) => {

    const [title, setTitle] = useState(props.value)

    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert("Ошибка", "Минимальная длина 3 символа")
        } else {
            props.onSave(title)
        }
    }

    return (
        <Modal visible={props.visible} animationType={"fade"} transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder={"Введите название"}
                           autoCapitalize={"none"} autoCorrect={false} maxLength={64}
                           value={title} onChangeText={text => setTitle(text)}/>
                <View style={styles.buttons}>
                    <Button title={"Отменить"} onPress={props.onCancel} color={THEME.DANGER_COLOR}/>
                    <Button title={"Сохранить"} onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

type PropsType = {
    visible: any
    onCancel: () => void
    value: string
    onSave: (title: string) => void
}