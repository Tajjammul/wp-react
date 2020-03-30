import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';


const Header = ({ navigation }) => {

    return (
        <View
            style={{
                width: Dimensions.get('screen').width,
                height: 50,
                paddingHorizontal: 5,
                paddingTop: 0,

            }}
        >
            {/* <TouchableOpacity>
                <Feather
                    name="arrow-left"
                />
            </TouchableOpacity> */}
            <Image
                source={require('../../assets/papashop.png')}
                style={style.logo}
            />
            <TouchableOpacity
                style={style.search}
                onPress={() => {
                    navigation.navigate('Search');
                }}
            >
                <Feather
                    name="search"
                    style={{
                        fontSize: 25
                    }}
                />
            </TouchableOpacity>
        </View>
    )

}

const style = StyleSheet.create({
    logo: {
        height: 50,
        width: 150
    },
    search: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 10,
        right: 15,
        textAlignVertical: "center"
    }
})

export default Header