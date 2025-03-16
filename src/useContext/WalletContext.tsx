"use client";

import React, { createContext, useContext } from "react";
import { useConnect, useAccount, useDisconnect } from "@starknet-react/core";

interface WalletContextProps {
  account: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextProps>({
  account: null,
  connectWallet: () => {},
  disconnectWallet: () => {},
});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { connect, connectors } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const connectWallet = () => {
    if (connectors && connectors.length > 0) {
      // Wrap the connector in an object as expected by connect()
      connect({ connector: connectors[0] });
    } else {
      console.error("No connectors available");
    }
  };

  return (
    <WalletContext.Provider
      value={{
        account: address ?? null, // convert undefined to null
        connectWallet,
        disconnectWallet: disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);