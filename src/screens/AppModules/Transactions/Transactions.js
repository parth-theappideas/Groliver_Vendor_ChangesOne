import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, StatusBar } from 'react-native'
import TransactionsItems from "../../../components/Flatlistitems/TransactionItems/TransactionsItems";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import { Picker } from '@react-native-picker/picker'
import Container from "../../../components/container";
import styles from "./Styles";

const Transactions = ({ item }) => {
    const [pickerValue, setPickerValue] = useState("Feb, 2021");

    const TransactionData = [
        {
            id: 1,
            status: 'Received',
            cardNo: '**** **** **** 1247',
            date: '22/01/2021,',
            time: '09:00 am',
            money: '+$11'
        },
        {
            id: 2,
            status: 'Withdraw',
            cardNo: '**** **** **** 4352',
            date: '23/02/2021,',
            time: '12:12 am',
            money: '+$300'
        },
        {
            id: 3,
            status: 'Received',
            cardNo: '**** **** **** 1247',
            date: '22/01/2021,',
            time: '09:00 am',
            money: '+$4.99'
        },
        {
            id: 4,
            status: 'Received',
            cardNo: '**** **** **** 1247',
            date: '22/01/2021,',
            time: '09:00 am',
            money: '+$20'
        },
        {
            id: 5,
            status: 'Received',
            cardNo: '**** **** **** 1247',
            date: '22/01/2021,',
            time: '09:00 am',
            money: '+$12'
        }
    ];

    const renderTransaction = ({ item }) => {
        return (
            <TransactionsItems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container2}>
                <Picker
                    style={{
                        width: "99%",
                        height: vs(50),
                    }}
                    selectedValue={pickerValue}
                    onValueChange={(itemValue) => setPickerValue(itemValue)}
                >
                    <Picker.Item label="Jan, 2021" style={{
                        fontSize: fs(14)
                    }} value="key0" />
                    <Picker.Item label="Feb, 2021" style={{
                        fontSize: fs(14)
                    }} value="key1" />
                    <Picker.Item label="March, 2021" style={{
                        fontSize: fs(14)
                    }} value="key2" />
                    <Picker.Item label="April, 2021" style={{
                        fontSize: fs(14)
                    }} value="key3" />
                </Picker>
            </Container>

            <FlatList
                data={TransactionData}
                renderItem={renderTransaction}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingBottom: vs(50)
                }}
            />
        </Container>
    )
}

export default Transactions;