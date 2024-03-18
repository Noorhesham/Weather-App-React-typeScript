import { BiLoaderCircle } from "react-icons/bi"

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
    <BiLoaderCircle className=" text-white animate-spin text-5xl" />
  </div>
  )
}

export default Loader