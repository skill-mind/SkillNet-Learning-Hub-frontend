import { Edit2 } from "lucide-react";

interface SummaryProps {
  onEdit?: () => void;
  canEdit?: boolean;
}

export const Summary = ({ onEdit, canEdit = false }: SummaryProps) => {
  return (
    <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Summary</h2>
        {canEdit && (
          <button
            onClick={onEdit}
            className="flex items-center gap-2 text-[#767776] hover:text-white border border-[#373737] rounded-full px-4 py-2"
          >
            <Edit2 size={16} />
            <span className="text-sm">Edit</span>
          </button>
        )}
      </div>
      <hr className="border-[#292929] my-4" />

      <p className="text-[#D9D9D9] text-[14px] leading-relaxed">
        The Blockchain Development Bootcamp: Zero to Hero is a step-by-step
        learning journey designed to transform beginners into skilled blockchain
        developers. Covering everything from blockchain fundamentals to advanced
        dApp development, this bootcamp provides a structured, project-based
        learning experience. With hands-on coding exercises, real-world
        applications, and expert guidance, participants will gain the confidence
        to build and deploy their own blockchain solutions.
      </p>
    </div>
  );
};
