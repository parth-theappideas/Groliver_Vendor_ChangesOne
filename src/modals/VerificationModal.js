import React from 'react'
import { Modal, Image, StyleSheet } from 'react-native'
import Btn from '../components/Btn';
import Container from '../components/container';
import Label from '../components/Label';
import Images from '../const/Images';
import { vs, hs, fs } from '../utils/stylesUtils';

const VerificationModal = ({ modalVisible, setModalVisible, navigation }) => {
    return (
        <Container containerStyle={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                statusBarTranslucent={true}
            >
                <Container containerStyle={styles.container2}>
                    <Container containerStyle={styles.container3}>
                        <Image
                            source={Images.success}
                            style={styles.successImg}
                        />

                        <Container containerStyle={styles.container4}>
                            <Label onPress={() => setModalVisible(!modalVisible)} style={styles.label}>Welcome!!!</Label>
                            <Label onPress={() => setModalVisible(!modalVisible)} style={styles.label2}>Your account has been verified</Label>
                        </Container>

                        <Btn
                            title="Go to dashboard"
                            btnStyle={{
                                backgroundColor: '#009345',
                                borderRadius: 5,
                                justifyContent: 'center',
                                width: '92%',
                                borderColor: '#fff',
                                alignSelf: 'center',
                                marginTop: vs(20),
                            }}
                            btnHeight={50}
                            textColor={'#fff'}
                            labelStyle={{
                                fontWeight: 'bold'
                            }}
                            textSize={14}
                            onPress={() => navigation.navigate("Dashboard")}
                        />
                    </Container>
                </Container>
            </Modal>
        </Container>
    )
}

export default VerificationModal;

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
        alignItems: "center",
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: vs(320),
        width: '92%',
    },
    successImg: {
        width: hs(100),
        height: vs(100),
        resizeMode: 'contain',
        marginTop: vs(30)
    },
    container4: {
        marginTop: vs(25),
        alignItems: 'center'
    },
    label: {
        fontSize: fs(18),
        color: '#000',
        fontWeight: 'bold'
    },
    label2: {
        fontSize: fs(16),
        marginTop: vs(10)
    }
})