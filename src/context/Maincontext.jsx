import { createContext, useState } from "react"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [componentState, setComponentState] = useState("uploaded")

  return (
    <MainContext.Provider value={{ componentState, setComponentState }}>
      {children}
    </MainContext.Provider>
  )
}
