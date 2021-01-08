import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {THEME} from "../theme";

export const AddTodo = (props: PropsType) => {

    const [value, setValue] = useState("")

    const onPressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value)
            setValue("")
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
            <Button title="Добавить" onPress={onPressHandler}/>
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
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})

type PropsType = {
    onSubmit: (title: string) => void
}