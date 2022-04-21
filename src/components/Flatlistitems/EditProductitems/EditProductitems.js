import React, { useState, useEffect } from 'react'
import { Image, FlatList, Pressable } from 'react-native'
import { hs, screenWidth, vs } from '../../../utils/stylesUtils'
import Container from '../../container'
import styles from './styles'

const EditProductitems = ({ modalVisible, setModalVisible, picture }) => {

    const EditProductData = [
        {
            id: 1,
            add_img: require('../../../assets/images/plus.png'),
            del_img: require('../../../assets/images/delete2.png')
        }
    ]

    const renderEditProducts = () => {
        return (
            <>
                {EditProductData.map((item, index) => {
                    return (
                        <Container onPress={() => setModalVisible(!modalVisible)} key={index}>
                            <Container containerStyle={styles.container2} key={index}>
                                <Image
                                    source={picture ? { uri: picture } : item.add_img}
                                    style={picture ? styles.Clickimg : styles.add_img}
                                />

                                {picture ?
                                    <Pressable style={styles.pressableBtn}>
                                        <Image
                                            source={item.del_img}
                                            style={styles.del_img}
                                        />
                                    </Pressable>
                                    : null}
                            </Container>
                        </Container>
                    )
                })}
            </>
        )
    }

    return (
        <FlatList
            data={EditProductData}
            renderItem={renderEditProducts}
            keyExtractor={(item) => item.id}
        />
    )
}

export default EditProductitems;