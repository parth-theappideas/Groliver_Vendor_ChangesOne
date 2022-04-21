import React from "react";
import { Image } from 'react-native'
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const Productdetailitems = ({ item,route }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Label style={styles.label1}>{item.title}</Label>
            </Container>

            <Container containerStyle={styles.container3}>
                <Label style={styles.label2}>{item.cat_name}</Label>
                <Label style={styles.label3}>{item.categories}</Label>
            </Container>

            <Container containerStyle={styles.container4}>
                <Label style={styles.label4}>{item.unit}</Label>
                <Label style={styles.label5}>{item.piece}</Label>
            </Container>

            <Container containerStyle={styles.container5}>
                <Label style={styles.label6}>{item.price}</Label>
                <Label style={styles.label7}>{item.amount}</Label>

                <Container containerStyle={styles.container6}>
                    <Image
                        source={item.change_img}
                        style={styles.editImg}
                    />
                    <Image
                        source={item.delete_img}
                        style={styles.deleteImg}
                    />
                </Container>
            </Container>

            <Container containerStyle={styles.container7}>
                <Label style={styles.label8}>{item.heading}</Label>
                <Label style={styles.label9}>{item.des_txt1}</Label>
                <Label style={styles.label10}>{item.des_txt2}</Label>
                <Label style={styles.label10}>{item.des_txt3}</Label>
            </Container>
        </Container>
    )
}

export default Productdetailitems;