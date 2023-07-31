import { useContext } from "react"
import { MainContext } from "../context/Maincontext"
import { BsFillCheckCircleFill } from "react-icons/bs"

const Uploaded = () => {
  const { componentState } = useContext(MainContext)

  return (
    <>
      {componentState === "uploaded" && (
        <div className="w-[400px] shadow-md rounded-xl h-[450px] flex bg-white flex-col items-center py-[36px] px-[32px]">
          <div className="text-green">
            <BsFillCheckCircleFill size={35} />
          </div>
          <div className="text-[18px] text-grey mt-[10px]">
            Uploaded Successfully!
          </div>
          <div className="w-[338px] h-[225px] bg-blue mt-[25px] rounded-xl"></div>
          <div className="mt-[25px]">
            <button className="relative left-[261px] top-[32px] w-[74px] h-[30px] bg-blue rounded-lg text-white text-[10px]">
              Copy Link
            </button>
            <input
              className="text-[10px] text-[#4F4F4F] pl-2 bg-[#F6F8FB] w-[338px] h-[34px] rounded-lg border-[2px] border-[#E0E0E0]"
              type="text"
              placeholder="https://testing.com/photo-123o87xcjkzxk"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Uploaded
