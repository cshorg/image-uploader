import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [componentState, setComponentState] = useState("card")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")

  const build = (url) => {
    setUrl(`http://localhost:3001/image/${url}`)
    setComponentState("uploaded")
  }

  const finishUpload = (image) => {
    setImage(image)
    setComponentState("upload")

    build(image)
  }

  const handleUpload = (file) => {
    if (file) {
      const formdata = new FormData()
      formdata.append("file", file)

      axios
        .post("http://localhost:3001/image/upload", formdata)
        .then((res) => finishUpload(res.data.image))
        .catch((err) => console.log(err))
    }
  }

  return (
    <MainContext.Provider
      value={{ componentState, setComponentState, handleUpload, image, url }}
    >
      {children}
    </MainContext.Provider>
  )
}
