import Image from "next/image";
import blockChain from "@/svg/blockchainVideo.svg";
import PaymentCard from "@/components/PaymentCard";

const Overview = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div>
        {/* Course Banner */}
        <div className="relative aspect-video mb-8 bg max-w-3xl bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={blockChain}
              alt="Blockchain Development Bootcamp"
              width={600}
              height={338}
              className="w-full h-full object-cover"
            />

            <button className="absolute inset-0 m-auto w-20 h-20 bg-black bg-opacity-50 rounded-full flex items-center justify-center  hover:bg-opacity-80 transition-all"></button>
          </div>
        </div>
        {/* Course Description */}
        <div className="mb-8 p-5  max-w-3xl rounded-lg bg-[#1D1D1C]">
          <h2 className="text-xl font-[18px] text-[#767776] mb-4">Welcome</h2>
          <p className="text-[#D9D9D9] mb-0">
            Embark on your journey to becoming a blockchain expert with
            Blockchain Development: Zero to Hero. This comprehensive course is
            designed to take you from a complete beginner to a skilled
            blockchain developer, equipped to build innovative decentralized
            applications (dApps) and smart contracts.
          </p>
          <p className="text-[#D9D9D9] mb-0">
            Whether you're a tech enthusiast, developer, or entrepreneur, this
            course covers everything you need to master blockchain development.
            From understanding foundational concepts to hands-on coding in
            Solidity and interacting with leading platforms like Ethereum and
            Hyperledger, you'll gain practical skills and real-world knowledge.
          </p>
          <p className="text-[#D9D9D9] mb-10">
            By the end of the course, you'll have the confidence to design and
            deploy secure blockchain solutions, contribute to the decentralized
            economy, and transform industries with your expertise.
          </p>

          <h2 className="text-xl text-[#767776] font-semibold mb-4">
            By the end of this course, you will
          </h2>
          <ul className="list-disc text-[#D9D9D9] pl-6 mb-6 space-y-2">
            <li>
              Learn the fundamentals of blockchain technology and its
              applications.
            </li>
            <li>Master smart contract development using Solidity.</li>
            <li>
              Gain experience working with Ethereum and other popular blockchain
              platforms.
            </li>
            <li>
              Build, test, and deploy your own decentralized applications
              (dApps).
            </li>
            <li>
              Understand blockchain security best practices and scalability
              solutions.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <PaymentCard />
      </div>
    </div>
  );
};
export default Overview;
