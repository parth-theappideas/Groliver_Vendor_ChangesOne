import React from 'react'
import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts'
import Container from '../../../components/container'
import Label from '../../../components/Label'
import Images from '../../../const/Images'
import { fs, hs, vs } from '../../../utils/stylesUtils'
import styles from './Styles'

const Help = ({ }) => {
    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(10)
        }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.hor_logo}
                        style={styles.logo}
                    />

                    <Container containerStyle={styles.container3}>
                        <Label style={styles.label}>What is Lorem Ipsum?</Label>

                        <Image
                            source={Images.up}
                            style={styles.upimg}
                        />
                    </Container>

                    <Container containerStyle={styles.container4}>
                        <Container containerStyle={styles.container5}>
                            <Label style={styles.label2}>Lorem Ipsum is simply dummy text of the</Label>
                            <Label style={styles.label2}>printing and typesetting industry. Lorem Ipsum</Label>
                            <Label style={styles.label2}>has been the industry's standard dummy.</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Why do we use it?</Label>

                        <Image
                            source={Images.down}
                            style={styles.downimg}
                        />
                    </Container>
                   
                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Where dose it come from?</Label>
                        <Image
                            source={Images.down}
                            style={styles.downimg}
                        />
                    </Container>
                   
                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Why do we use it?</Label>
                        <Image
                            source={Images.down}
                            style={styles.downimg}
                        />
                    </Container>
                  
                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Where can i get some?</Label>
                        <Image
                            source={Images.down}
                            style={styles.downimg}
                        />
                    </Container>
                   
                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Why do we use it?</Label>
                        <Image
                            source={Images.down}
                            style={styles.downimg}
                        />
                    </Container>
                   
                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Where does it come from?</Label>
                        <Image
                            source={Images.down}
                            style={styles.downimg}
                        />
                    </Container>
                </Container>
            </Container>
        </ScrollView>
    )
}

export default Help;