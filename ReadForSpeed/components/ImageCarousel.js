//ImageCarousel.js
import React, { useState, useRef } from 'react';
import {
    View, Image, StyleSheet, Dimensions,
    FlatList, TouchableOpacity,
    Text
} from 'react-native';
import Icon
    from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            flatListRef
                .current
                .scrollToIndex(
                    {
                        index: currentIndex + 1
                    }
                );
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            flatListRef
                .current
                .scrollToIndex(
                    {
                        index:
                            currentIndex - 1
                    }
                );
            setCurrentIndex(currentIndex - 1);
        }
    };

    const renderItem = ({ item }) => (
        <Image source={item}
            style={styles.image}
            resizeMode="cover" />
    );

    const handlePageChange = (event) => {
        const offset =
            event.nativeEvent.contentOffset.x;
        const index =
            Math.floor(offset / width);
        setCurrentIndex(index);
    };

    const renderDot = (index) => (
        <View
            style=
            {
                [styles.dot,
                {
                    backgroundColor: index ===
                        currentIndex ?
                        '#007BFF' :
                        '#D3D3D3'
                }
                ]}
            key={index}
        />
    );

    return (
        <View style={styles.carouselContainer}>
            <Text style={styles.carouselHeading}>
                Read For Speed - App Version
            </Text>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={
                    (item, index) => index.toString()
                }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handlePageChange}
                renderItem={renderItem}
            />
            <View style={styles.overlayContainer}>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={handlePrev}>
                        <Icon name="chevron-left"
                            size={30}
                            color="#dcdedc" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={handleNext}>
                        <Icon name="chevron-right"
                            size={30} color="#dcdedc" />
                    </TouchableOpacity>
                </View>
                <View style={styles.dotsContainer}>
                    {images.map(
                        (_, index) =>
                            renderDot(index)
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: 250,
        position: 'relative',
        marginBottom: 20,
    },
    image: {
        width,
        height: 200,
    },
    carouselHeading: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        marginTop: 100,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    icon: {
        padding: 10,
    },
});

export default ImageCarousel;