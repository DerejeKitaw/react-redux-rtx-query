import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Project {
  numberOfModulesString1: number
  numberOfModulesString2: number
  numberOfModulesString3: number
  numberOfModulesString4: number
  numberOfModulesString5: number
  unFusedDisconnectRequired: true
  additionalRequirements: []
  _id: string
  nameOnDrawing: string
  jobNumber: number
  dateOnDrawing: string
  drawnBy: string
  address1: string
  address2: string
  loadCenterSize: number
  envoyFuseSize: number
  inverter: {
    _id: string
    inverterManufacturer: string
    inverterType: string
    maxDcVoltage: number
    maxPowerOutput: number
    acOutputVoltage: number
    maxAcCurrentOutput: number
    startupVoltage: number
    cec: number
    optimizerModel: string
    optimizerMaxDcVoltage: number
    optimizerMaxPowerOutput: number
    optimizerMaxDcCurrentOutput: number
    optimizerMaxDcCurrentInput: number
    createdAt: string
    updatedAt: string
    __v: 0
  }
  panel: {
    _id: string
    panelType: string
    power: number
    vmp: number
    imp: number
    voc: number
    isc: number
    vocTempCoef: number
    vmpTempCoef: number
    iscTempCoef: number
    maxSystemVoltage: number
    createdAt: string
    updatedAt: string
    __v: 0
  }
  mainServicePanelBreakerSize: number
  createdAt: string
  updatedAt: string
}
interface Projects{
  projects:Project[]
}
export const projectApiSlice = createApi({
  reducerPath: 'project-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    // prepareHeaders(headers) {
    //   headers.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    //   return headers
    // },
  }),
  endpoints(builder) {
    return {
      fetchProjects: builder.query<Projects, void>({
        query() {
          return `/projects`
        },
      }),
    }
  },
})

export const { useFetchProjectsQuery } = projectApiSlice
