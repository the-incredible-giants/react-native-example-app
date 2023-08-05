import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RetailerItemType, StackParamTypes } from '../../../utils/types';
interface RetailerItemProps {
  index: number;
  item: RetailerItemType;
}

type StackNavigation = NativeStackNavigationProp<StackParamTypes>;

function RetailerItem({ index, item, item: { firstName, lastName } }: RetailerItemProps): JSX.Element {
  const navigation = useNavigation<StackNavigation>();

  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        navigation.navigate('RetailerDetails', { item });
      }}
    >
      <Text style={styles.retailerItem}>
        {++index}. {firstName} {lastName}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  retailerItem: {
    margin: 5,
    fontSize: 17,
    color: 'black',
  },
  button: {
    marginBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});

export default RetailerItem;
