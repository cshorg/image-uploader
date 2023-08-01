import { useContext } from "react"
import { MainContext } from "../context/Maincontext"
import axios from "axios"

const Card = () => {
  const { componentState, handleUpload } = useContext(MainContext)

  return (
    <>
      {componentState === "card" && (
        <div className="w-[402px] shadow-md rounded-xl h-[496px] flex bg-white flex-col items-center py-[36px] px-[32px]">
          <div className="text-[18px]">Upload your image</div>
          <div className="text-[10px] mt-[16px]">
            File should be Jpeg, Png...
          </div>
          <div className="flex flex-col items-center justify-evenly w-[338px] h-[218px] border-dashed border-[2px] bg-lightGrey rounded-xl border-lightBlue mt-[30px]">
            <img src="/image.svg" alt="background-image" />
            <div className="text-mdGrey text-[12px]">
              Drag & Drop your image here
            </div>
          </div>
          <div className="text-mdGrey mt-[18px]">Or</div>
          <div className="mt-[30px]">
            <input
              onChange={(e) => handleUpload(e.target.files[0])}
              type="file"
              id="file"
            />
            {/* <label
              htmlFor="file"

              className="px-[15px] cursor-pointer py-[8px] bg-blue rounded-lg text-white text-[12px]"
            >
              Choose a file
            </label> */}
          </div>
        </div>
      )}
    </>
  )
}

export default Card
