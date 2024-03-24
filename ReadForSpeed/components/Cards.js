//card component for the application
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 150,
        backgroundColor: '#f7287b',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
});

export default Card;
