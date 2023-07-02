import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Product({ data }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
  price: {},
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#168FFF',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2,
  },
});
