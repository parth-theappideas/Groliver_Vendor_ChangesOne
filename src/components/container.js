import React from "react";
import {StyleSheet,View,TouchableOpacity,StyleProp,ViewStyle} from 'react-native'
import {hs, mpStyle,vs} from '../utils/stylesUtils'

const Container = ({
    onPress,
    containerStyle,
    children,
    height,
    mpContainer,
    width
}) => {
    const styles = StyleSheet.create({
        containerStyle:{
            height:height && vs(height),
            width:width && hs(width),
            ...mpStyle({...mpContainer})
        }
    })

    if(onPress){
        return(
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                styles={[styles.containerStyle,containerStyle]}
            >
                {children}
            </TouchableOpacity>
        )
    }

    return(
        <View style={[styles.containerStyle,containerStyle]}>
            {children}
        </View>
    )
}

export default Container;