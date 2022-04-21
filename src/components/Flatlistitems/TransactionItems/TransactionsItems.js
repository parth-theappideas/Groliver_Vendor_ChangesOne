import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const TransactionsItems = ({ item }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Label style={styles.label}>{item.status}</Label>
                <Container containerStyle={styles.container3}>
                    <Label style={styles.label2}>{item.cardNo}</Label>
                    <Label style={styles.label3}>{item.money}</Label>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Label style={styles.label4}>{item.date}</Label>
                    <Label style={styles.label5}>{item.time}</Label>
                </Container>
            </Container>
        </Container>
    )
}

export default TransactionsItems;