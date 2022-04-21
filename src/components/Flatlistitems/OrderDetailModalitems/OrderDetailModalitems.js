import React from 'react'
import { Image } from 'react-native'
import Container from '../../container';
import Label from '../../Label';
import styles from './styles';

const OrderDetailModalitems = ({ item, onSelected }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Container onPress={onSelected}>
                    <Container containerStyle={styles.container3}>
                        <Container containerStyle={styles.container4}>
                            {item.isSelected ?
                                <Image
                                    source={item.img2}
                                    style={styles.select_img}
                                />
                                :
                                <Image
                                    source={item.img}
                                    style={styles.unselect_img}
                                />
                            }
                            <Label style={styles.label}>{item.text}</Label>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default OrderDetailModalitems;