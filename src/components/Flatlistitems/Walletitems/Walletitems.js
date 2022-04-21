import React from "react";
import { Image, Pressable } from 'react-native'
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Label from "../../Label";
import Container from "../../container";
import Btn from "../../Btn";
import styles from "./styles";

const Walletitems = ({ item, AddaccountRef, WithdrawRef, SelectaccountRef }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Container containerStyle={styles.container3}>
                    <Label style={styles.label}>{item.total_balace}</Label>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Image
                        source={item.coin_img}
                        style={styles.coin_img}
                    />
                    <Label style={styles.label2}>{item.balace}</Label>
                </Container>

                <Btn
                    title="Withdraw"
                    btnStyle={{
                        backgroundColor: '#FF7900',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '40%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={40}
                    textColor={'white'}
                    textSize={16}
                    onPress={() => WithdrawRef.current.open()}
                />
            </Container>

            <Container containerStyle={styles.container5}>
                <Label style={styles.label3}>{item.my_bank_acc}</Label>
                <Btn
                    title="Add new Account"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '40%',
                        alignSelf: 'center',
                    }}
                    btnHeight={35}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => AddaccountRef.current.open()}
                />
            </Container>

            <Container containerStyle={styles.container6}>
                <Container containerStyle={styles.container7}>
                    <Label style={styles.label4}>{item.name}</Label>
                    <Container containerStyle={styles.container8}>
                        <Pressable>
                            <Image
                                source={item.edit_img}
                                style={styles.edit_img}
                            />
                        </Pressable>

                        <Pressable>
                            <Image
                                source={item.del_img}
                                style={styles.del_img}
                            />
                        </Pressable>
                    </Container>
                </Container>

                <Container containerStyle={styles.container9}>
                    <Container onPress={() => SelectaccountRef.current.open()}>
                        <Label style={styles.label5}>{item.acc_num}</Label>
                        <Label style={styles.label6}>{item.expiry_date}</Label>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Walletitems;