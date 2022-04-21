import { Dimensions, PixelRatio } from 'react-native';

const { fontScale, width, height } = Dimensions.get("window");

export const screenWidth = width
export const screenHeight = height


/// for responsive fontSize

export function fs(size) {
    return size / PixelRatio.roundToNearestPixel(fontScale)
}

// for responsive vertical scale
export const vs = (size) => height * (size / height)

// for responsive horizontal scale
export const hs = (size) => width * (size / width)

// mpStyle for scale the horizontal and vertical margin and padding. 

export const mpStyle = (mpStyle) => {
    const { m, mt, mb, ml, mr, mh, mv, p, pt, pb, pl, pr, ph, pv } = mpStyle
    return ({
        marginTop: mt,
        marginHorizontal: mh,
        marginLeft: ml,
        marginBottom: mb,
        marginRight: mr,
        margin: m,
        paddingTop: pt,
        paddingLeft: pl,
        paddingBottom: pb,
        paddingRight: pr,
        padding: p,
        paddingVertical: pv,
        marginVertical: mv,
        paddingHorizontal: ph,
    })
}
