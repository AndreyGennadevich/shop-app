import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: ' https://appevent.ru/dev/task1/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (name) => `catalog`,
        }),
    }),
});

export const {useGetProductsQuery} = productsApi;