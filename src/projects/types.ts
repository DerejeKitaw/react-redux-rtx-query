export interface Post {
    id: number
    name: string
  }
  
  export interface User {
    id: number
    name: string
  }
  export interface Project {
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
  export interface Projects{
    projects:Project[]
  }  