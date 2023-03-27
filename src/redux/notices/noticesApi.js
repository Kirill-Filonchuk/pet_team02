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
  async ({ url, method, data, params, headers }) => {
    try {
      // console.log(api.defaults.headers.common.Authorization);
      const result = await api({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
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

  tagTypes: ['Notice', 'Favorite', 'Own', 'UserData'],

  endpoints: builder => ({
    getNotices: builder.query({
      query: ({ endpoint, query, page, limit }) => ({
        url: `${endpoint}`,
        params: {
          query,
          page,
          limit,
        },
      }),

      providesTags: ['Notice'],
    }),

    getUserData: builder.query({
      query: () => ({
        url: `/userdata`,
      }),
      providesTags: ['UserData'],
    }),

    getNotice: builder.query({
      query: id => ({
        url: `/notice/${id}`,
      }),
    }),

    getOwnNotices: builder.query({
      query: () => ({
        url: `/`,
      }),
      providesTags: ['Own'],
    }),

    deleteNotice: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notice', 'Own', 'UserData'],
    }),

    addNotice: builder.mutation({
      query: data => ({
        url: '/notice',
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json,multipart/form-data',
        },
      }),
      invalidatesTags: ['Notice', 'Own', 'UserData'],
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
      invalidatesTags: ['Notice', 'Favorite', 'UserData'],
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetUserDataQuery,
  useGetNoticeQuery,
  useGetOwnNoticesQuery,
  useDeleteNoticeMutation,
  useAddNoticeMutation,
  // useGetUserOwnNoticesQuery,
  // useGetUserFavoriteNoticesQuery,
  useGetFavoritesQuery,
  useUpdateNoticeFavoriteStatusMutation,
} = noticesApi;
