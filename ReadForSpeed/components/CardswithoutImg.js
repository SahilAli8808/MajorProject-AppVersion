// cards without image
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardwithoutImg = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 150,
        backgroundColor: '#f7287b',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: 'white',
        marginTop: 3,
    },
});

export default CardwithoutImg;