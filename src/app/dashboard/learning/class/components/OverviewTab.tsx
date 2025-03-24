const OverviewTab = () => {
  return (
    <div className="bg-[#161716] p-6 rounded-[12px]">
      <h2 className=" border-b border-[#292929] py-2 font-medium text-[18px] mb-[2rem]">
        Overview
      </h2>
      <div className="border-b border-[#292929] pb-[1rem] mb-[2rem]">
        <h1 className="text-[#767776] font-medium text-[18px] mb-[1rem]">
          Course Overview
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#D9D9D9] font-normal leading-[24px]">
          The Blockchain Development Bootcamp: Zero to Hero is an intensive,
          hands-on course designed to take learners from complete beginners to
          proficient blockchain developers. This course covers the fundamental
          concepts, tools, and frameworks necessary to build decentralized
          applications (dApps) and smart contracts on blockchain networks. By
          the end of the bootcamp, participants will have a deep understanding
          of blockchain technology, security best practices, and the skills
          required to develop and deploy blockchain-based solutions.
        </p>
      </div>
      <div className="border-b border-[#292929] pb-[1rem] mb-[2rem]">
        <h3 className="text-[#767776] font-medium text-[18px] mb-[1rem]">
          Whay You Will Learn
        </h3>
        <ul className="list-disc ml-4 text-[#D9D9D9]">
          {[
            "Introduction to Blockchain & Cryptography – Learn the core principles of blockchain, decentralization, and cryptographic security.",
            "Ethereum & Smart Contracts – Explore the Ethereum blockchain, Solidity programming, and the development of smart contracts.",
            "Decentralized Applications (dApps) – Build real-world dApps, integrate Web3 technologies, and interact with smart contracts.",
            "Consensus Mechanisms & Layer 2 Solutions – Understand Proof of Work (PoW), Proof of Stake (PoS), and Layer 2 scaling solutions like StarkNet.",
            "Token Standards & DeFi Applications – Learn about ERC-20, ERC-721 (NFTs), and how decentralized finance (DeFi) platforms work.",
            "Security & Best Practices – Explore common vulnerabilities in smart contracts and how to mitigate them.",
            "Project-Based Learning – Apply your knowledge by developing and deploying your own blockchain-based project.",
          ].map((text, index) => (
            <li
              key={index}
              className="ml-2 font-normal text-[14px] md:text-[16px] leading-[24px]"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[#767776] font-medium text-[18px] mb-[1rem]">
          Who This Course is For
        </h3>
        <ul className="list-disc ml-4 text-[#D9D9D9]">
          {[
            "Beginners with no prior blockchain experience",
            "Developers looking to transition into Web3 development",
            "Entrepreneurs interested in building blockchain-based products",
            "Tech enthusiasts who want to understand the future of decentralized technology",
          ].map((text, index) => (
            <li
              key={index}
              className="ml-2 font-normal text-[14px] md:text-[16px] leading-[24px]"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OverviewTab;
