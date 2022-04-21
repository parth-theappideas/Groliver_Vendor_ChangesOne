import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container2: {
        marginTop: vs(10),
        marginHorizontal: hs(20)
    },
    container3: {
        flexDirection: 'row',
    },
    container4: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    item1: {
        width: hs(50),
        height: vs(50),
        resizeMode: 'contain',
    },
    delimg: {
        width: hs(15),
        height: vs(15),
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
        right: 0,
        marginHorizontal: hs(5),
        marginTop: vs(5)
    },
    container5: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hs(10)
    },
    container6: {
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        fontFamily: Fonts.regular,
        color: '#000'
    },
    container7: {
        borderWidth: 1,
        height: vs(50),
        width: '99%',
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
    },
    container8: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: vs(20),
    },
    label2: {
        position: 'absolute',
        left: 0,
        fontSize: fs(16),
        color: '#000'
    },
    label3: {
        marginLeft: hs(25),
        paddingLeft: hs(27),
        fontSize: fs(16),
        color: '#000'
    },
    container9: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container10: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        // marginLeft:hs(20)
    },
    container11: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hs(10)
    },
})

export default styles;