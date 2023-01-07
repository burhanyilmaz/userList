import React, { FC, memo } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { PADDING } from 'utils/constants';

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const Input: FC<Props> = ({ value, onChange, placeholder }) => (
  <TextInput style={styles.input} value={value} onChangeText={onChange} placeholder={placeholder} />
);

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: PADDING,
  },
});

export default memo(Input);
