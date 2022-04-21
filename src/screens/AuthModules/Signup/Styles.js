import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenHeight, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: hs(5)
    },
    img1: {
        width: hs(120),
        height: vs(120),
        resizeMode: 'contain',
    },
    Clickimg: {
        width: hs(120),
        height: vs(120),
        borderRadius: 60
    },
    img2: {
        width: hs(30),
        height: vs(30),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    container2: {
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    text1: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(10),
        fontFamily: Fonts.regular
    },
    text2: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(20),
        fontFamily: Fonts.regular
    },
    text3: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(20),
        fontFamily: Fonts.regular
    },
    text4: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(20),
        fontFamily: Fonts.regular
    },
    container3: {
        marginTop: vs(20),
        alignItems: 'center'
    },
    container4: {
        flexDirection: 'row',
    },
    text5: {
        fontSize: fs(12),
        fontFamily: Fonts.regular
    },
    text6: {
        fontSize: fs(12),
        marginLeft: hs(3),
        fontFamily: Fonts.regular,
        color: '#FF7900'
    },
    container5: {
        flexDirection: 'row',
        marginTop: vs(5)
    },
    text7: {
        fontSize: fs(12),
        fontFamily: Fonts.regular
    },
    text8: {
        fontSize: fs(12),
        marginLeft: hs(3),
        fontFamily: Fonts.regular,
        color: '#FF7900'
    }
})

export default styles;