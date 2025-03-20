interface DateActionButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function DateActionButton({ label, isActive, onClick }: DateActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? "bg-[#FFFFFF1A]" : ""} w-full px-3 py-3 bg-none border border-[#2D2E2D] hover:bg-[#FFFFFF1A] rounded-3xl transition-colors`}
    >
      {label}
    </button>
  );
}
