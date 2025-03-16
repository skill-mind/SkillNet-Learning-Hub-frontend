import Navbar from "@/components/navbar";

import astronaut from "../../public/svg/astronaut.svg";
import Image from "next/image";

function Page() {
  return (
    <>
      <Navbar />
      {/* <section className="h-[806px]  pt-[150px] lg:pt-[204px] flex justify-center text-center ">
        <div>
          <Image src={astronaut} className="" alt="#" />
        </div>
        <div className=" border-[#595958] pt-10">
          <h5 className="mb-4 text-[18px] font-medium leading-[22px]  text-white">
            Upskill and Certify
          </h5>
          <p className="text-[14px] leading-[17px]">
            Enroll in courses and earn blockchain-verified certifications.
          </p>
        </div>
      </section> */}


      <section className="h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        {/* Astronaut Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image src={astronaut} className="max-w-[300px] lg:max-w-[400px] animate-float" alt="Astronaut exploring knowledge" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            🚀 Unlock Your <span className="text-blue-500">Potential</span> & Earn <br />
            Blockchain-Verified Certifications!
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
            Master in-demand skills, connect with industry experts, and boost your career—all in one place!
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <button 
            className="px-4 py-2 bg-greenish-500 hover:bg-greenish-300 cursor-pointer border text-white text-center font-semibold rounded-lg transition-colors hover:text-black hover:bg-white">
              Start Learning Now
            </button>
          </div>
        </div>
      </section>

    </>

  )
}


export default Page;