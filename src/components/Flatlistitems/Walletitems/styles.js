import { StyleSheet } from 'react-native'
import { fs, hs, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: hs(15),
    },
    container2: {
        borderWidth: 1,
        height: vs(200),
        marginHorizontal: hs(5),
        marginTop: vs(10),
        borderRadius: 10,
        backgroundColor: '#f0974f',
        borderColor: '#f0974f'
    },
    container3: {
        alignItems: 'center',
        marginTop: vs(20)
    },
    label: {
        color: '#fff',
        fontSize: fs(16),
    },
    container4: {
        alignItems: 'center',
        marginTop: vs(20),
        flexDirection: 'row',
        alignSelf: 'center'
    },
    coin_img: {
        width: hs(25),
        height: vs(25),
        resizeMode: 'contain'
    },
    label2: {
        fontSize: fs(20),
        color: 'white',
        marginLeft: hs(10)
    },
    container5: {
        marginTop: vs(20),
        marginHorizontal: hs(5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label3: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    container6: {
        borderWidth: 1,
        height: vs(130),
        marginHorizontal: hs(5),
        borderRadius: 10,
        marginTop: vs(20),
        borderColor: '#f0f0f0',
    },
    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label4: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold',
        marginTop: vs(15),
        marginHorizontal: hs(10)
    },
    container8: {
        flexDirection: 'row',
        marginHorizontal: hs(10),
        marginTop: vs(10)
    },
    edit_img: {
        width: hs(25),
        height: vs(25),
        resizeMode: 'contain',
        marginRight: hs(5)
    },
    del_img: {
        width: hs(25),
        height: vs(25),
        resizeMode: 'contain',
        marginRight: hs(5)
    },
    container9: {
        marginTop: vs(10),
        marginHorizontal: hs(10)
    },
    label5: {
        fontSize: fs(18),
        color: '#000'
    },
    label6: {
        fontSize: fs(16),
        marginTop: vs(5),
        color: '#000'
    }
})

export default styles;