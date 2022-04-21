import { StyleSheet } from 'react-native'
import { fs, hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container2: {
        alignItems: 'center',
    },
    uploadimg: {
        resizeMode: 'contain',
        width: hs(150),
        height: vs(150),
        marginTop: vs(10)
    },
    container3: {
        marginTop: vs(30),
        borderWidth: 1,
        marginHorizontal: hs(20),
        height: vs(60),
        borderColor: '#f2f2f2',
        borderRadius: 5
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        marginTop: vs(20),
        fontSize: fs(15),
        marginHorizontal: hs(10),
        fontWeight: 'bold'
    },
    container5: {
        flexDirection: 'row',
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    tickimg: {
        width: hs(15),
        height: vs(15),
        resizeMode: 'contain',
    },
    rightimg: {
        width: hs(15),
        height: vs(15),
        resizeMode: 'contain',
        tintColor: '#000',
        // marginLeft: hs(10)
    },
    container6: {
        marginTop: vs(30),
        borderWidth: 1,
        marginHorizontal: hs(20),
        height: vs(60),
        borderColor: '#f2f2f2',
        borderRadius: 5
    },
    container7: {
        marginTop: vs(30),
        alignItems: 'center'
    },
    label2: {
        fontSize: fs(16),
        color: '#3AB54A',
    },
    label3: {
        fontSize: fs(16),
        color: 'red',
    }
})

export default styles;