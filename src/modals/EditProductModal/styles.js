import {StyleSheet} from 'react-native'
import { fs, hs, vs } from '../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    },
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container3: {
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: vs(280),
        width: '92%',
    },
    container4: {
        marginTop: vs(20),
        alignItems: 'center'
    },
    label: {
        fontSize: fs(20),
        fontWeight: 'bold'
    },
    border: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: "#f2f2f2"
    },
    container5: {
        borderWidth: 1,
        marginTop: vs(30),
        marginHorizontal: hs(15),
        height: vs(50),
        borderColor: "#f2f2f2",
        borderRadius: 5
    },
    container6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(5),
    },
    labe2: {
        fontSize: fs(13),
        marginTop: vs(17),
        marginLeft: hs(10)
    },
    cameraPicture: {
        width: vs(30),
        height: hs(30),
        marginTop: vs(10),
        resizeMode: 'contain'
    },
    border2: {
        borderWidth: 1,
        marginTop: vs(20),
        marginHorizontal: hs(15),
        borderColor: "#f2f2f2"
    },
    container7: {
        borderWidth: 1,
        marginTop: vs(20),
        marginHorizontal: hs(15),
        height: vs(50),
        borderColor: "#f2f2f2",
        borderRadius: 5
    },
    contaier8: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(5),
    },
    label3: {
        fontSize: fs(13),
        marginTop: vs(17),
        marginLeft: hs(10)
    },
    libraryPicture: {
        width: vs(30),
        height: hs(30),
        marginTop: vs(10),
        resizeMode: 'contain'
    }
})

export default styles;