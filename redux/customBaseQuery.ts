import { fetchBaseQuery, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import { RootState } from './store'
import { clearAuth, setCredentials } from './slices/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  const statusCode =
    (result as any)?.error?.originalStatus || (result as any)?.meta?.response?.status

  // if (statusCode === 401) {
  //   const refreshToken = (api.getState() as RootState).auth.refreshToken

  //   if (!refreshToken) {
  //     api.dispatch(clearAuth())
  //     return result
  //   }
  //   const refreshResult = await baseQuery(
  //     {
  //       url: '/admin/refresh-token',
  //       method: 'POST',
  //       body: { refreshToken },
  //     },
  //     api,
  //     extraOptions,
  //   )

  //   if (refreshResult.data) {
  //     const { token: newToken, refreshToken: newRefreshToken } = refreshResult.data as {
  //       token: string
  //       refreshToken: string
  //     }

  //     api.dispatch(setCredentials({ token: newToken, refreshToken: newRefreshToken }))
  //     result = await baseQuery(args, api, extraOptions)
  //   } else {
  //     api.dispatch(clearAuth())
  //   }
  // }

  return result
}
