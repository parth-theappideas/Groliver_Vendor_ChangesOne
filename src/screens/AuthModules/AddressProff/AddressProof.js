import React, { useRef, useState } from "react";
import { Image, ScrollView, View, Pressable, ActivityIndicator, StatusBar } from 'react-native'
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { Formik } from "formik";
import { screenWidth, vs } from "../../../utils/stylesUtils";
import styles from "./styles";
import * as yup from 'yup'
import Btn from "../../../components/Btn";
import AddressProffModal from "../../../modals/AddressproffModal";
import *as Globals from '../../../utils/Globals'
import { addressproofApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";

const AddressProff = ({ navigation }) => {
    const modalizeRef = useRef(null);

    const onClose = () => {
        modalizeRef.current?.close();
    };

    const [picture, setPicture] = useState('');

    const [Loading, setLoading] = useState(false);

    async function AddressProffhandler() {
        setLoading(true);
        var formData = new FormData();
        let file_name = picture?.substring(picture?.lastIndexOf('/') + 1);

        formData.append('address_proof', {
            uri: picture,
            name: file_name,
            type: 'image/jpg'
        });

        let response = await addressproofApi({ data: formData });
        console.log("response", response);

        if (response.status == "Success") {
            console.log('response', response);
            setLoading(false);
            navigation.navigate("UploadDocs");
        } else {
            alert(response.message);
            setLoading(false);
        }
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container2}>
                <Label style={styles.label}>Address Proff*</Label>

                <Container containerStyle={styles.container4}>
                    <Container onPress={() => modalizeRef.current.open()}>
                        <Container containerStyle={styles.container3}>
                            <Pressable onPress={() => modalizeRef.current.open()}>
                                <Image
                                    source={picture ? { uri: picture } : require('../../../assets/images/addpics.png')}
                                    style={picture ? styles.Clickimg : styles.addimg}
                                />
                            </Pressable>
                        </Container>
                    </Container>

                    <Btn
                        title="Save"
                        btnStyle={{
                            backgroundColor: '#009345',
                            borderRadius: 5,
                            justifyContent: 'center',
                            width: '99%',
                            alignSelf: 'center',
                            marginTop: vs(45),
                        }}
                        btnHeight={50}
                        textColor={'white'}
                        textSize={14}
                        onPress={() => AddressProffhandler()}
                    />
                </Container>
            </Container>

            <AddressProffModal
                modalizeRef={modalizeRef}
                onClose={onClose}
                picture={picture}
                setPicture={setPicture}
            />

            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default AddressProff;