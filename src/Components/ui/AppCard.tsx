import React from "react";
import {View, StyleSheet} from "react-native";

export const AppCard = (props: PropsType) => {
    return (
        <View style={{...styles.default, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        //Для IOS
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},

        //Для Android
        elevation: 8,

        backgroundColor: "#fff",
        borderRadius: 10
    }
})

type PropsType = {
    children: any
    style?: any
}