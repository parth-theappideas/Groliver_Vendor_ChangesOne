import React from 'react'
import { Image, FlatList } from 'react-native'
import Container from '../../container'
import styles from './styles'

const AddnewProductitems = ({ modalVisible, setModalVisible, picture }) => {

    const AddProductData = [
        {
            id: 1,
            add_img: require('../../../assets/images/plus.png')
        }
    ]

    const renderAddProducts = () => {
        return (
            <>
                {AddProductData.map((item, index) => {
                    return (
                        <Container onPress={() => setModalVisible(!modalVisible)} key={index}>
                            <Container key={index} containerStyle={styles.container}>
                                <Container containerStyle={styles.container2} key={index}>
                                    <Image
                                        source={picture ? { uri: picture } : item.add_img}
                                        style={picture ? styles.Clickimg : styles.add_img}
                                    />
                                </Container>
                            </Container>
                        </Container>
                    )
                })}
            </>
        )
    }

    return (
        <FlatList
            data={AddProductData}
            renderItem={renderAddProducts}
            keyExtractor={(item) => item.id}
        />
    )
}

export default AddnewProductitems;