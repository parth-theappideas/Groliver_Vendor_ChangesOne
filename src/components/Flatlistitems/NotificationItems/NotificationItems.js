import React from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const NotificationItems = ({ item, index }) => {
    return (
        <Container containerStyle={styles.container}>
            <Image
                source={item.image}
                style={styles.itemimg}
            />

            <Container containerStyle={styles.container2}>
                <Label style={styles.label}>{item.text}</Label>
                <Label style={styles.label}>{item.text2}</Label>
                <Label style={styles.label2}>{item.time}</Label>
            </Container>
        </Container>
    )
}

export default NotificationItems;