import { createContext, useState } from "react"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [componentState, setComponentState] = useState("")

  return <MainContext.Provider>{children}</MainContext.Provider>
}
