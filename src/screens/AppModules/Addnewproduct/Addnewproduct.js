import React, { useState, useEffect } from "react";
import { ScrollView, ToastAndroid, StatusBar } from 'react-native'
import { fs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import { Picker } from '@react-native-picker/picker'
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";
import { Formik } from "formik";
import * as yup from 'yup'
import { addnewproductApi } from "../../../utils/apiServices";
import AddnewProductModal from "../../../modals/AddnewProductModal/AddnewProductModal";
import AddnewProductitems from "../../../components/Flatlistitems/AddnewProductitems/AddnewProductitems";

const Addnewproduct = ({ navigation }) => {

    const [categoryValue, setCategoryValue] = useState({
        id: 1,
        cat_name: 'Fruits'
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');

    const dummyArray = [
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

    const dummyArray2 = [
        {
            id: 1,
            cat_id: 1,
            sub_cat_name: 'Banana',
        },
        {
            id: 2,
            cat_id: 1,
            sub_cat_name: 'Apple',
        },
        {
            id: 3,
            cat_id: 2,
            sub_cat_name: 'Tomamto',
        },
        {
            id: 4,
            cat_id: 2,
            sub_cat_name: 'Potato',
        },
    ]

    useEffect(() => {
        const subCategoryList = dummyArray2.filter((item, index) => {
            return item.cat_id === 3;
        })
        console.log("Lists", subCategoryList);
    }, [])

    const AddnewproductSchema = yup.object({
        title: yup
            .string()
            .required("Required *"),
        category: yup
            .string()
            .required("Required *"),
        description: yup
            .string(),
        price: yup
            .string()
            .required("Required *"),
        weight: yup
            .string()
            .required("Required *"),
        discount: yup
            .number(),
        stock: yup
            .number()
            .required("Required *"),
    })

    async function AddnewproductHandler(values) {
        console.log(values);

        var formData = new FormData();
        formData.append("name", values.name);
        formData.append("company_name", values.company_name);
        formData.append("cat_id", categoryValue.id);
        formData.append("price", values.price);
        formData.append("stock", values.stock);
        formData.append("sub_cat_id", values.sub_cat_id);
        formData.append("weight", values.weight);
        formData.append("flag", values.flag);
        formData.append("discount", values.discount);
        formData.append("description", values.description);
        formData.append("offer_flag", values.offer_flag);
        formData.append("unit", values.unit);

        let response = await addnewproductApi({ data: formData })
        console.log("response", response);

        if (response.status == 'Success') {
            navigation.navigate("Myproducts");
            ToastAndroid.show("Products add Successfully", ToastAndroid.SHORT);
            console.log("response", response);
        } else {
            alert(response.message);
            navigation.navigate("Addnewproduct");
        }
    }

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>

                <AddnewProductitems
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    picture={picture}
                    setPicture={setPicture}
                />
                <Formik
                    validationSchema={AddnewproductSchema}
                    initialValues={{ title: '', description: '', price: '', category: '', weight: '', discount: '', stock: '' }}
                    onSubmit={AddnewproductHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container4}>
                                <Label style={styles.label}>Category</Label>
                                <Container containerStyle={styles.container5}>
                                    <Picker
                                        style={{
                                            width: screenWidth * 0.90,
                                            height: vs(50),
                                        }}
                                        selectedValue={categoryValue}
                                        onValueChange={(itemValue) => setCategoryValue(itemValue)}
                                    >
                                        {dummyArray.map((item, index) => {
                                            return (
                                                <Picker.Item label={item.cat_name} style={{
                                                    fontSize: fs(14)
                                                }} value={item.cat_name} key={index} />
                                            )
                                        })}
                                    </Picker>
                                </Container>
                            </Container>

                            <Container containerStyle={styles.container4}>
                                <Label style={styles.label}>Title</Label>
                                <InputBox
                                    placeholder="Select"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.90,
                                        backgroundColor: '#fff',
                                        borderColor: '#Fff',
                                        borderColor: '#F2f2f2',
                                        marginTop: vs(10),
                                        alignSelf: 'center'
                                    }}
                                    onChangeText={handleChange('title')}
                                    onBlur={handleBlur('title')}
                                    value={values.title}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.title && <Label style={{
                                    color: 'red',
                                    fontSize: fs(12),
                                    marginTop: vs(5)
                                }}>{errors.title}</Label>}
                            </Container>

                            <Container containerStyle={styles.container4}>
                                <Label style={styles.label}>Description</Label>

                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.90,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2f2f2',
                                        marginTop: vs(10),
                                        alignSelf: 'center'
                                    }}
                                    inputHeight={80}
                                    textSize={14}
                                />
                            </Container>

                            <Container containerStyle={styles.container6}>
                                <Label style={styles.label2}>Price</Label>
                                <Label style={styles.label3}>Weight</Label>
                            </Container>

                            <Container containerStyle={styles.container7}>
                                <InputBox
                                    placeholder="Price"
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

                                <InputBox
                                    placeholder="Weight"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.45,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2f2f2',
                                        marginTop: vs(10),
                                    }}
                                    onChangeText={handleChange('weight')}
                                    onBlur={handleBlur('weight')}
                                    value={values.weight}
                                    inputHeight={50}
                                    textSize={14}
                                />
                            </Container>

                            <Container containerStyle={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                {errors.price && <Label style={{
                                    color: 'red',
                                    fontSize: fs(12),
                                    marginTop: vs(5)
                                }}>{errors.price}</Label>}

                                {errors.weight && <Label style={{
                                    color: 'red',
                                    fontSize: fs(12),
                                    marginTop: vs(5)
                                }}>{errors.weight}</Label>}
                            </Container>

                            <Container containerStyle={styles.container6}>
                                <Label style={styles.label2}>Discount</Label>
                                <Label style={styles.label3}>Stock</Label>
                            </Container>

                            <Container containerStyle={styles.container7}>
                                <InputBox
                                    placeholder="Discount"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.40,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2f2f2',
                                        marginTop: vs(10),
                                    }}
                                    onChangeText={handleChange('discount')}
                                    onBlur={handleBlur('discount')}
                                    value={values.discount}
                                    inputHeight={50}
                                    textSize={14}
                                />

                                <InputBox
                                    placeholder="Stock"
                                    inputStyle={{
                                        maxWidth: '75%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.45,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2f2f2',
                                        marginTop: vs(10),
                                    }}
                                    onChangeText={handleChange('stock')}
                                    onBlur={handleBlur('stock')}
                                    value={values.stock}
                                    inputHeight={50}
                                    textSize={14}
                                />
                            </Container>

                            <Btn
                                title="Add"
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

            <AddnewProductModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPicture={setPicture}
            />
        </ScrollView>
    )
}

export default Addnewproduct;