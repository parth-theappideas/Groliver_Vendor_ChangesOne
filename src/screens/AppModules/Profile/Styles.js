import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainContainer: {
        marginHorizontal: hs(20),
        marginTop: vs(10),
        flexDirection: 'row'
    },
    profileimgBorder:{
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#f2f2f2'
    },  
    profileimg: {
        width: hs(80),
        height: vs(80),
        resizeMode: 'contain'
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vs(20),
        marginLeft: hs(10)
    },
    text: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold',
    },
    editimg: {
        width: hs(15),
        height: vs(15),
        marginLeft: hs(10),
        resizeMode: 'contain'
    },
    container3: {
        marginLeft: hs(10),
        marginTop: vs(5),
    },
    text2: {
        fontSize: fs(16)
    },
    container4: {
        marginTop: vs(35),
        marginHorizontal: hs(20)
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container6: {
        flexDirection: 'row',
    },
    notificationimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        alignItems: 'center',
        alignSelf: 'center'
        // marginTop:vs(2)
    },
    text3: {
        fontSize: fs(16),
        color: '#000',
        marginLeft: hs(7),
        fontFamily: Fonts.regular
    },
    rightimg: {
        width: hs(15),
        height: vs(15),
        resizeMode: 'contain',
        tintColor: '#000'
    },
    borderView: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        marginTop: vs(15),
        marginHorizontal: hs(20)
    },
    container7: {
        marginTop: vs(20),
        marginHorizontal: hs(20)
    },
    container8: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container9: {
        flexDirection: 'row',
    },
    helpimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text4: {
        fontSize: fs(16),
        color: '#000',
        marginLeft: hs(10),
        fontFamily: Fonts.regular
    },
    container10: {
        marginTop: vs(20),
        marginHorizontal: hs(20)
    },
    container11: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container12: {
        flexDirection: 'row',
    },
    logoutimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text5: {
        fontSize: fs(16),
        color: '#000',
        marginLeft: hs(10),
        fontFamily: Fonts.regular
    },
    LoadingIndicator: {
        marginLeft: hs(13)
    }
})

export default styles;