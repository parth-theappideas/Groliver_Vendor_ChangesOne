import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs , fs} from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingBottom: vs(20),
        marginHorizontal: hs(10)
    },
    itemimg:{
        width: hs(50),
        height: vs(50),
        resizeMode: 'contain'
    },
    container2:{
        marginTop: vs(10),
        marginLeft: hs(10)
    },
    label:{
        fontFamily: Fonts.regular,
        fontSize: fs(16),
        color: '#000'
    },
    label2:{
        fontFamily: Fonts.regular,
        fontSize: fs(13),
    }
})

export default styles;