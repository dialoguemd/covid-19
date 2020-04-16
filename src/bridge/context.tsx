import React from 'react'

export const BridgeContext = React.createContext({
  environment: {},
  props: {},
  functions: {}
})

export const BridgeProvider = BridgeContext.Provider
export const BridgeConsumer = BridgeContext.Consumer
