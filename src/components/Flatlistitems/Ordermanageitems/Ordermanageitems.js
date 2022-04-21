import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import { useNavigation } from '@react-navigation/native';
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const Ordermanageitems = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Container containerStyle={styles.container}>
            <Container onPress={() => navigation.navigate("OrderDetail")}>
                <Label style={styles.label}>{item.name}</Label>

                <Container containerStyle={styles.container2} >
                    <Container containerStyle={styles.container3}>
                        <Label style={styles.label2}>{item.text}</Label>
                        <Label style={styles.label3}>{item.orderid}</Label>
                    </Container>

                    <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
                        <Image
                            source={item.image}
                            style={styles.itemimg}
                        />
                    </TouchableOpacity>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Label style={styles.label4}>{item.text2}</Label>
                    <Label style={styles.label5}>{item.status}</Label>
                </Container>

                <Container containerStyle={styles.container5}/>
            </Container>
        </Container>
    )
}

export default Ordermanageitems;