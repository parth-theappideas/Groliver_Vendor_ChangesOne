import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Container from "../../container";
import { useNavigation } from '@react-navigation/native';
import Label from "../../Label";
import styles from "./Styles";
import InputBox from "../../InputBox";

const Productsitems = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Container>
            <Container containerStyle={styles.container}>
                <Image
                    source={item.image}
                    style={styles.itemimg}
                />

                <Container containerStyle={styles.container2}>
                    <Container onPress={() => navigation.navigate("ProductDetail")}>
                        <Label style={styles.label}>{item.productName}</Label>
                        <Label style={styles.label2}>{item.text3}</Label>
                        <Label style={styles.label3}>{item.text2}</Label>
                    </Container>
                </Container>

                <Label style={styles.label4}>{item.price}</Label>
            </Container>
        </Container>
    )
}

export default Productsitems;