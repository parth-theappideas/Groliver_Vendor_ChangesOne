import React from "react";
import { View, Text, FlatList, ScrollView, StatusBar } from 'react-native'
import Container from "../../../components/container";
import Ordermanageitems from "../../../components/Flatlistitems/Ordermanageitems/Ordermanageitems";
import { vs } from "../../../utils/stylesUtils";
import styles from "./Styles";

const OrdermanageDetail = ({ }) => {

    const OrdermanageData = [
        {
            id: 1,
            name: 'John wade',
            text: 'Order Id :',
            orderid: 'ORD000087',
            text2: 'Status :',
            status: 'Processing',
            image: require('../../../assets/images/right3.png')
        },
        {
            id: 2,
            name: 'harry wilson',
            text: 'Order Id :',
            orderid: 'ORD000087',
            text2: 'Status :',
            status: 'On the way',
            image: require('../../../assets/images/right3.png')
        },
        {
            id: 3,
            name: 'Robert',
            text: 'Order Id :',
            orderid: 'ORD000087',
            text2: 'Status :',
            status: 'Completed',
            image: require('../../../assets/images/right3.png')
        },
        {
            id: 4,
            name: 'Michael',
            text: 'Order Id :',
            orderid: 'ORD000087',
            text2: 'Status :',
            status: 'Completed',
            image: require('../../../assets/images/right3.png')
        },
        {
            id: 5,
            name: 'James',
            text: 'Order Id :',
            orderid: 'ORD000087',
            text2: 'Status :',
            status: 'Completed',
            image: require('../../../assets/images/right3.png')
        },
        {
            id: 6,
            name: 'William add',
            text: 'Order Id :',
            orderid: 'ORD000087',
            text2: 'Status :',
            status: 'Completed',
            image: require('../../../assets/images/right3.png')
        },
    ];

    const renderOrdermanageDetail = ({ item }) => {
        return (
            <Ordermanageitems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <FlatList
                data={OrdermanageData}
                renderItem={renderOrdermanageDetail}
                keyExtractor={(item) => item.id}
            />
        </Container>
    )
}

export default OrdermanageDetail;