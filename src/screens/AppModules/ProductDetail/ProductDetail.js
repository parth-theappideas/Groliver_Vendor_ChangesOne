import React from "react";
import { View, Text, ScrollView, Image, FlatList, StatusBar } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Productdetailitems from "../../../components/Flatlistitems/ProductDetailitems/Productdetailitems";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";

const ProductDetail = ({ navigation }) => {

    const ProductData = [
        {
            id: 1,
            title: 'Organic Bananas',
            cat_name: 'Category name : ',
            categories: 'Fruits',
            unit: 'Weight : ',
            piece: '12 piece',
            discount: 'Offer discount',
            dis_per: '5 %',
            price: 'Price : ',
            amount: '$ 4.99',
            change_img: require('../../../assets/images/edit.png'),
            delete_img: require('../../../assets/images/delete.png'),
            heading: 'Product description',
            des_txt1: 'Lorem Ipsum is simply dummy text of the printing and',
            des_txt2: 'typesetttig industry. Lorem Ipsum has been the',
            des_txt3: 'industrys standard dummy text'
        },
    ];

    const renderProductdetail = ({ item }) => {
        return (
            <Productdetailitems
                item={item}
            />
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container3}>
                <Container containerStyle={styles.container4}>
                    <Image
                        source={Images.item1}
                        style={styles.itemimg}
                    />
                </Container>

                <Container containerStyle={styles.container5}>
                    <Image
                        source={Images.item}
                        style={styles.itemimg}
                    />
                </Container>
            </Container>

            <FlatList
                data={ProductData}
                renderItem={renderProductdetail}
                keyExtractor={(item) => item.id}
            />

            <Container containerStyle={styles.container6}>
                <Btn
                    title="Delete"
                    btnStyle={{
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        width: '48%',
                        borderColor: 'red',
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}
                    btnHeight={50}
                    textColor={'red'}
                    textSize={14}
                />
                <Btn
                    title="Edit"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        width: '48%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => navigation.navigate("EditProduct")}
                />
            </Container>
        </View>
    )
}

export default ProductDetail;