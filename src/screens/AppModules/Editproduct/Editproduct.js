import React, { useState, useEffect } from "react";
import { Image, ScrollView, StatusBar, FlatList } from 'react-native'
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import { Picker } from '@react-native-picker/picker'
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";
import { Formik } from "formik";
import * as yup from 'yup'
import EditProductitems from "../../../components/Flatlistitems/EditProductitems/EditProductitems";
import EditProductModal from "../../../modals/EditProductModal/EditProductModal";

const EditProduct = ({ }) => {
    const [categoryValue, setCategoryValue] = useState({
        id: 1,
        cat_name: 'Fruits'
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');
    const [weightValue, setWeightValue] = useState("Select");

    const CategoriesData = [
        {
            id: 1,
            cat_name: 'Fruits'
        },
        {
            id: 2,
            cat_name: 'Vegetables'
        },
        {
            id: 3,
            cat_name: 'Drinks'
        }
    ]

    const SubcategoriesData = [
        {
            id: 1,
            cat_id: 1,
            sub_name: 'Banana'
        },
        {
            id: 2,
            cat_id: 1,
            sub_name: 'Apple'
        },
        {
            id: 3,
            cat_id: 2,
            sub_name: 'Tomato'
        },
        {
            id: 4,
            cat_id: 2,
            sub_name: 'Potato'
        }
    ]

    useEffect(() => {
        const subCategoryList = SubcategoriesData.filter((item, index) => {
            return item.cat_id === 3;
        })
        console.log(subCategoryList);
    }, []);

    const EditProductSchema = yup.object({
        title: yup.string()
            .required("Required *"),
        description: yup.string()
            .required("Required *"),
        price: yup.string()
            .required("Required *")
    })

    async function EditProductHandler(values) {
        console.log(values);
    }

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <EditProductitems
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        picture={picture}
                        setPicture={setPicture}
                    />
                    <Formik
                        initialValues={{ title: '', description: '', price: '' }}
                        validationSchema={EditProductSchema}
                        onSubmit={EditProductHandler}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                            <>
                                <Container containerStyle={styles.container6}>
                                    <Label style={styles.label}>Category</Label>

                                    <Container containerStyle={styles.container7}>
                                        <Picker
                                            style={{
                                                width: screenWidth * 0.89,
                                                height: vs(45),
                                            }}
                                            selectedValue={categoryValue}
                                            onValueChange={(itemValue) => setCategoryValue(itemValue)}
                                        >
                                            {CategoriesData.map((item, index) => {
                                                return (
                                                    <Picker.Item label={item.cat_name} style={{
                                                        fontSize: fs(14)
                                                    }} value={index} key={index} />
                                                )
                                            })}
                                        </Picker>
                                    </Container>
                                </Container>

                                <Container containerStyle={styles.container6}>
                                    <Label style={styles.label}>Title</Label>
                                    <InputBox
                                        placeholder="Select"
                                        inputStyle={{
                                            maxWidth: '75%'
                                        }}
                                        containerStyle={{
                                            width: screenWidth * 0.89,
                                            backgroundColor: '#fff',
                                            borderColor: '#Fff',
                                            borderColor: '#F2f2f2',
                                            marginTop: vs(10),
                                            alignSelf: 'center'
                                        }}
                                        inputHeight={50}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                        textSize={14}
                                    />
                                    {errors.title && <Label style={{
                                        color: 'red',
                                        fontSize: fs(12)
                                    }}>{errors.title}</Label>}
                                </Container>

                                <Container containerStyle={styles.container6}>
                                    <Label style={styles.label}>Description</Label>

                                    <InputBox
                                        placeholder="Type here..."
                                        inputStyle={{
                                            maxWidth: '75%'
                                        }}
                                        containerStyle={{
                                            width: screenWidth * 0.89,
                                            backgroundColor: '#fff',
                                            borderColor: '#F2f2f2',
                                            marginTop: vs(10),
                                            alignSelf: 'center'
                                        }}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.description}
                                        inputHeight={80}
                                        textSize={14}
                                    />
                                    {errors.description && <Label style={{
                                        color: 'red',
                                        fontSize: fs(12)
                                    }}>{errors.description}</Label>}
                                </Container>

                                <Container containerStyle={styles.container8}>
                                    <Label style={styles.label2}>Price</Label>
                                    <Label style={styles.label3}>Weight</Label>
                                </Container>

                                <Container containerStyle={styles.container9}>
                                    <InputBox
                                        placeholder="$ XX"
                                        inputStyle={{
                                            maxWidth: '75%'
                                        }}
                                        containerStyle={{
                                            width: screenWidth * 0.40,
                                            backgroundColor: '#fff',
                                            borderColor: '#F2f2f2',
                                            marginTop: vs(10),
                                        }}
                                        onChangeText={handleChange('price')}
                                        onBlur={handleBlur('price')}
                                        value={values.price}
                                        inputHeight={50}
                                        textSize={14}
                                    />

                                    <Container containerStyle={styles.container10}>
                                        <Picker
                                            style={{
                                                width: screenWidth * 0.45,
                                                height: vs(40),
                                            }}
                                            selectedValue={weightValue}
                                            onValueChange={(itemValues) => setWeightValue(itemValues)}
                                        >
                                            <Picker.Item label="12 Piece" style={{
                                                fontSize: fs(14)
                                            }} value="key0" />
                                            <Picker.Item label="22 Piece" style={{
                                                fontSize: fs(14)
                                            }} value="key1" />
                                            <Picker.Item label="32 Piece" style={{
                                                fontSize: fs(14)
                                            }} value="key2" />
                                        </Picker>
                                    </Container>
                                </Container>

                                <Container>
                                    {errors.price && <Label style={{
                                        color: 'red',
                                        fontSize: fs(12)
                                    }}>{errors.price}</Label>}
                                </Container>

                                <Btn
                                    title="Save"
                                    btnStyle={{
                                        backgroundColor: '#009345',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        width: screenWidth * 0.90,
                                        alignSelf: 'center',
                                        marginTop: vs(20),
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
            </Container>
            <EditProductModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPicture={setPicture}
            />
        </ScrollView>
    )
}

export default EditProduct;