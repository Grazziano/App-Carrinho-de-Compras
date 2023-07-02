import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem';

export default function Cart() {
  const { cart, addItemCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItem data={item} addAmount={() => addItemCart(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
});
