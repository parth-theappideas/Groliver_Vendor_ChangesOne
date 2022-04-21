import React from "react";
import { View, Text, Image, ScrollView, FlatList, SectionList, StatusBar } from 'react-native'
import Container from "../../../components/container";
import NotificationItems from "../../../components/Flatlistitems/NotificationItems/NotificationItems";
import { hs, vs } from "../../../utils/stylesUtils";
import styles from "./Styles";

const Notification = ({ }) => {

    const Data = [
        {
            id: 1,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 2,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 3,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 4,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 5,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 6,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 7,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 8,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 9,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        },
        {
            id: 10,
            image: require('../../../assets/images/logo2.png'),
            text: 'Lorem Ipsum is simply dummy text of the',
            text2: 'printing.',
            time: '2 hour ago'
        }
    ];

    const renderNotification = ({ item }) => {
        return (
            <NotificationItems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <FlatList
                data={Data}
                renderItem={renderNotification}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingBottom: vs(20)
                }}
            />
        </Container>
    )
}

export default Notification;