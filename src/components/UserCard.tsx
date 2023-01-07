import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { CARD_WIDTH } from 'utils/constants';

type UserCardProps = {
  id: number;
  age: number;
  name: string;
  image: string;
  onPress: () => void;
  onClickRemove: (userId: number) => void;
};

const UserCard: FC<UserCardProps> = ({ id, name, age, onClickRemove, image, onPress }) => (
  <Pressable onPress={onPress} style={styles.container}>
    <ImageBackground style={styles.imageBackground} source={{ uri: image }}>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>
          {name} - {age}
        </Text>
      </View>
      <Pressable style={styles.crossIcon} onPress={() => onClickRemove(id)}>
        <Text style={styles.crossText}>X</Text>
      </Pressable>
    </ImageBackground>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  informationContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 4,
  },
  informationText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  crossIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  crossText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default memo(UserCard);
