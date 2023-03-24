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
  endpoints: builder => ({
    // getNotices: builder.query({
    //   query: ({ category, search, page, limit }) => ({
    //     url: `/categories/${category}`,
    //     params: {
    //       search,
    //       page,
    //       limit,
    //     },
    //   }),
    // }),

    getNotices: builder.query({
      query: ({ endpoint, search, page, limit }) => ({
        url: `${endpoint}`,
        params: {
          search,
          page,
          limit,
        },
      }),
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
    }),

    // addNotice: builder.mutation({
    //   query: body => ({
    //     url: '/notice',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    addNotice: builder.mutation({
      query: body => {
        // console.log('body', body);

        const test = {
          url: '/notice',
          method: 'POST',
          body,
        };
        console.log(test);

        return test;
        // return {
        //   url: '/notice',
        //   method: 'POST',
        //   body,
        // };
      },
    }),

    updateNoticeFavoriteStatus: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}/favorite`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetNoticeQuery,
  useDeleteNoticeMutation,
  useAddNoticeMutation,
  useGetUserOwnNoticesQuery,
  useGetUserFavoriteNoticesQuery,
} = noticesApi;
