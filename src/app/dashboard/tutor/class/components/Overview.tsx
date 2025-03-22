import { Edit2 } from "lucide-react";

interface OverviewProps {
  onEdit?: () => void;
  canEdit?: boolean;
}

export const Overview = ({ onEdit, canEdit = false }: OverviewProps) => {
  return (
    <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Overview</h2>
        {canEdit && (
          <button
            onClick={onEdit}
            className="flex items-center gap-2 text-gray-400 hover:text-white border border-[#373737] rounded-full px-4 py-2"
          >
            <Edit2 size={16} />
            <span className="text-sm">Edit</span>
          </button>
        )}
      </div>
      <hr className="border-[#292929] my-4" />

      <div className="space-y-6 text-gray-300">
        <div className="space-y-4">
          <p className="leading-relaxed">
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

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#767776]">
            What You Will Learn
          </h3>
          <ul className="space-y-3">
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Introduction to Blockchain & Cryptography – Learn the core
              principles of blockchain, decentralization, and cryptographic
              security.
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Ethereum & Smart Contracts – Explore the Ethereum blockchain,
              Solidity programming, and the development of smart contracts.
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Decentralized Applications (dApps) – Build real-world dApps,
              integrate Web3 technologies, and interact with smart contracts.
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Consensus Mechanisms & Layer 2 Solutions – Understand Proof of
              Work (PoW), Proof of Stake (PoS), and Layer 2 scaling solutions
              like StarkNet.
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Token Standards & DeFi Applications – Learn about ERC-20, ERC-721
              (NFTs), and how decentralized finance (DeFi) platforms work.
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Security & Best Practices – Explore common vulnerabilities in
              smart contracts and how to mitigate them.
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Project-Based Learning – Apply your knowledge by developing and
              deploying your own blockchain-based project.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#767776]">
            Who This Course Is For
          </h3>
          <ul className="space-y-3">
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Beginners with no prior blockchain experience
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Developers looking to transition into Web3 development
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Entrepreneurs interested in building blockchain-based products
            </li>
            <li className="relative pl-4 text-[#D9D9D9]">
              <span className="absolute left-0 text-[#767776]">•</span>
              Tech enthusiasts who want to understand the future of
              decentralized technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
