import React from 'react';
import { StyleSheet, View, Text, TextInput, placeholder } from 'react-native';

export default function InputText({
  label,
  selectedValue,
  setValue,
  ...props
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={selectedValue}
        placeholder={placeholder}
        {...props}
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
    color: '#666666',
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderColor: '#DDD',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#666666',
    backgroundColor: '#FFF',
    color: '#666',
  },
});
