import React from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import Productsitems from "../../../components/Flatlistitems/Productsitems/Productsitems";
import InputBox from '../../../components/InputBox'
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import styles from "./Styles";
import Addnewitems from "./Addnewitems";

const Myproducts = ({ navigation }) => {

    const ProductsData = [
        {
            id: 1,
            productName: 'Sprite Can',
            text3: '325ml',
            text: 'price',
            price: '$1.50',
            text2: 'remove',
            image: require('../../../assets/images/drink2.png')
        },
        {
            id: 2,
            productName: 'Egg Noodles',
            text3: '1 Kg',
            text: 'price',
            price: '$3.50',
            text2: 'remove',
            image: require('../../../assets/images/item3.png')
        },
        {
            id: 3,
            productName: 'Organic Bananas',
            text3: '12 piece',
            text: 'price',
            price: '$4.99',
            text2: 'remove',
            image: require('../../../assets/images/item1.png')
        },
        {
            id: 4,
            productName: 'Mayonnaises Egg',
            text3: '12 piece',
            text: 'price',
            price: '$4.99',
            text2: 'remove',
            image: require('../../../assets/images/drink2.png')
        },
    ];

    const renderProductitems = ({ item }) => {
        return (
            <Productsitems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <InputBox
                placeholder="Search"
                inputStyle={{
                    maxWidth: '75%'
                }}
                containerStyle={{
                    width: '90%',
                    backgroundColor: '#F2F2F2',
                    borderColor: '#F2F2F2',
                    elevation: 1,
                    marginTop: vs(10),
                    alignSelf: 'center'
                }}
                inputHeight={50}
                textSize={14}
                leftIcon={() => <Image source={Images.search_2} style={{
                    width: hs(20),
                    height: vs(20),
                    marginHorizontal: hs(10)
                }} />}
            />

            <FlatList
                data={ProductsData}
                renderItem={renderProductitems}
                scrollEnabled={true}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingBottom: vs(5)
                }}
            />
            <Addnewitems />
        </Container>
    )
}

export default Myproducts;