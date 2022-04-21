import {StyleSheet} from 'react-native'
import { hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        // marginTop:vs(10)
    },
    container2:{
        borderWidth: 1,
        marginTop: vs(10),
        borderRadius: 5,
        borderColor: '#f2f2f2',
        marginHorizontal: hs(20)
    }
})

export default styles;