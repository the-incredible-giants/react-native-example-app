import React from 'react';
import { Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStyles } from '../../utils/mainStyles';
import TextDetail from './TextDetail';
import { StackParamTypes } from '../../utils/types';

function RetailerDetails({
  navigation,
  route: {
    params: { item },
  },
}: NativeStackScreenProps<StackParamTypes, 'RetailerDetails'>): JSX.Element {
  const { firstName, lastName, bank } = item;
  const { cardNumber, cardExpire, cardType, currency } = bank;

  return (
    <SafeAreaView style={mainStyles.centeredView}>
      <ScrollView>
        <TextDetail label="First name" text={firstName} />
        <TextDetail label="Last name" text={lastName} />
        <TextDetail label="Card number" text={cardNumber} />
        <TextDetail label="Expire date" text={cardExpire} />
        <TextDetail label="Card type" text={cardType} />
        <TextDetail label="Currency" text={currency} />

        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RetailerDetails;
