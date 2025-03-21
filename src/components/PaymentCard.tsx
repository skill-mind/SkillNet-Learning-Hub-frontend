import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import globe from "@/svg/Vector.svg";

const PaymentCard = () => {
  return (
    <div className="lg:w-[400px] shrink-0">
      <div className="bg-[#161716]  text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4 text-[#D9D9D9]">Free!</h2>
        <div className="border-b border-gray-600 pb-4 mb-4">
          <p className="text-[#767776] font-[18px] mb-2">Unique Training</p>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs">
              <Image src={globe} alt={""} />
            </div>
            <span className="text-[#D9D9D9]">24 Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs">
              <Image src={globe} alt={""} />
            </div>
            <span className="text-[#D9D9D9]">10 Assessments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs">
              <Image src={globe} alt={""} />
            </div>
            <span className="text-[#D9D9D9]">5 Articles</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs">
              <Image src={globe} alt={""} />
            </div>
            <span className="text-[#D9D9D9]"> 34,529 Enrollments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs">
              <Image src={globe} alt={""} />
            </div>
            <span className="text-[#D9D9D9]">Unlimited Access</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs">
              <Image src={globe} alt={""} />
            </div>
            <span className="text-[#D9D9D9]"> Certificate of Completion</span>
          </div>
        </div>
        <Button className="w-full mb-3 bg-transparent border border-[#3B3B3A] text-[#D9D9D9] hover:bg-gray-300 hover:text-black transition-colors">
          ADD TO WISHLIST
        </Button>
        <Button className="w-full bg-[#A8C789] text-black hover:bg-[#86d23b]">
          ENROLL NOW
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
