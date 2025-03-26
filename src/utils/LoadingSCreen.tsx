import Spinner from "react-spinkit";

const LoadingSCreen = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-white flex justify-center items-center gap-5">
      <Spinner
        className="text-4xl"
        name="circle"
        color="black"
      />
      <p className="font-semibold text-black">Loading</p>
    </div>
  )
}
export default LoadingSCreen