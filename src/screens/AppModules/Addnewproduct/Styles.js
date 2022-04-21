import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs, fs, screenWidth } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container3: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        // marginHorizontal:hs(2),
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container31: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        // marginHorizontal:hs(2),
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hs(5)
    },
    container32: {
        borderWidth: 1,
        width: screenWidth * 0.28,
        // marginHorizontal:hs(5),
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hs(5)
    },
    plusimg: {
        width: hs(20),
        height: vs(20),
        resizeMode:'contain'
    },
    clickImg:{
        width: hs(100),
        height: vs(120),
    },
    container4: {
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        fontFamily: Fonts.regular,
        color: '#000'
    },
    container5: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
    },
    container6: {
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
    container7: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container8: {
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        // marginLeft:hs(20)
    }
})

export default styles;