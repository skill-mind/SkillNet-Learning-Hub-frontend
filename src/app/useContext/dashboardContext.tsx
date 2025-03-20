"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const DashBoardContext = createContext<{
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
  activeNotificationTab: string;
  setActiveNotificationTab: Dispatch<SetStateAction<string>>;
}>({
  activeSection: "home",
  setActiveSection: () => {},
  activeNotificationTab: "Messages", 
  setActiveNotificationTab: () => {},
});


export default function DashBoardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("home");
  const [activeNotificationTab, setActiveNotificationTab] =
    useState("Messages");

  return (
    <DashBoardContext.Provider
      value={{
        activeSection,
        setActiveSection,
        activeNotificationTab,
        setActiveNotificationTab,
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
}
