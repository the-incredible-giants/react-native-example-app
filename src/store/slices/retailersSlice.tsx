import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RetailerItemType } from '../../utils/types';

const initialState: RetailerItemType[] = [];

const retailersSlice = createSlice({
  name: 'retailers',
  initialState,
  reducers: {
    updateRetailersData(state, action: PayloadAction<RetailerItemType[]>) {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

const { actions, reducer } = retailersSlice;

export const retailersApi = createApi({
  reducerPath: 'retailers',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getRetailers: builder.query({
      query: (limit) => `users?limit=${limit}`,
    }),
  }),
});

export const { useGetRetailersQuery } = retailersApi;
export const { updateRetailersData } = actions;
export default reducer;
