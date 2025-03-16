"use client";
import React from "react";
import { Button } from "../components/ui/Button";
import Image from "next/image";
import { useWalletContext } from "../useContext/WalletContext";
import ArgentImg from "../../public/svg/ArgentImg.svg";
import Braavos from "../../public/svg/Braavos.svg";
import { useConnect } from "@starknet-react/core";

interface WalletSelectorUIProps {
  onClose: () => void;
}

export function WalletSelectorUI({ onClose }: WalletSelectorUIProps) {
  const { account, disconnectWallet } = useWalletContext();

  const { connect, connectors } = useConnect();

  const getWalletDetails = (id: string) => {
    switch (id) {
      case "argentX":
        return {
          name: "Argent X",
          icon: ArgentImg,
        };
      case "braavos":
        return {
          name: "Braavos",
          icon: Braavos,
        };
      default:
        return {
          name: id,
          icon: Braavos, // fallback icon
        };
    }
  };

  return (
    <div className="absolute top-4 right-1 w-[300px] rounded-lg border border-neutral-800 bg-neutral-900/80 p-4">
      {account ? (
        <>
          <h2 className="mb-4 text-sm font-semibold text-neutral-400">
            CONNECTED WALLET
          </h2>
          <div className="mb-4 text-sm text-neutral-200">
            Address: {account}
          </div>
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-6 text-neutral-200 hover:bg-neutral-800 hover:text-white"
            onClick={() => {
              disconnectWallet();
              onClose();
            }}
          >
            Disconnect Wallet
          </Button>
        </>
      ) : (
        <>
          <h2 className="mb-4 text-sm font-semibold text-neutral-400">
            SELECT WALLET
          </h2>
          <div className="flex flex-col gap-2">
            {connectors.map((connector) => {
              const details = getWalletDetails(connector.id);
              return (
                <Button
                  key={connector.id}
                  variant="ghost"
                  className="w-full justify-start gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-6 text-neutral-200 hover:bg-neutral-800 hover:text-white"
                  onClick={() => {
                    connect({ connector });
                    onClose();
                  }}
                >
                  <Image
                    src={details.icon}
                    alt={details.name}
                    width={24}
                    height={24}
                  />
                  <span>{details.name}</span>
                </Button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
