import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = { label: string; info: string | number };

const InformationWithLabel = ({ label, info }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}:</Text>
    <Text>{info}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 4,
  },
});

export default memo(InformationWithLabel);
