import { createApi } from '@reduxjs/toolkit/query/react';
import { api, BASE_URL } from 'Services/AxiosConfig';

export const API_CATEGORIES_ROUTES = {
  SELL: 'sell',
  LOST_FOUND: 'lost-found',
  FOR_FREE: 'for-free',
  FAVORITE: 'favorite',
  OWN: 'own',
};

//Need to export asxios instance "api"

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await api({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
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
    getNotices: builder.query({
      query: ({ category, search, page }) => ({
        url: `/categories/${category}`,
        params: {
          search,
          page,
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

    addNotice: builder.mutation({
      query: body => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),

    getUserOwnNotices: builder.query({
      query: ({ userId, search, page }) => ({
        url: `/${userId}`,
        params: {
          search,
          page,
        },
      }),
    }),

    getUserFavoriteNotices: builder.query({
      query: ({ userId, search, page }) => ({
        url: `/${userId}/favorites`,
        params: {
          search,
          page,
        },
      }),
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
