import React, { useRef, useState } from "react";
import { View, FlatList, StatusBar } from 'react-native'
import Btn from "../../../components/Btn";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import OrderDetailModal from "../../../modals/OrderdetailModal";
import OrderDetailitems from "../../../components/Flatlistitems/OrderDetailsitems/OrderDetailsitems";
import styles from "./Styles";

const OrderDetail = ({ }) => {

    const modalizeRef = useRef(null);

    const onClose = () => {
        modalizeRef.current?.close();
    };

    const OrderDetailData = [
        {
            id: 1,
            name: 'John wade',
            order_id: 'Order ID : ',
            ord_id: 'ORD000087',
            order_date: 'Order Date : ',
            ord_date: '6 Oct, 2021',
            ord_status: 'Status : ',
            status: 'On the way',
            shipping_address: 'Shipping Address',
            address: '490 Lauren Drive, Madison , Wisconsin, United States',
            address_img: require('../../../assets/images/location.png'),
            items: 'Items',
            items_1: 'Organic Banans (12 piece) $4.99',
            items_2: 'Red Apple (1 kg) $4.99',
            order_summary: 'Order summary',
            price: 'Price',
            amount: '$9.98',
            discount: 'Discount',
            dis_amount: '$0.00',
            delivery_charges: 'Delivery charges',
            delivery_amount: '$1.00',
            total_amount: 'Total Amount',
            tot_amount: '$10.98'
        }
    ]

    const renderOrderDetails = ({ item }) => {
        return (
            <OrderDetailitems
                item={item}
                modalizeRef={modalizeRef}
                onClose={onClose}
            />
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <FlatList
                data={OrderDetailData}
                renderItem={renderOrderDetails}
                keyExtractor={(item) => item.id}
            />
            <Btn
                title="Print"
                btnStyle={{
                    backgroundColor: '#009345',
                    borderRadius: 5,
                    justifyContent: 'center',
                    width: '91%',
                    marginHorizontal: hs(20),
                    alignSelf: 'center',
                    marginTop: vs(20),
                }}
                btnHeight={50}
                textColor={'white'}
                textSize={14}
            />
            <OrderDetailModal
                modalizeRef={modalizeRef}
                onClose={onClose}
            />
        </View>
    )
}

export default OrderDetail;

