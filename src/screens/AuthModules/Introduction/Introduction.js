import React, { useRef, useState } from "react";
import { SafeAreaView, Image, StyleSheet, View, Text, TextInput, StatusBar, ScrollView } from 'react-native'
import PagerView from 'react-native-pager-view'
import Btn from "../../../components/Btn";
import Images from "../../../const/Images";
import { vs } from "../../../utils/stylesUtils";
import IntroductionPage1 from "./Introductionpage1";
import MySecondPage from "./IntroductionPage2";
import MyThirdPage from "./IntroductionPage3";
import {ExpandingDot} from 'react-native-animated-dots'
import { styles } from "./Styles";
import Container from "../../../components/container";

const MyPager = ({ navigation }) => {
    const [pagePosition, setPagePosition] = useState(0)
    const viewPagerRef = useRef(null)
    console.log(pagePosition)

    return (
        <Container containerStyle={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <PagerView style={{ flex: 1 }}
                initialPage={pagePosition}
                onPageSelected={(e) => {
                    setPagePosition(e.nativeEvent.position)
                }}
                ref={viewPagerRef}

            >
                <View key='1'>
                    <IntroductionPage1 />
                </View>

                <View key='2' >
                    <MySecondPage />
                </View>

                <View key='3' >
                    <MyThirdPage />
                </View>
            </PagerView>

            <Btn
                title={pagePosition == 2 ? 'Get Stareted' : 'Next'}
                btnStyle={{
                    backgroundColor: '#009345',
                    borderRadius: 5,
                    justifyContent: 'center',
                    width: '92%',
                    elevation: 2,
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: vs(20)
                }}
                btnHeight={50}
                textColor={'white'}
                textSize={14}
                onPress={() => {
                    if (pagePosition == 2) {
                        navigation.navigate('Signin')
                    } else {
                        // viewPagerRef.current?.setPage(pagePosition + 1)
                        viewPagerRef.current?.setPage(pagePosition + 1)
                        // setPagePosition((prev) => prev + 1)
                    }
                }
                }
            />
        </Container>
    )
}

export default MyPager;