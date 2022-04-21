import React from "react";
import {Image,Pressable,StyleSheet} from 'react-native'
import {mpStyle,vs,hs} from '../utils/stylesUtils'

const Img = ({
    onPress,
    imgStyle,
    height,
    width,
    imgSrc,
    mpImage,
    ...props
}) => {
    const styles = StyleSheet.create({
        imgStyle:{
            width:hs(width || 40),
            height:vs(height || 40),
            ...mpStyle({...mpImage})
        }
    })

    return(
        <>
            {!onPress ?
                <Image
                    {...props}
                    style={[styles.imgStyle,imgStyle]}
                    source={imgSrc}
                />
                :
                <Pressable>
                    <Image
                        {...props}
                        style={[styles.imgStyle,imgStyle]}
                        source={imgSrc}
                    />
                </Pressable>
            }
        </>
    )
}

export default Img;