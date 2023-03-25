import { createApi } from '@reduxjs/toolkit/query/react';
import { api, BASE_URL } from 'Services/AxiosConfig';

// export const API_CATEGORIES_ROUTES = {
//   SELL: 'sell',
//   LOST_FOUND: 'lost-found',
//   FOR_FREE: 'for-free',
//   FAVORITE: 'favorite',
//   OWN: 'own',
// };

export const NOTICES_API_ENDPOINTS = {
  SELL: '/categories/sell',
  LOST_FOUND: '/categories/lost-found',
  IN_GOOD_HANDS: '/categories/in-good-hands',
  FAVORITES: '/favorites',
  OWN: '/',
};

//Need to export asxios instance "api"

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      // console.log(api.defaults.headers.common.Authorization);
      const result = await api({ url: baseUrl + url, method, data, params });
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

export const noticesApi = createApi({
  reducerPath: 'noticesApi',

  baseQuery: axiosBaseQuery({
    baseUrl: `${BASE_URL}api/notices`,
  }),

  tagTypes: ['Notice', 'Favorite'],

  endpoints: builder => ({
    getNotices: builder.query({
      query: ({ endpoint, search, page, limit }) => ({
        url: `${endpoint}`,
        params: {
          search,
          page,
          limit,
        },
      }),

      providesTags: ['Notice'],
    }),

    getNotice: builder.query({
      query: id => ({
        url: `/notice/${id}`,
      }),
    }),

    deleteNotice: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notice'],
    }),

    addNotice: builder.mutation({
      query: data => ({
        url: '/notice',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Notice'],
    }),

    getFavorites: builder.query({
      query: () => ({
        url: `/favorites`,
      }),

      providesTags: ['Favorite'],
    }),

    updateNoticeFavoriteStatus: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Notice', 'Favorite'],
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetNoticeQuery,
  useDeleteNoticeMutation,
  useAddNoticeMutation,
  // useGetUserOwnNoticesQuery,
  // useGetUserFavoriteNoticesQuery,
  useGetFavoritesQuery,
  useUpdateNoticeFavoriteStatusMutation,
} = noticesApi;
