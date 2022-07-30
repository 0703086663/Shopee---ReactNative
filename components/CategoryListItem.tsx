
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import HomeImage from '../assets/home.png';

export default function CategoryListItem (props: any){
    return <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{props.title}</Text>
        <Image style={styles.categoryImage} source={HomeImage}/>
    </View>
}

const styles = StyleSheet.create({
    categoryContainer:{
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16
    },
    categoryTitle: {
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    categoryImage: {
        width: 64, 
        height: 64,
    }
})