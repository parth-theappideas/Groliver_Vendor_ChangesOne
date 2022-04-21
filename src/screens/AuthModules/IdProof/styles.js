import { StyleSheet } from 'react-native'
import { fs, hs, screenHeight, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    container2: {
        marginTop: vs(10),
        marginHorizontal: hs(20)
    },
    label: {
        fontSize: fs(16)
    },
    container3: {
        marginTop: vs(5)
    },
    container4: {
        borderWidth: 1,
        height: screenHeight * 0.30,
        width: screenWidth * 0.92,
        marginTop: vs(10),
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container5: {
        marginTop: vs(20)
    },
    addimg: {
        width: hs(70),
        height: vs(70),
    },
    Libraryimg: {
        width: screenWidth * 0.92,
        height: screenHeight * 0.30,
    },
})

export default styles;