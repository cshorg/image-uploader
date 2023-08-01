import { createContext, useState } from "react"
import axios from "axios"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [componentState, setComponentState] = useState("card")
  const [file, setFile] = useState()

  const handleUpload = (file) => {
    if (file) {
      const formdata = new FormData()
      formdata.append("file", file)

      axios
        .post("http://localhost:3001/image/upload", formdata)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }

  return (
    <MainContext.Provider
      value={{ componentState, setComponentState, setFile, handleUpload }}
    >
      {children}
    </MainContext.Provider>
  )
}
