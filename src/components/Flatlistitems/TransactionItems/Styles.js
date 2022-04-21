import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs,fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: vs(20),
        marginHorizontal: hs(20),
        backgroundColor: 'white'
    },
    container2:{
        borderWidth: 1,
        height: vs(100),
        borderRadius: 5,
        borderColor: '#f2f2f2'
    },
    label:{
        fontSize: fs(16),
        color: '#000',
        fontFamily: Fonts.regular,
        marginHorizontal: hs(10),
        marginTop: vs(10),
        fontWeight: 'bold'
    },
    container3:{
        marginTop: vs(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(10)
    },
    label2:{
        fontFamily: Fonts.regular,
        fontSize: fs(16)
    },
    label3:{
        fontSize: fs(16),
        fontFamily: Fonts.regular,
        color: '#3AB54A'
    },
    container4:{
        marginTop: vs(5),
        flexDirection: 'row',
        marginHorizontal: hs(10)
    },
    label4:{
        fontFamily: Fonts.regular,
        fontSize: fs(16)
    },
    label5:{
        fontSize: fs(16),
        fontFamily: Fonts.regular,
        marginLeft: hs(7)
    }
})

export default styles;