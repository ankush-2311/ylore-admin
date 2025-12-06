import { createApi } from '@reduxjs/toolkit/query/react'
import { customBaseQuery } from '../customBaseQuery'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    loginAdmin: builder.mutation<{ token: string; user: any }, { email: string; password: string }>(
      {
        query: (body) => ({
          url: '/admin-users/login',
          method: 'POST',
          body,
        }),
      },
    ),
  }),
})

export const { useLoginAdminMutation } = authApi
