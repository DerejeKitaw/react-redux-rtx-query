import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react'

const simpleBaseQuery: BaseQueryFn<
  string, // Args
  unknown, // Result
  { reason: string }, // Error
  { shout?: boolean }, // DefinitionExtraOptions
  { timestamp: number } // Meta
> = (arg, api, extraOptions) => {
  // `arg` has the type `string`
  // `api` has the type `BaseQueryApi` (not configurable)
  // `extraOptions` has the type `{ shout?: boolean }

  const meta = { timestamp: Date.now() }

  if (arg === 'forceFail') {
    return {
      error: {
        reason: 'Intentionally requested to fail!',
        meta,
      },
    }
  }

  if (extraOptions.shout) {
    return { data: 'CONGRATULATIONS--', meta }
  }

  return { data: 'congratulations', meta }
}
export const inverterApiSlice = createApi({
    // reducerPath: 'inverter-api',
  baseQuery: simpleBaseQuery,
  endpoints: (builder) => ({
    getSupport: builder.query({
      query: () => 'support me',
      extraOptions: {
        shout: true,
      },
    }),
  }),
})
export const { useGetSupportQuery } = inverterApiSlice