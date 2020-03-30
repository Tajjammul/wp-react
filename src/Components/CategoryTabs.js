import React from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';

const CategoryTabs = (props) => {
    const { categories, navigation } = props
    return (
        <>
            <FlatList
                horizontal
                data={categories}
                keyExtractor={category => category.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('List', {
                                    type: 'category',
                                    cat_id: item.id,
                                    title: item.name
                                })
                            }}
                            style={style.catTabs}
                        >
                            <Text style={style.tabText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
                style={{
                    paddingTop: 5,
                    paddingBottom: 10
                }}
            />
        </>
    )
}

const style = StyleSheet.create({
    catTabs: {
        borderWidth: 1,
        borderColor: '#222',
        marginHorizontal: 5,
        borderRadius: 5,
        textAlignVertical: 'center'
    },
    tabText: {
        fontSize: 16,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20
    }

});

export default CategoryTabs