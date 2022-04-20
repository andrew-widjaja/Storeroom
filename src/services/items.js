import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: '/items/',
  }),
  tagTypes: ['Consumable', 'Reagent', 'Equipment', 'Cell'],
  endpoints: (builder) => ({
    getConsumables: builder.query({
      query: () => `consumables`,
      providesTags: ['Consumable'],
    }),
    getReagents: builder.query({
      query: () => `reagents`,
      providesTags: ['Reagent'],
    }),
    getEquipment: builder.query({
      query: () => `equipment`,
      providesTags: ['Equipment'],
    }),
    getCells: builder.query({
      query: () => `cells`,
      providesTags: ['Cell'],
    }),
    addItem: builder.mutation({
      query({ category, ...body }) {
        return {
          url: `${category}`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Consumable', 'Reagent', 'Equipment', 'Cell'],
    }),
    deleteItem: builder.mutation({
      query({ id, category }) {
        return {
          url: `${category}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Consumable', 'Reagent', 'Equipment', 'Cell'],
    }),
    updateItem: builder.mutation({
      query({ id, category, ...body }) {
        return {
          url: `${category}/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Consumable', 'Reagent', 'Equipment', 'Cell'],
    }),
  }),
});

export const {
  useGetConsumablesQuery,
  useGetReagentsQuery,
  useGetEquipmentQuery,
  useGetCellsQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} = itemsApi;
