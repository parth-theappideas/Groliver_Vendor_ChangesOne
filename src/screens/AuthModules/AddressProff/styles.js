import { StyleSheet } from 'react-native'
import { fs, hs, screenHeight, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
    },
    container2: {
        marginTop: vs(10),
        marginHorizontal: hs(20)
    },
    label: {
        fontSize: fs(16)
    },
    container3: {
        borderWidth: 1,
        height: screenHeight * 0.30,
        width: screenWidth * 0.92,
        marginTop: vs(10),
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addimg: {
        width: hs(70),
        height: vs(70),
    },
    Clickimg: {
        width: screenWidth * 0.92,
        height: screenHeight * 0.30,
    },
    container4: {
        marginTop: vs(20),
    }
})

export default styles;