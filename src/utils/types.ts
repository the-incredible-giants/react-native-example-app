export interface RetailerItemType {
  id?: number;
  firstName: string;
  lastName: string;
  bank: {
    cardNumber: string;
    cardExpire: string;
    cardType: string;
    currency: string;
  };
}

export type StackParamTypes = {
  Retailers: any;
  RetailerDetails: {
    item: RetailerItemType;
  };
};
