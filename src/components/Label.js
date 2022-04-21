import React from "react";
import {Text,StyleProp,TextStyle,TextProps} from 'react-native'
import { fs, mpStyle } from "../utils/stylesUtils";

const Label = ({
    style,
    children,
    labelSize,
    mpLabel,
    onPress,
    textColor,
    ...restProps
}) => {
    return(
        <Text style={[{
            fontSize:fs(labelSize || 12),
            ...mpStyle({mpLabel}),
            color:textColor || 'black'
        },style]}{...restProps} onPress={onPress}>
            {children}
        </Text>
    )
}

export default Label;