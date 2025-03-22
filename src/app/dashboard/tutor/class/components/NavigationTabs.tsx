interface Tab {
  label: string;
  isActive?: boolean;
}

interface NavigationTabsProps {
  tabs: Tab[];
  onTabChange: (index: number) => void;
}

export const NavigationTabs = ({ tabs, onTabChange }: NavigationTabsProps) => {
  return (
    <div className="flex space-x-1 border-b border-[#2C2F35]">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`
            flex-1 px-4 py-2 text-sm font-medium rounded-t-lg
            ${
              tab.isActive
                ? "bg-[#2C2F35] text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }
            transition-colors duration-150
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
