import React from "react";
import { SafeAreaView, Image, StyleSheet, View, Text, TextInput, StatusBar } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { hs, vs } from "../../../utils/stylesUtils";
import { styles } from "./Styles";

const MySecondPage = () => {
    return (
        <Container containerStyle={styles.safeAreaView2}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <Image
                style={styles.page2}
                source={Images.png2}
            />

            <Container containerStyle={styles.imgBorder1}>
                <Image
                    source={require('../../../assets/images/download.png')}
                    style={styles.logo}
                />
            </Container>
            <Container>
                <Label style={styles.title1}>Best Quality, Affordable Price</Label>
            </Container>

            <Container containerStyle={styles.introView1}>
                <Label style={styles.introText1}>Lorem ipsum is simply dummy text of the</Label>
            </Container>

            <Container containerStyle={styles.introView2}>
                <Label style={styles.introText2}>printing and typesetting industry lorem</Label>
            </Container>

            <Container containerStyle={styles.introView3}>
                <Label style={styles.introText3}>ipsum has been the industry</Label>
            </Container>

            <Container containerStyle={{
                flexDirection: 'row',
            }}>
                <Container containerStyle={{
                    borderWidth: 1,
                    marginTop: vs(20),
                    height: vs(10),
                    borderRadius: 10,
                    width: hs(10),
                    borderColor: '#ffc79c',
                    backgroundColor: '#ffc79c',
                }}
                />

                <Container containerStyle={{
                    borderWidth: 1,
                    marginTop: vs(20),
                    height: vs(10),
                    borderRadius: 10,
                    width: hs(10),
                    borderColor: '#FF7900',
                    backgroundColor: '#FF7900',
                    marginLeft: hs(5)
                }}
                />

                <Container containerStyle={{
                    borderWidth: 1,
                    marginTop: vs(20),
                    height: vs(10),
                    borderRadius: 10,
                    width: hs(10),
                    borderColor: '#ffc79c',
                    backgroundColor: '#ffc79c',
                    marginLeft: hs(5)
                }}
                />
            </Container>
        </Container>
    )
}

export default MySecondPage;