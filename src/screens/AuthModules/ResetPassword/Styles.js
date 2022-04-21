import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    resetpswimg: {
        // width: screenWidth * 0.45,
        height: vs(140),
        width: hs(140),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: hs(20)
    },
    text1: {
        fontSize: fs(20),
        color: '#000',
        marginTop: vs(10),
        fontFamily: Fonts.regular
    }
})

export default styles;