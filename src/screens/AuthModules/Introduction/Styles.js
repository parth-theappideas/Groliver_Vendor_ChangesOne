import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts'
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils'

export const styles = StyleSheet.create({
    pageView:{
        flex:1,
        alignItems:'center'
    },
    safeAreaView1:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    page1:{
        width: '100%',
        height: "60%",
        // resizeMode: 'contain',
        overflow:'hidden'
    },
    imgBorder1:{
        borderWidth: 1,
        height: vs(60),
        width: hs(60),
        borderColor: 'white'
    },
    logo:{
        width: hs(70),
        height: vs(70),
        borderRadius: 60,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: vs(25),
        alignSelf: 'center',
    },
    title1:{
        fontSize: fs(16),
        color: 'black',
        fontWeight: 'bold',
        fontFamily: Fonts.regular
    },
    introView1:{
        marginTop: vs(10),
        marginHorizontal: hs(10)
    },
    introText1:{
        fontSize: fs(13),
        color: 'black',
    },
    introView2:{
        marginTop: vs(3)
    },
    introText2:{
        fontSize: fs(13),
        color: 'black'
    },
    introView3:{
        marginTop: vs(3)
    },
    introText3:{
        fontSize: fs(13),
        color: 'black'
    },
    borderStyle:{
        marginTop: vs(10),
        flexDirection: 'row',
    },
    viewBorder:{
        borderWidth: 1,
        height: vs(10),
        width: hs(10),
        borderRadius: 10,
        backgroundColor: '#ff7900',
        borderColor: '#ff7900'
    },
    safeAreaView2:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    page2:{
        width: '100%',
        height: "60%",
        // resizeMode: 'contain'
    }
})
