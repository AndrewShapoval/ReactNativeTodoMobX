import React from "react";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import {AppTextBold} from "./AppTextBold";
import {THEME} from "../../theme";

export const AppButton = (props: PropsType) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: props.color || THEME.MAIN_COLOR}}>
                <AppTextBold style={styles.text}>{props.children}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#fff"
    }
})

type PropsType = {
    children: any
    onPress?: any
    color?: any
}