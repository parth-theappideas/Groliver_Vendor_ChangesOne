import React, { useRef, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native'
import Btn from "../components/Btn";
import { fs, hs, vs } from "../utils/stylesUtils";
import { Modalize } from 'react-native-modalize'
import Container from "../components/container";
import Label from "../components/Label";
import OrderDetailModalitems from "../components/Flatlistitems/OrderDetailModalitems/OrderDetailModalitems";

const OrderDetailModal = ({ modalizeRef, onClose }) => {
    const RenderOrderDetail = () => {
        const OrderData = [
            {
                id: 1,
                text: 'Processing',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            },
            {
                id: 2,
                text: 'On the way',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            },
            {
                id: 3,
                text: 'Completed',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            },
        ]

        const [data, setData] = useState(OrderData);

        const renderItem = ({ item, index }) => {
            return (
                <OrderDetailModalitems
                    item={item}
                    onSelected={() => {
                        const newArray = [...data]
                        if (newArray[index]['isSelected'] === true) {
                            console.log(newArray);
                        }
                        newArray[index]['isSelected'] = !newArray[index]['isSelected']
                        console.log(index);
                        setData(newArray);
                    }}
                />
            )
        }

        return (
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingBottom: vs(10)
                }}
                keyExtractor={(item) => item.id}
            />
        );
    }

    return (
        <Modalize ref={modalizeRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingBottom:vs(5)
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
            HeaderComponent={
                <Container>
                    <Container containerStyle={styles.container1}>
                        <Label style={styles.header}>Action</Label>
                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{
                                    uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                                }}
                                style={styles.cancel_img}
                            />
                        </Pressable>
                    </Container>
                    <Container containerStyle={styles.border_styles} />
                </Container>
            }
            FooterComponent={
                <Btn
                    title="Apply"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: vs(15),
                        bottom: vs(7)
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                />
            }
        >
            {RenderOrderDetail()}
        </Modalize>
    )
}
export default OrderDetailModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        marginTop: vs(20),
        marginHorizontal: hs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancel_img: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        tintColor: '#000'
    },
    border_styles: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    }
})