import { StyleSheet } from 'react-native'
import { hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        // alignItems: 'flex-start'
    },
    container2:{
        borderWidth: 1,
        width: screenWidth * 0.28,
        height: vs(120),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_img:{
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain'
    },
    Clickimg: {
        width:hs(120),
        height: vs(120),
        resizeMode:'contain'
    },
    pressableBtn:{
        position: 'absolute',
        top: 0,
        right: 0,
        marginHorizontal: hs(5),
        marginTop: vs(5)
    },
    del_img:{
        width: hs(15),
        height: hs(15),
        resizeMode: 'contain',
    }
})

export default styles;