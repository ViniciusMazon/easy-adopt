import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function AreaText({ label, selectedValue, setValue }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={selectedValue}
        multiline={true}
        numberOfLines={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 25,
  },
  label: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#9C98A6',
    marginBottom: 10,
  },
  input: {
    height: 203,
    borderColor: '#DDD',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#9C98A6',
    fontSize: 16,
    textAlignVertical: 'top',
  },
});
