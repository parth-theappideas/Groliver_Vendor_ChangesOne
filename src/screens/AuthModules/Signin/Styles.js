import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    logo: {
        width: hs(140),
        height: vs(140),
        resizeMode: 'contain',
        marginTop: vs(40),
    },
    text1: {
        fontSize: fs(18),
        color: '#000',
        marginTop: vs(20)
    },
    container2: {
        marginTop: vs(20)
    },
    text2: {
        fontSize: fs(16),
        textDecorationLine: 'underline',
        color: '#000'
    },
    container3: {
        marginTop: vs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text3: {
        fontSize: fs(16),
        fontFamily: Fonts.regular
    },
    text4: {
        fontSize: fs(16),
        color: '#009345',
        fontWeight: 'bold',
        marginLeft: hs(5)
    },
    container4: {
        marginTop: vs(40)
    },
    container5: {
        flexDirection: 'row',
    },
    googleimg: {
        width: hs(50),
        height: vs(50),
        resizeMode: 'contain'
    },
    fbimg: {
        width: hs(50),
        height: vs(50),
        marginLeft: hs(10),
        resizeMode: 'contain'
    },
    twitterimg: {
        width: hs(50),
        height: vs(50),
        marginLeft: hs(10),
        resizeMode: 'contain'
    }
})

export default styles;