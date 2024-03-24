import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ImageCarousel from './components/ImageCarousel';
import Header from './components/Header';
import Card from './components/Cards';
import CardwithoutImg from './components/CardswithoutImg';

export default function App() {
    const images = [
        require('./assets/banner2.jpg'),
        require('./assets/banner1.jpg'),
        require('./assets/workflow.jpg'),
    ];

    return (
        <SafeAreaView style={styles.container}>
          {/* including header  */}
            <Header title="Read For Speed" />
            {/* including image carousel component */}
            <ImageCarousel images={images} />
            {/* including cards wihtout image */}
            <View style={{ flexDirection: 'row' }}>

            <CardwithoutImg title="Card 1" />
            <CardwithoutImg title="Card 2" />
            </View>
            {/* including card component */}
            <View style={{ flexDirection: 'row' }}>
            <Card title="Card 1" image={require('./assets/banner1.jpg')} />
            <Card title="Card 2" image={require('./assets/banner2.jpg')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
