"use client";
import Logo from "../../../../../public/skillnet-white logo.png";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useWalletContext } from "../../../../useContext/WalletContext";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { WalletSelectorUI } from "../../../../components/WalletConnectModal";
import { Notification } from "@/svg/notification";
import avatar from "../../../../../public/image/Ellipse 43.png";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  navLinks?: NavLink[];
}

export default function Navbar({ navLinks = [] }: NavbarProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDisconnectModalVisible, setIsDisconnectModalVisible] =
    useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { account, disconnectWallet } = useWalletContext();
  const pathname = usePathname();

  // Toggle modal visibility; also ensure that if one is open, the other is closed.
  const showModal = () => {
    setIsModalVisible((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isModalVisible) setIsModalVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper function to truncate the wallet address
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <nav className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-16 py-[22px] bg-[#101110] text-sm leading-6 text-[#FCFCFC] sticky top-0 left-0 ">
      {/* Logo */}
      <button className="flex items-center cursor-pointer">
        <Image className="w-[100px] h-[40px]" src={Logo} alt="Logo" />
      </button>

      <ul className="hidden md:flex justify-center items-center gap-4">
        <Link href="">
          <span
            className={`relative cursor-pointer pb-1 group ${
              pathname === "/dashboard/learning"
                ? "text-white"
                : "text-[#FCFCFC]"
            }`}
          >
            Learning Hub
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 
          ${
            pathname === "/dashboard/learning" || pathname === "/dashboard/learning/class" ? "scale-x-100" : "scale-x-0"
          } group-hover:scale-x-100`}
            />
          </span>
        </Link>
      </ul>

      {/* Desktop Wallet Button */}
      <div className="hidden md:flex items-center gap-7 relative ">
        <div className="flex gap-2 items-center">
          <Notification />
          <input
            type="text"
            name="search"
            className="bg-transparent p-2 border border-[#1F1F1F] placeholder:italic rounded-md focus:outline-none"
            placeholder="search.."
          />
        </div>
        {!address ? (
          <>
            <button className="px-4 py-2 bg-greenish-500 hover:bg-greenish-300 cursor-pointer border text-white text-center font-semibold rounded-lg transition-colors hover:text-black hover:bg-white flex items-center  gap-3">
              <Image src={avatar} className="w-7 h-7 rounded-full" alt="user" />
              Not connected
            </button>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <div className="text-base font-medium px-4 py-2 bg-greenish-500 text-white rounded-lg">
              {address.slice(0, 6)}...{address.slice(-4)}
            </div>
            <button
              onClick={() => disconnect()}
              className="cursor-pointer border px-4 py-2 bg-greenish-500 text-center hover:bg-greenish-300 text-white font-semibold rounded-lg transition-colors hover:text-black hover:bg-white"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>

      {/* Mobile Wallet Button and Menu Toggle */}
      <div className="flex md:hidden items-center gap-4">
        {account ? (
          <button
            onClick={() => setIsDisconnectModalVisible(true)}
            className="border border-[#313130] rounded-lg py-3 px-4 font-bold text-sm"
          >
            {truncateAddress(account)}
          </button>
        ) : (
          <button
            onClick={showModal}
            className="border border-[#313130] rounded-lg py-3 px-4 font-bold text-sm"
          >
            CONNECT
          </button>
        )}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-[#313130] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-4 mt-2 w-64 rounded-lg bg-[#101110] border border-[#313130] shadow-lg md:hidden"
        >
          <div className="px-6 py-4 border-b border-[#313130]">
            <h3 className="text-sm font-semibold text-white">SELECT PAGE</h3>
          </div>
          <div className="py-5 pl-7">
            <Link href="">
              <span
                className={`relative cursor-pointer pb-1 group ${
                  pathname === "/dashboard/learning"
                    ? "text-white"
                    : "text-[#FCFCFC]"
                }`}
              >
                Learning Hub
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 
          ${
            pathname === "/dashboard/learning" ? "scale-x-100" : "scale-x-0"
          } group-hover:scale-x-100`}
                />
              </span>
            </Link>
          </div>
        </div>
      )}

      {isModalVisible && (
        <div className="absolute top-full left-0 right-3 md:right-10 md:left-auto px-4 mt-2 z-10">
          <WalletSelectorUI onClose={() => setIsModalVisible(false)} />
        </div>
      )}

      {isDisconnectModalVisible && (
        <div
          className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsDisconnectModalVisible(false)}
        >
          <div
            className="w-[300px] bg-neutral-900 p-6 rounded-lg text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">Disconnect Wallet</h3>
            <p className="mb-6">
              Are you sure you want to disconnect your wallet?
            </p>
            <div className="flex justify-around">
              <button
                className="border border-[#313130] rounded-lg px-4 py-2 hover:bg-[#313130] transition-colors"
                onClick={() => setIsDisconnectModalVisible(false)}
              >
                Cancel
              </button>
              <button
                className="border border-[#313130] rounded-lg px-4 py-2 hover:bg-[#313130] transition-colors"
                onClick={() => {
                  disconnectWallet();
                  setIsDisconnectModalVisible(false);
                }}
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
