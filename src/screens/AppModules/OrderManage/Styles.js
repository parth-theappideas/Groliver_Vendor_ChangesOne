import {StyleSheet} from 'react-native'
import { fs, hs,screenHeight,screenWidth,vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems:'center',
        backgroundColor: 'white',
        marginHorizontal:hs(10),
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        // marginHorizontal: hs(10)
        marginVertical:vs(7)
    },
    container2:{
        marginTop: vs(30),
        marginHorizontal: hs(10)
    },
    borderView:{
        borderWidth: 1,
        // height: vs(175),
        height:screenHeight * 0.22,
        // height:'52%',
        width:screenWidth * 0.43,
        // width: hs(160),
        borderRadius: 15,
        // marginHorizontal:hs(10),
        backgroundColor: '#e9f5f0',
        borderColor: '#e9f5f0'
    },
    orderManageimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text:{
        fontSize: fs(16),
        color: '#000',
    },
    container3:{
        marginTop: vs(30),
        marginHorizontal: hs(10)
    },
    borderView2:{
        borderWidth: 1,
        // height: vs(175),
        height: screenHeight * 0.22,
        // width: hs(160),
        // height: '52%',
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(10),
        backgroundColor: '#feedff',
        borderColor: '#feedff'
    },
    myProductimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView2:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text2:{
        fontSize: fs(16),
        color: '#000'
    },
    rowContainer2:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        // marginHorizontal: hs(10)
    },
    container4:{
        marginTop: vs(13),
        marginHorizontal: hs(10)
    },
    borderView3:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(20),
        backgroundColor: '#e9f5f0',
        borderColor: '#e9f5f0'
    },
    walletimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView3:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text3:{
        fontSize: fs(16),
        color: '#000'
    },
    container5:{
        marginTop: vs(13),
        marginHorizontal: hs(10)
    },
    borderView4:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(20),
        backgroundColor: '#feedff',
        borderColor: '#feedff'
    },
    transationsimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView4:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text4:{
        fontSize: fs(16),
        color: '#000'
    },
    rowContainer3:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        // marginHorizontal: hs(10)
    },
    container6:{
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    borderView5:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        // marginHorizontal: hs(20),
        borderRadius: 15,
        backgroundColor: '#e9f5f0',
        borderColor: '#e9f5f0'
    },
    profileimg:{
        width: hs(60),
        height: vs(60),
        alignSelf: 'center',
        marginTop: vs(30),
        resizeMode: 'contain'
    },
    textView5:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text5:{
        fontSize: fs(16),
        color: '#000'
    },
    container7:{
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    borderView6:{
        borderWidth: 1,
        // height: vs(170),
        height: screenHeight * 0.22,
        // width: hs(160),
        width: screenWidth * 0.43,
        borderRadius: 15,
        // marginHorizontal: hs(20),
        backgroundColor: '#feedff',
        borderColor: '#feedff'
    },
    logoutimg:{
        width: hs(60),
        height: vs(60),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: vs(30)
    },
    textview6:{
        marginTop: vs(20),
        alignSelf: 'center'
    },
    text6:{
        fontSize: fs(16),
        color: '#000'
    }
})

export default styles;