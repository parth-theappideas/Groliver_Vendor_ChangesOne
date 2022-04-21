import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container2: {
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    logo: {
        width: '75%',
        height: vs(120),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    container3: {
        marginTop: vs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: fs(16),
        color: '#000'
    },
    upimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain'
    },
    container4: {
        borderWidth: 1,
        marginTop: vs(10),
        height: vs(80),
        borderColor: '#f2f2f2',
        borderRadius: 5
    },
    container5: {
        marginTop: vs(10),
        marginHorizontal: hs(10)
    },
    label2:{
        fontSize: fs(15),
        fontFamily: Fonts.regular
    },
    container6:{
        marginTop: vs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    downimg:{
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain'
    }
})

export default styles;