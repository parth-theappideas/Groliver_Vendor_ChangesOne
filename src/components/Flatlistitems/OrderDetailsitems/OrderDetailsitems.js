import React from "react";
import { Image } from 'react-native'
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Btn from "../../Btn";
import Container from "../../container";
import Label from "../../Label";
import styles from "./styles";

const OrderDetailitems = ({ item, modalizeRef, onClose }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Container containerStyle={styles.container3}>
                    <Label style={styles.label}>{item.name}</Label>

                    <Container containerStyle={styles.container4}>
                        <Label style={styles.label2}>{item.order_id}</Label>
                        <Label style={styles.label3}>{item.ord_id}</Label>
                    </Container>

                    <Container containerStyle={styles.container5}>
                        <Label style={styles.label2}>{item.order_date}</Label>
                        <Label style={styles.label3}>{item.ord_date}</Label>
                    </Container>

                    <Container containerStyle={styles.container6}>
                        <Container containerStyle={styles.container7}>
                            <Label style={styles.label2}>{item.ord_status}</Label>
                            <Label style={styles.label4}>{item.status}</Label>
                        </Container>

                        <Btn
                            title="Action"
                            btnStyle={{
                                backgroundColor: '#009345',
                                borderRadius: 5,
                                justifyContent: 'center',
                                width: '32%',
                                height: vs(32)
                            }}
                            btnHeight={35}
                            textColor={'white'}
                            textSize={14}
                            onPress={() => modalizeRef.current.open()}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.container8}>
                <Container containerStyle={styles.container9}>
                    <Label style={styles.label5}>{item.shipping_address}</Label>
                </Container>

                <Container containerStyle={styles.container10} />

                <Container containerStyle={styles.container11}>
                    <Image
                        source={item.address_img}
                        style={styles.address_Img}
                    />
                    <Label style={styles.label6}>{item.address}</Label>
                </Container>
            </Container>

            <Container containerStyle={styles.container12}>
                <Container containerStyle={styles.container13}>
                    <Label style={styles.label7}>{item.items}</Label>
                </Container>

                <Container containerStyle={styles.container14} />

                <Container containerStyle={styles.container15}>
                    <Label style={styles.label8}>1 {item.items_1}</Label>
                    <Label style={styles.label9}>2 {item.items_2}</Label>
                </Container>
            </Container>

            <Container containerStyle={styles.container16}>
                <Container containerStyle={styles.container17}>
                    <Label style={styles.label10}>{item.order_summary}</Label>
                </Container>

                <Container containerStyle={styles.container18} />

                <Container containerStyle={styles.container19}>
                    <Label style={styles.label11}>{item.price}</Label>
                    <Label style={styles.label11}>{item.amount}</Label>
                </Container>

                <Container containerStyle={styles.container19}>
                    <Label style={styles.label11}>{item.discount}</Label>
                    <Label style={styles.label11}>{item.dis_amount}</Label>
                </Container>

                <Container containerStyle={styles.container19}>
                    <Label style={styles.label11}>{item.delivery_charges}</Label>
                    <Label style={styles.label11}>{item.delivery_amount}</Label>
                </Container>

                <Container containerStyle={styles.container18} />

                <Container containerStyle={styles.container19}>
                    <Label style={styles.label12}>{item.total_amount}</Label>
                    <Label style={styles.label12}>{item.tot_amount}</Label>
                </Container>
            </Container>
        </Container>
    )
}

export default OrderDetailitems;