import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Projects  } from './types'

export const projectsApiSlice = createApi({
    reducerPath: 'project-api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Projects'],
  endpoints: (build) => ({
    getProjects: build.query<Projects, void>({
      query: () => 'projects',
      providesTags: (result) =>
        result
          ? [
              ...result.projects.map(({ jobNumber }) => ({ type: 'Projects' as const, jobNumber })),
              { type: 'Projects', jobNumber: 'LIST' },
            ]
          : [{ type: 'Projects', jobNumber: 'LIST' }],
    }),
    // addPost: build.mutation<Post, Partial<Post>>({
    //   query(body) {
    //     return {
    //       url: `post`,
    //       method: 'POST',
    //       body,
    //     }
    //   },
    //   invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    // }),
    // getPost: build.query<Post, number>({
    //   query: (id) => `post/${id}`,
    //   providesTags: (result, error, id) => [{ type: 'Projects', id }],
    // }),
  }),
})

export const {
     useGetProjectsQuery, 
    //  useAddPostMutation, 
    //  useGetPostQuery 
    } = projectsApiSlice