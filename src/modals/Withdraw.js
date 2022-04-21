import React from "react";
import { Image, Pressable, StyleSheet } from 'react-native'
import Btn from "../components/Btn";
import InputBox from '../components/InputBox'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from "../utils/stylesUtils";
import Container from "../components/container";
import Label from "../components/Label";


const Withdraw = ({ WithdrawRef, onClose }) => {

    const RenderWithdraw = () => {
        return (
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>Withdraw</Label>

                    <Pressable onPress={() => onClose()}>
                        <Image
                            source={{
                                uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                            }}
                            style={styles.closeimg}
                        />
                    </Pressable>
                </Container>

                <Container containerStyle={styles.container3} />

                <Container containerStyle={styles.container4}>
                    <InputBox
                        placeholder="Enter amount"
                        inputStyle={{
                            maxWidth: '99%'
                        }}
                        containerStyle={{
                            width: '100%',
                            backgroundColor: '#fff',
                            borderColor: '#F2F2F2',
                            marginTop: vs(10)
                        }}
                        inputHeight={50}
                        textSize={14}
                        keyboardType="numeric"
                    />
                </Container>

                <Btn
                    title="Processed"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                />
            </Container>
        )
    }
    return (
        <Modalize ref={WithdrawRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >
            {RenderWithdraw()}
        </Modalize>
    )
}

export default Withdraw;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(20),
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    closeimg: {
        width: hs(20),
        height: vs(20)
    },
    container3: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
    container4: {
        marginHorizontal: hs(20),
        marginTop: vs(10)
    }
})