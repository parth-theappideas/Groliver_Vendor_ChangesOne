import React from "react";
import { Pressable, Image } from 'react-native'
import Container from "../../../components/container";
import Images from "../../../const/Images";
import styles from "./Styles";
import { useNavigation } from '@react-navigation/native';

const Addnewitems = () => {

    const navigation = useNavigation();

    return (
        <Container containerStyle={styles.container2}>
            <Pressable onPress={() => navigation.navigate("Addnewproduct")}>
                <Image
                    source={Images.add}
                    style={styles.addimg}
                />
            </Pressable>
        </Container>
    )
}

export default Addnewitems;