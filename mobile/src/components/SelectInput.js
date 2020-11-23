import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SelectInput({
  label,
  itemsList,
  selectedValue,
  setValue,
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.selectBorder}>
        <Picker
          selectedValue={selectedValue}
          style={styles.select}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        >
          <Picker.Item label={'Selecione uma opção'} value={''} />
          {itemsList.map((item, index) => {
            return (
              <Picker.Item key={index} label={item.label} value={item.value} />
            );
          })}
        </Picker>
      </View>
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
  select: {
    width: '100%',
    height: 60,
    color: '#666666',
  },
  selectBorder: {
    borderColor: '#DDD',
    borderRadius: 8,
    borderWidth: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
