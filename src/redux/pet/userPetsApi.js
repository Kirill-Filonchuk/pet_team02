import { createApi } from '@reduxjs/toolkit/query/react';
import { api, BASE_URL } from 'Services/AxiosConfig';


const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params,headers }) => {
    try {
      // console.log(api.defaults.headers.common.Authorization);
      const result = await api({ url: baseUrl + url, method, data, params, headers });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      // console.log(err);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export const userPetsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: `${BASE_URL}api`,
  }),
  tagTypes: ['Pet'],
  endpoints: builder => ({
    
    getUserPets: builder.query({
      query: () => ({
        url: `/user-pets`,
      }),
      providesTags: ['Pet'],
    }),

    deleteUserPet: builder.mutation({
      query: id => ({
        url: `/pets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pet'],
    }),

    addUserPet: builder.mutation({
      query: data => ({
        url: '/pets',
        method: 'POST',
        data,
        headers:{
          'Content-Type': 'application/json,multipart/form-data'
        }
      }),
      invalidatesTags: ['Pet'],
    }),

    
  }),
});
export const {
  useGetUserPetsQuery,
  useDeleteUserPetMutation,
  useAddUserPetMutation,
} = userPetsApi;