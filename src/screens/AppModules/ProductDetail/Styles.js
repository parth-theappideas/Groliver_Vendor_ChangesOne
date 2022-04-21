import { StyleSheet } from 'react-native'
import { hs, vs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container3: {
        flexDirection: 'row',
        marginTop: vs(10),
        marginHorizontal: hs(15)
    },
    container4: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemimg: {
        width: hs(60),
        height: hs(60),
        resizeMode: 'contain',
    },
    container5: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hs(10)
    },
    container6: {
        flexDirection: 'row',
        marginHorizontal: hs(15),
        marginTop: vs(10),
        justifyContent: 'space-around',
        marginBottom: vs(10)
    }
})

export default styles;