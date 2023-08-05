import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RetailerItem from './RetailerItem';

const mockRetailerData = {
  index: 1,
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
};

const mockedUsedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mockedUsedNavigate,
}));

describe('RetailerItem', () => {
  it('should render', () => {
    render(<RetailerItem {...mockRetailerData} />);
    expect(screen.queryByText('2. Tom Pimperipim')).toBeTruthy();
  });
});
