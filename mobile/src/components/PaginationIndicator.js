import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PaginationIndicator({ pages, active }) {
  const [numberOfPages, setNumberOfPages] = useState([]);

  useEffect(() => {
    var aux = [];
    for (var i = 0; i < pages; i++) {
      aux.push(i);
    }
    setNumberOfPages(aux);
  }, []);

  return (
    <View style={styles.pagination}>
      {numberOfPages.map((page, index) => {
        return (
          <Text
            key={index}
            style={
              active - 1 === index ? styles.indicatorActive : styles.indicator
            }
          >
            ⬤
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 12,
    marginTop: 24,
  },
  indicator: {
    fontSize: 10,
    marginHorizontal: 4,
    color: '#A3D0D7',
  },
  indicatorActive: {
    fontSize: 10,
    marginHorizontal: 4,
    color: '#118696',
  },
});
