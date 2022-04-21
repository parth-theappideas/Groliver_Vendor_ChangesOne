import {StyleSheet} from 'react-native'
import { hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    container2:{
        // marginBottom: vs(30),
        marginVertical: vs(20),
        alignSelf: 'flex-end',
        marginHorizontal: hs(20)
    },
    addimg:{
        width: hs(50),
        height: vs(50),
        resizeMode: 'contain'
    }
})

export default styles;