"use client";
import { Telegram } from "@/svg/telegram";
import { Twitter } from "@/svg/twitter";
// import telegram from "../public/img/telegram.svg";
// import X from "../public/img/new-twitter.svg";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: "/dashboard/learning", label: "Learning hub" },
];

const FooterLinks = ({ href, label }: FooterLink) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`hover:text-white transition-colors duration-300 block w-full ${
        isActive ? "text-white font-semibold " : "text-[#ABABAB]"
      }`}
    >
      {label}
    </Link>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 lg:px-[100px] pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-12">
      <div className="border border-[#595958] rounded-lg">
        <div
          className="w-full flex flex-col sm:flex-row justify-between gap-8 sm:gap-0
                      pt-6 sm:pt-8 lg:pt-[56px] px-4 sm:px-6 pb-6"
        >
          <h5 className="text-lg sm:text-xl lg:text-[20px] leading-6 text-center sm:text-left text-white">
            SKILLNET
          </h5>

          <nav className="w-full sm:w-auto">
            <ul className="grid grid-cols-2 sm:flex sm:flex-row gap-y-4 gap-x-4 sm:gap-6 lg:gap-11 text-sm sm:text-base leading-5 justify-items-center sm:justify-start">
              {footerLinks.map((link) => (
                <li
                  key={link.href}
                  className="w-full sm:w-auto text-center sm:text-left"
                >
                  <FooterLinks href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className="flex flex-col-reverse sm:flex-row justify-between items-center
                      gap-4 sm:gap-0
                      border-t border-[#595958]
                      p-4 sm:p-6 lg:p-[24px]"
        >
          <ul className="flex flex-row justify-center items-center gap-5">
            <li className="cursor-pointer">
              <Link
                href="https://t.me/+wkTCPZzVyGU5ZDFk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Telegram />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                href="https://x.com/projectSkillNet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Twitter />
              </Link>
            </li>
          </ul>
          <p className="text-sm leading-4 text-center sm:text-right text-white">
            &copy; Copyright SkillNet {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
