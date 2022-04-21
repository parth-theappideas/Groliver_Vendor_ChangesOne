import React, { useState } from "react";
import { View, Text, Image, ToastAndroid, ScrollView, Pressable, StatusBar } from 'react-native'
import Container from "../../../components/container";
import InputBox from '../../../components/InputBox'
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles";
import LoadingIndicator from "../../../components/LoadingIndicator";

const OrderManage = ({ navigation }) => {
    const [Loading, setLoading] = useState(false);

    const Logout = async () => {
        setLoading(true);
        try {
            const Data = await AsyncStorage.removeItem('@store1:User');
            if (Data) {
                navigation.replace("Signin");
                ToastAndroid.show("Logout Successfully", ToastAndroid.SHORT);
            } else {
                console.log("Unsuccessfull Delete", Data);
            }
            console.log("Successfully Delete", Data);
        }
        catch (e) {
            console.log("error", e);
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Signin' }]
        })
        setLoading(false);
    }
    return (
        <ScrollView contentContainerStyle={{
            paddingBottom: vs(10),
        }} style={{
            backgroundColor: 'white'
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <InputBox
                    placeholder="Search"
                    inputStyle={{
                        maxWidth: '75%'
                    }}
                    containerStyle={{
                        width: '95%',
                        backgroundColor: '#F2F2F2',
                        borderColor: '#F2F2F2',
                        elevation: 1,
                        marginTop: vs(10),
                        alignSelf: 'center'
                    }}
                    inputHeight={50}
                    textSize={14}
                    leftIcon={() => <Image source={Images.search_2} style={{
                        width: hs(20),
                        height: vs(20),
                        marginHorizontal: hs(10)
                    }} />}
                />

                <Container containerStyle={styles.rowContainer}>
                    <Container containerStyle={styles.container2}>
                        <Container onPress={() => navigation.navigate("OrdermanageDetail")}>
                            <Container containerStyle={styles.borderView}>
                                <Pressable onPress={() => navigation.navigate("OrdermanageDetail")}>
                                    <Image
                                        source={Images.order_manage}
                                        style={styles.orderManageimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView}>
                                    <Label style={styles.text}>Order manage</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container3}>
                        <Container onPress={() => navigation.navigate("Myproducts")}>
                            <Container containerStyle={styles.borderView2}>
                                <Pressable onPress={() => navigation.navigate("Myproducts")}>
                                    <Image
                                        source={Images.product}
                                        style={styles.myProductimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView2}>
                                    <Label style={styles.text2}>My Products</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.rowContainer2}>
                    <Container containerStyle={styles.container4}>
                        <Container onPress={() => navigation.navigate("Wallet")}>
                            <Container containerStyle={styles.borderView3}>
                                <Pressable onPress={() => navigation.navigate("Wallet")}>
                                    <Image
                                        source={Images.wallet}
                                        style={styles.walletimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView3}>
                                    <Label style={styles.text3}>Wallet</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container5}>
                        <Container onPress={() => navigation.navigate("Transactions")}>
                            <Container containerStyle={styles.borderView4}>
                                <Pressable onPress={() => navigation.navigate("Transactions")}>
                                    <Image
                                        source={Images.transaction}
                                        style={styles.transationsimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView4}>
                                    <Label style={styles.text4}>Transactions</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.rowContainer3}>
                    <Container containerStyle={styles.container6}>
                        <Container onPress={() => navigation.navigate("Profile")}>
                            <Container containerStyle={styles.borderView5}>
                                <Pressable onPress={() => navigation.navigate("Profile")}>
                                    <Image
                                        source={Images.profile_pic}
                                        style={styles.profileimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView5}>
                                    <Label style={styles.text5}>My Profile</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Container onPress={() => Logout()}>
                            <Container containerStyle={styles.borderView6}>
                                <Pressable onPress={() => Logout()}>
                                    <Image
                                        source={Images.logout}
                                        style={styles.logoutimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textview6}>
                                    <Label style={styles.text6}>Logout</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
            {Loading ?
                <View style={styles.LoadingIndicator}>
                    <LoadingIndicator />
                </View>
                : null}
        </ScrollView>
    )
}

export default OrderManage;