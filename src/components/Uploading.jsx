import { useContext } from "react"
import { MainContext } from "../context/Maincontext"

const Uploading = () => {
  const { componentState } = useContext(MainContext)
  return (
    <>
      {componentState === "upload" && (
        <div className="w-[400px] h-[144px] rounded-xl bg-white shadow-md">
          <div className="py-[36px] px-[32px]">
            <div className="text-[18px] text-grey">Uploading...</div>
            <div className="mt-[31px]">
              <div className="relative left-10 top-[6px] bg-blue w-[100px] h-[6px] rounded-full"></div>
              <div className="w-[340px] bg-[#F2F2F2] h-[6px] rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Uploading
