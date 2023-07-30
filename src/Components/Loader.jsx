import {RotatingSquare} from "react-loader-spinner";
function Loader() {
  return (
    <div className="flex  pt-12 flex-col justify-center items-center">
<RotatingSquare
  height="100"
  width="100"
  color="grey"
 
  ariaLabel="rotating-square-loading"
  strokeWidth="4"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loader
