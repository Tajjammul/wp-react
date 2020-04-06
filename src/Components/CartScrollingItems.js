import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
// import {  } from 'react-native-gesture-handler';

const CartScrollingItems = (props) => {

    const { products } = props

    return (
        <ScrollView
            horizontal
            pagingEnabled={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}

        >
            {
                products.map(item => {
                    return (
                        <TouchableOpacity key={item.id} style={CartScrollStyle.imageContainer}>
                            <Image source={{ uri: item.img }} style={CartScrollStyle.scrollImages} />
                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>
    );

}


const CartScrollStyle = StyleSheet.create({
    imageContainer: {
        marginHorizontal: 5,
        marginBottom: 10,
    },
    scrollImages: {
        height: 60,
        width: 60,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#f8f8f8'
    }
})

const mapStatetoProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStatetoProps)(CartScrollingItems)