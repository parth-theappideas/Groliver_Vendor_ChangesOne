import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs , fs} from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    label:{
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container3:{
        flexDirection: 'row'
    },
    label2:{
        fontSize: fs(14),
        marginTop: vs(5),
        fontFamily: Fonts.regular
    },
    label3:{
        fontSize: fs(14),
        fontFamily: Fonts.regular,
        marginTop: vs(5),
        marginLeft: hs(5)
    },
    itemimg:{
        width: hs(15),
        height: vs(15),
        resizeMode: 'contain',
        tintColor:'#000'
    },
    container4:{
        flexDirection: 'row'
    },
    label4:{
        fontSize: fs(14),
        fontFamily: Fonts.regular,
        marginTop: vs(5)
    },
    label5:{
        fontSize: fs(14),
        fontFamily: Fonts.regular,
        marginTop: vs(5),
        color: '#3AB54A',
        marginLeft: hs(5)
    },
    container5:{
        borderWidth: 1,
        borderColor: '#f2f2f2',
        marginTop: vs(20),
    }
})

export default styles;