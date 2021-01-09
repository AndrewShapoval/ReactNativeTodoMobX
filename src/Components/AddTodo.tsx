import React, {useState} from "react";
import {Alert, Keyboard, StyleSheet, TextInput, View} from "react-native";
import {THEME} from "../theme";
import {AntDesign} from "@expo/vector-icons"

export const AddTodo = (props: PropsType) => {

    const [value, setValue] = useState("")

    const onPressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value)
            setValue("")
            Keyboard.dismiss()
        } else {
            Alert.alert("Введите название дела")
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={text => setValue(text)}
                       value={value}
                       placeholder={"Введите название дела"}
                       autoCorrect={false}
                // keyboardType="number-pad"
                       autoCapitalize="none"/>
            {/*<Button title="Добавить" onPress={onPressHandler}/>*/}
            <AntDesign.Button name={"pluscircleo"} onPress={onPressHandler}>
                Добавить
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "60%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})

type PropsType = {
    onSubmit: (title: string) => void
}