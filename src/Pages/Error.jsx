import CTAButton from "../Components/core/Home/CTAButton"
import Home from "./Home"
const Error = () => {
    return (
      <div className="flex justify-center items-center ml-20">
             <div className='flex justify-center items-center text-[3rem] text-white mt-[250px]'>
                Error - 404 Not found
          </div>
     <div className="translate-x-[-300px]">
     <CTAButton 
        linkto="/"
         active={true}
         >Go Home</CTAButton>
     </div>
      </div>
    )
  }
  
  export default Error