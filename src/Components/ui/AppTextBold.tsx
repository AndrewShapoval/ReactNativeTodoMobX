import React from "react";
import {Text, StyleSheet} from "react-native";

export const AppTextBold = (props: PropsType) => {
    return (
        <Text style={{...styles.default, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: "roboto-bold"
    }
})

type PropsType = {
    children: any
    style?: any
}