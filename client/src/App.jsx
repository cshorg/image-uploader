import Card from "./components/Card"
import Uploaded from "./components/Uploaded"
import Uploading from "./components/Uploading"

function App() {
  return (
    <div className="flex items-center justify-center h-[100dvh] w-screen font-display bg-offWhite text-grey">
      <Card />
      <Uploading />
      <Uploaded />
    </div>
  )
}

export default App
