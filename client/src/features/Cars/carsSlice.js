import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const APIURL = import.meta.env.VITE_BASE_URL;
// console.log(APIURL)
export const carsSlice = createApi({
    reducerPath: 'car',
    baseQuery: fetchBaseQuery({ baseUrl: APIURL }),
    endpoints: (builder) => ({
        AddCar: builder.mutation({
            query: (newCar) => ({
                url: 'addcar',
                method: 'POST',
                body: newCar
            })
        }),
        getCar:builder.query({
             query:()=>({
                url:'GetCars',
                method:'Get'
             })
        })
    })
})

export const { useAddCarMutation,useGetCarQuery } = carsSlice;