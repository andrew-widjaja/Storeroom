import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: '/items/',
  }),
  endpoints: (builder) => ({
    getConsumables: builder.query({
      query: () => `consumables`,
    }),
    getReagents: builder.query({
      query: () => `reagents`,
    }),
    getEquipment: builder.query({
      query: () => `equipment`,
    }),
    getCells: builder.query({
      query: () => `cells`,
    }),
  }),
});

export const {
  useGetConsumablesQuery,
  useGetReagentsQuery,
  useGetEquipmentQuery,
  useGetCellsQuery,
} = itemsApi;
