import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Card = ({title, imageUrl, width, height}) => {
  return (
    <View style={styles.cardComponent}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          width: width,
          height: height,
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
          overflow: 'hidden',
        }}>
        <Image
          source={imageUrl}
          style={{width: width, height: height, borderRadius: 5}}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardComponent: {
    textAlign: 'center',
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: '#1c1c1c',
    fontWeight: '700',
    textAlign: 'center',
  },
});
