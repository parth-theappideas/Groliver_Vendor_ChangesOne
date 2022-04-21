import React from "react";
import { Image } from 'react-native'
import Container from "../../container";
import Label from "../../Label";
import styles from "./styles";

const SelectAccountitems = ({ item, onSelected }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Container onPress={onSelected}>
                    <Container containerStyle={styles.container3}>
                        <Container containerStyle={styles.container4}>
                            <Container containerStyle={styles.container5}>
                                <Image
                                    source={item.master_card}
                                    style={styles.select_img}
                                />

                                <Label style={styles.label}>{item.text}</Label>
                            </Container>
                            <Container containerStyle={styles.container5}>
                                {item.isSelected ?
                                    <Image
                                        source={item.img}
                                        style={styles.select_img}
                                    />
                                    :
                                    null
                                }
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default SelectAccountitems;