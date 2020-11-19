import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = (width * 100) / 80;

export default function Swiper({ images }) {
  const [active, setActive] = useState(0);

  function change({ nativeEvent }) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        onScroll={change}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {images.map((image, index) => {
          return (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          );
        })}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((image, index) => {
          return (
            <Text
              key={index}
              style={
                index === active ? styles.indicatorActive : styles.indicator
              }
            >
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  indicatorActive: {
    color: '#FA5889',
    margin: 3,
    fontSize: width / 30,
  },
  indicator: {
    color: '#FFF',
    margin: 3,
    fontSize: width / 30,
  },
});
