import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { vs, hs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container2: {
        marginTop: vs(10)
    },
    profileimgBorder:{
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#f2f2f2'
    },  
    profileimg: {
        width: hs(120),
        height: vs(120),
        resizeMode: 'contain',
    },
    Clickimg: {
        width: hs(120),
        height: vs(120),
        borderRadius: 60
    },
    changeimg: {
        width: hs(30),
        height: vs(30),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    container3: {
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    label: {
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(10),
        fontFamily: Fonts.regular
    },
    container4: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
    },
    LoadingIndicator: {
        marginLeft: hs(15),
        position: "absolute",
        bottom:0,
        top:0
    }
})

export default styles;