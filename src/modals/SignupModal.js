import React from 'react'
import { Modal, Image, StyleSheet, Pressable, View, TouchableWithoutFeedback } from 'react-native'
import Btn from '../components/Btn';
import Container from '../components/container';
import Label from '../components/Label';
import Images from '../const/Images';
import { vs, hs, fs } from '../utils/stylesUtils';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const SignupModal = ({ modalVisible, setModalVisible, setPicture }) => {

    const Camerafile = () => {
        let Options = {
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchCamera(Options, (response) => {
            console.log('Response', response);
            if (response.didCancel) {
                console.log("Cancelled");
            } else if (response.errorCode) {
                console.log('Image error', response.errorCode);
            } else {
                const ImageAccess = response.assets[0].uri
                setPicture(ImageAccess);
                setModalVisible(!modalVisible);
                console.log(response);
            }
        })
    }

    const Choosefile = () => {
        let Options = {
            meadiaType: 'photo',
            maxWidth: 300,
            maxHeight: 550,
            quality: 1
        };
        launchImageLibrary(Options, (response) => {
            if (response.assets) {
                const ImageAccess = response.assets[0].uri
                setPicture(ImageAccess);
                setModalVisible(!modalVisible);
                console.log(response);
            }
        })
    }

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
                        <Container containerStyle={styles.container4}>
                            <Label style={styles.label}>Select Your Choise !!</Label>
                        </Container>

                        <Container containerStyle={styles.border} />

                        <Container onPress={() => Camerafile()}>
                            <Container containerStyle={styles.container5}>
                                <Container containerStyle={styles.container6}>
                                    <Label style={styles.labe2}>Take Picture</Label>
                                    <Image
                                        source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/08/18/34/camera-1724286_1280.png' }}
                                        style={styles.cameraPicture}
                                    />
                                </Container>
                            </Container>
                        </Container>

                        <Container containerStyle={styles.border2} />

                        <Container onPress={() => Choosefile()}>
                            <Container containerStyle={styles.container7}>
                                <Container containerStyle={styles.contaier8}>
                                    <Label style={styles.label3}>Choose image</Label>
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Icons8_flat_gallery.svg/1024px-Icons8_flat_gallery.svg.png' }}
                                        style={styles.libraryPicture}
                                    />
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Modal>
        </Container>
    )
}

export default SignupModal;

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