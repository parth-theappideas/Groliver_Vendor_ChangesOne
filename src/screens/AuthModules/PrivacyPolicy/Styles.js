import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container2: {
        marginHorizontal: hs(20)
    },
    imglogo: {
        width: hs(250),
        height: vs(120),
        resizeMode: 'contain',
    },
    container3: {
        marginTop: vs(20)
    },
    text1: {
        fontSize: fs(25),
        color: '#000',
        fontWeight: 'bold',
        fontFamily: Fonts.regular
    },
    container4: {
        marginTop: vs(20)
    },
    text2: {
        fontSize: fs(17),
        fontFamily: Fonts.regular
    },
})

export default styles;