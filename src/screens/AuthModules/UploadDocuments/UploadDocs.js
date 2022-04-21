import React, { useState, useEffect } from 'react'
import { Image, ScrollView, StatusBar } from 'react-native'
import Btn from '../../../components/Btn'
import Container from '../../../components/container'
import Label from '../../../components/Label'
import Images from '../../../const/Images'
import { vs } from '../../../utils/stylesUtils'
import styles from './Style'

const UploadDocs = ({ navigation, route }) => {

    const [success, setSuccess] = useState(false);

    const UploadDocsHandler = async () => {
        var formData = new FormData();
        formData.append("");

        let result = await fetch("https://chessmafia.com/php/Groliver/api/vendor/document-status", {
            method: "GET"
        })

        result = await result.json()
        if (result.status == "Success") {
            console.log("Result", result);

            // navigation.navigate("Verification", {
            //     mobile_no: route.params.mobile_no,
            //     routes: [{ name: 'Verification' }]
            // })

        } else {
            alert(result.message);
        }
    }

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(20)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.upload}
                        style={styles.uploadimg}
                    />
                </Container>

                <Container containerStyle={styles.container3}>
                    <Container onPress={() => navigation.navigate("AddressProff")}>
                        <Container containerStyle={styles.container4}>
                            <Label style={styles.label}>Address Proff</Label>

                            <Container containerStyle={styles.container5}>
                                <Image
                                    source={Images.tick}
                                    style={styles.tickimg}
                                />

                                <Image
                                    source={Images.right}
                                    style={styles.rightimg}
                                />
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.container6}>
                    <Container onPress={() => navigation.navigate("IdProff")}>
                        <Container containerStyle={styles.container4}>
                            <Label style={styles.label}>ID Proff</Label>

                            <Container containerStyle={styles.container5}>
                                <Image
                                    source={Images.tick}
                                    style={styles.tickimg}
                                />

                                <Image
                                    source={Images.right}
                                    style={styles.rightimg}
                                />
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.container7}>
                    <Container containerStyle={{
                        borderWidth: 1,
                        width: "89%",
                        height: vs(150),
                        borderColor: '#f2f2f2',
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Label style={styles.label2}>Your document has been verified</Label>
                        <Label style={styles.label3}>Waiting for document</Label>
                        <Label style={styles.label3}>verification</Label>
                    </Container>
                </Container>

                <Btn
                    title="Done"
                    btnStyle={{
                        backgroundColor: success ? "#009345" : "grey",
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '89%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => UploadDocsHandler()}
                />
            </Container>
        </ScrollView>
    )
}

export default UploadDocs;