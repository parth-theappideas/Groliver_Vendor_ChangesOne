import {StyleSheet} from 'react-native'
import { fs, hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    container2:{
        marginTop: vs(20),
        marginHorizontal: hs(20)
    },
    container3:{
        borderWidth: 1,
        height: vs(45),
        borderRadius: 5,
        borderColor: '#f2f2f2'
    },
    container4:{
        marginHorizontal: hs(10),
        flexDirection: 'row',
        marginTop: vs(10),
    },
    select_img:{
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
    },
    unselect_img:{
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
    },
    label:{
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(2),
        marginLeft: hs(10)
    }
})

export default styles;