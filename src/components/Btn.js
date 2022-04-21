import React from "react";
import { Text, Pressable, StyleProp, ViewStyle, TextStyle, PressableProps } from 'react-native'
import { mpStyle, vs, hs, fs, screenWidth } from '../utils/stylesUtils';


const Btn = ({
    title,
    onPress,
    mpBtn,
    btnStyle,
    btnHeight,
    radius = 0,
    textSize,
    labelStyle,
    mpLabel,
    textColor,
    leftIcon,
    rightIcon,
    ...restProps
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[{
                height: vs(btnHeight),
                ...mpStyle({ ...mpBtn }),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: radius,
                backgroundColor: 'red',
                flexDirection: 'row',
            }, btnStyle]}

            {...restProps}
        >
            {leftIcon ? leftIcon() : null}
            <Text style={[{
                color: textColor,
                fontSize: fs(textSize || 12),
                ...mpStyle({ ...mpLabel }),
            }, labelStyle]}>{title}</Text>
            {rightIcon ? rightIcon() : null}
        </Pressable>
    )
}

export default Btn;