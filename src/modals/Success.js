import React, { useRef } from "react";
import { View, Image, Text, Dimensions,TouchableOpacity,StyleSheet } from 'react-native'
import Btn from "../components/Btn";
import InputBox from '../components/InputBox'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from "../utils/stylesUtils";
import Images from "../const/Images";
import Container from "../components/container";
import Label from "../components/Label";


const Success = ({ SuccessRef, onCloseModal }) => {

    const RenderSuccess = () => {
        return(
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.success}
                        style={styles.successimg}
                    />
                    <Label style={styles.label}>Success!!!</Label>
                    <Label style={styles.label2}>Money withdraw successfully</Label>
                </Container>

                <Btn
                    title="Done"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        // elevation: 2,
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => onCloseModal()}
                />
            </Container>
        )
    } 
    return (
        <Modalize ref={SuccessRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >
            {RenderSuccess()}
        </Modalize>
    )
}

export default Success;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    container2:{
        alignItems: 'center'
    },
    successimg:{
        width: hs(100),
        height: vs(100),
        resizeMode: 'contain',
        marginTop: vs(30)
    },
    label:{
        marginTop: vs(20),
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    label2:{
        marginTop: vs(10),
        fontSize: fs(16),
    }
})