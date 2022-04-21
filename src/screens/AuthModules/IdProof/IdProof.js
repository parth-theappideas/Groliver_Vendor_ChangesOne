import React, { useRef, useState } from "react";
import { Image, ScrollView, Pressable,StatusBar } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import styles from "./styles";
import { screenWidth, vs } from "../../../utils/stylesUtils";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Btn from "../../../components/Btn";
import InputBox from "../../../components/InputBox";
import Images from "../../../const/Images";
import IdProofFrontModal from "../../../modals/IDProofFrontModal";
import IdProofBackModal from "../../../modals/IDProffBackModal";

const IdProff = ({ navigation }) => {

    const modalizeRef = useRef(null);

    const modalizeRefBack = useRef(null);

    const onClose = () => {
        modalizeRef.current?.close();
        modalizeRefBack.current?.close();
    };

    const [picture, setPicture] = useState();

    const [pictureback, setPictureBack] = useState();

    const IdProffSchema = yup.object({
        id_proof: yup.string()
            .required(""),
    })

    async function IdProffhandler(values) {
        console.log(values);
        var formData = new FormData();
        formData.append("id_proof", values.id_proof);

        let result = await fetch('https://chessmafia.com/php/Groliver/api/vendor/upload-id-document', {
            method: 'POST',
            body: formData,
        })

        result = await result.json()
        console.log("Result", result);
        if (result.status == "Success") {
            console.log('Result', result);
            navigation.navigate("UploadDocs");
        } else {
            alert(result.message);
        }
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container2}>
                <Formik
                    initialValues={{ id_proof: '' }}
                    validationSchema={IdProffSchema}
                    onSubmit={IdProffhandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container3}>
                                <Label style={styles.label}>ID front imager*</Label>

                                <Container onPress={() => modalizeRef.current.open()}>
                                    <Container containerStyle={styles.container4}>
                                        <Pressable onPress={() => modalizeRef.current.open()}>
                                            <Image
                                                source={picture ? { uri: picture } : require('../../../assets/images/addpics.png')}
                                                style={picture ? styles.Libraryimg : styles.addimg}
                                            />
                                        </Pressable>
                                    </Container>
                                </Container>
                            </Container>

                            <Container containerStyle={styles.container5}>
                                <Label style={styles.label}>ID back imager*</Label>

                                <Container onPress={() => modalizeRefBack.current.open()}>
                                    <Container containerStyle={styles.container4}>
                                        <Pressable onPress={() => modalizeRefBack.current.open()}>
                                            <Image
                                                source={pictureback ? { uri: pictureback } : require('../../../assets/images/addpics.png')}
                                                style={pictureback ? styles.Libraryimg : styles.addimg}
                                            />
                                        </Pressable>
                                    </Container>
                                </Container>
                            </Container>

                            <Btn
                                title="Save"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: screenWidth * 0.92,
                                    alignSelf: 'center',
                                    marginTop: vs(30),
                                }}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </Container>

            <IdProofFrontModal
                modalizeRef={modalizeRef}
                onClose={onClose}
                setPicture={setPicture}
            />

            <IdProofBackModal
                modalizeRefBack={modalizeRefBack}
                onClose={onClose}
                setPictureBack={setPictureBack}
            />
        </Container>
    )
}

export default IdProff;