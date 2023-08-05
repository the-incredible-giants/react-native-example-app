import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RetailerDetails from './RetailerDetails';

const mockData = {
  navigation: { navigate: jest.fn() },
  route: {
    params: {
      item: {
        firstName: 'Tom',
        lastName: 'Pimperipim',
        bank: {
          cardNumber: '141234123412434',
          cardExpire: '01/10',
          cardType: 'Visa',
          currency: 'PLN',
        },
      },
    },
  },
};

describe('RetailerDetails', () => {
  it('should render with all details', () => {
    // @ts-ignore
    render(<RetailerDetails {...mockData} />);

    expect(screen.queryByText(mockData.route.params.item.firstName)).toBeTruthy();
    expect(screen.queryByText(mockData.route.params.item.lastName)).toBeTruthy();
    expect(screen.queryByText(mockData.route.params.item.bank.cardNumber)).toBeTruthy();
    expect(screen.queryByText(mockData.route.params.item.bank.cardExpire)).toBeTruthy();
    expect(screen.queryByText(mockData.route.params.item.bank.cardType)).toBeTruthy();
    expect(screen.queryByText(mockData.route.params.item.bank.currency)).toBeTruthy();
  });
});
