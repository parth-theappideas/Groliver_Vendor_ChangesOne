import React, { useRef, useState } from "react";
import { View, Image, Text, Dimensions, Pressable, StyleSheet, FlatList } from 'react-native'
import Btn from "../components/Btn";
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from "../utils/stylesUtils";
import Success from "./Success";
import Container from "../components/container";
import Label from "../components/Label";
import SelectAccountitems from "../components/Flatlistitems/SelectAccountitems/SelectAccpuntitems";

const Selectaccount = ({ SelectaccountRef, onClose }) => {
    const SuccessRef = useRef(null);

    const onCloseModal = () => {
        SuccessRef.current?.close();
    }
    const RenderSelectAcc = () => {
        const SelectAccountData = [
            {
                id: 1,
                text: '**** **** **** 1234',
                img: require('../assets/images/tick.png'),
                master_card: require('../assets/images/master.png'),
                visa_card: require('../assets/images/visa.png'),
                isSelected: false
            },
            {
                id: 2,
                text: '**** **** **** 5742',
                img: require('../assets/images/tick.png'),
                master_card: require('../assets/images/master.png'),
                visa_card: require('../assets/images/visa.png'),
                isSelected: false
            },
            {
                id: 3,
                text: '**** **** **** 1234',
                img: require('../assets/images/tick.png'),
                master_card: require('../assets/images/master.png'),
                visa_card: require('../assets/images/visa.png'),
                isSelected: false
            },
        ]

        const [data, setData] = useState(SelectAccountData);

        const renderItem = ({ item, index }) => {
            return (
                <SelectAccountitems
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
        <Modalize ref={SelectaccountRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
            HeaderComponent={
                <Container>
                    <Container containerStyle={styles.container2}>
                        <Label style={styles.label}>Select account</Label>

                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{
                                    uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                                }}
                                style={styles.cancelimg}
                            />
                        </Pressable>
                    </Container>
                    <Container containerStyle={styles.container3} />
                </Container>
            }
            FooterComponent={
                <Btn
                    title="Processed"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => SuccessRef.current.open()}
                />
            }
        >
            {RenderSelectAcc()}

            <Success
                SuccessRef={SuccessRef}
                onCloseModal={onCloseModal}
            />

        </Modalize>
    )
}

export default Selectaccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(20),
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancelimg: {
        width: hs(20),
        height: vs(20)
    },
    container3: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
})