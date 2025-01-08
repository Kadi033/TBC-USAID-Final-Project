"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <footer className="pt-2 px-4 flex items-start bg-[#201f24] text-white h-[56px] rounded-t-lg fixed bottom-0 w-full">
      <nav className=" flex justify-between w-full ">
        <Link href="/">
          <button
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded-tl-lg rounded-tr-lg ${
              isActive("/")
                ? "bg-white border-b-4 border-green"
                : "bg-[#201f24]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21 11.5928L21 20.26C21 20.6578 20.842 21.0394 20.5607 21.3207C20.2794 21.602 19.8978 21.76 19.5 21.76H15.75C15.3522 21.76 14.9706 21.602 14.6893 21.3207C14.408 21.0394 14.25 20.6578 14.25 20.26L14.25 16.51C14.25 16.3111 14.171 16.1203 14.0303 15.9797C13.8897 15.839 13.6989 15.76 13.5 15.76H10.5C10.3011 15.76 10.1103 15.839 9.96967 15.9797C9.82902 16.1203 9.75 16.3111 9.75 16.51L9.75 20.26C9.75 20.6578 9.59196 21.0394 9.31066 21.3207C9.02936 21.602 8.64782 21.76 8.25 21.76H4.5C4.10218 21.76 3.72064 21.602 3.43934 21.3207C3.15804 21.0394 3 20.6578 3 20.26L3 11.5928C2.99997 11.3852 3.04303 11.1799 3.12646 10.9898C3.20989 10.7997 3.33187 10.629 3.48469 10.4884L10.9847 3.41219L10.995 3.40188C11.2711 3.15075 11.631 3.0116 12.0042 3.0116C12.3775 3.0116 12.7373 3.15075 13.0134 3.40188C13.0166 3.40555 13.0201 3.40899 13.0237 3.41219L20.5237 10.4884C20.675 10.6297 20.7954 10.8007 20.8774 10.9908C20.9594 11.1809 21.0011 11.3858 21 11.5928Z"
                fill={isActive("/") ? "#277C78" : "#B3B3B3"}
              />
            </svg>
          </button>
        </Link>

        <Link href="/transactions">
          <button
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded-tl-lg rounded-tr-lg ${
              isActive("/transactions")
                ? "bg-white border-b-4 border-green"
                : "bg-[#201f24]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M11.1929 16.9731C11.2498 17.1102 11.2647 17.261 11.2358 17.4065C11.207 17.552 11.1356 17.6857 11.0307 17.7906L8.03073 20.7906C7.96107 20.8604 7.87836 20.9157 7.78731 20.9534C7.69626 20.9912 7.59866 21.0106 7.5001 21.0106C7.40154 21.0106 7.30395 20.9912 7.2129 20.9534C7.12185 20.9157 7.03913 20.8604 6.96948 20.7906L3.96948 17.7906C3.86447 17.6858 3.79294 17.5521 3.76396 17.4065C3.73497 17.2609 3.74982 17.11 3.80664 16.9729C3.86345 16.8358 3.95967 16.7186 4.08312 16.6362C4.20656 16.5538 4.35168 16.5099 4.5001 16.51H6.7501L6.7501 5.26002C6.7501 5.06111 6.82912 4.87034 6.96977 4.72969C7.11043 4.58904 7.30119 4.51002 7.5001 4.51002C7.69902 4.51002 7.88978 4.58904 8.03043 4.72969C8.17108 4.87034 8.2501 5.06111 8.2501 5.26002L8.2501 16.51H10.5001C10.6484 16.51 10.7934 16.5541 10.9168 16.6365C11.0401 16.7189 11.1362 16.8361 11.1929 16.9731ZM20.0307 7.72939L17.0307 4.7294C16.9611 4.65966 16.8784 4.60434 16.7873 4.5666C16.6963 4.52886 16.5987 4.50943 16.5001 4.50943C16.4015 4.50943 16.3039 4.52886 16.2129 4.5666C16.1219 4.60434 16.0391 4.65966 15.9695 4.7294L12.9695 7.72939C12.8645 7.83429 12.7929 7.96798 12.764 8.11354C12.735 8.2591 12.7498 8.41 12.8066 8.54711C12.8635 8.68423 12.9597 8.80141 13.0831 8.88381C13.2066 8.96621 13.3517 9.01014 13.5001 9.01002H15.7501L15.7501 20.26C15.7501 20.4589 15.8291 20.6497 15.9698 20.7903C16.1104 20.931 16.3012 21.01 16.5001 21.01C16.699 21.01 16.8898 20.931 17.0304 20.7903C17.1711 20.6497 17.2501 20.4589 17.2501 20.26V9.01002L19.5001 9.01002C19.6485 9.01014 19.7936 8.96621 19.9171 8.88381C20.0405 8.80141 20.1368 8.68423 20.1936 8.54711C20.2504 8.41 20.2652 8.2591 20.2362 8.11354C20.2073 7.96798 20.1357 7.83429 20.0307 7.72939Z"
                fill={isActive("/transactions") ? "#277C78" : "#B3B3B3"}
              />
            </svg>
          </button>
        </Link>
        <Link href="/pots">
          <button
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded-tl-lg rounded-tr-lg ${
              isActive("/pots")
                ? "bg-white border-b-4 border-green"
                : "bg-[#201f24]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.25 5.33595V3.76001C17.25 3.36219 17.092 2.98065 16.8107 2.69935C16.5294 2.41804 16.1478 2.26001 15.75 2.26001L8.25 2.26001C7.85218 2.26001 7.47064 2.41804 7.18934 2.69935C6.90804 2.98065 6.75 3.36219 6.75 3.76001V5.33595C5.90354 5.50963 5.14289 5.96995 4.59637 6.63927C4.04985 7.30858 3.75092 8.14591 3.75 9.01001L3.75 19.51C3.75 20.5046 4.14509 21.4584 4.84835 22.1617C5.55161 22.8649 6.50544 23.26 7.5 23.26L16.5 23.26C17.4946 23.26 18.4484 22.8649 19.1517 22.1617C19.8549 21.4584 20.25 20.5046 20.25 19.51L20.25 9.01001C20.2491 8.14591 19.9501 7.30858 19.4036 6.63927C18.8571 5.96995 18.0965 5.50963 17.25 5.33595ZM11.25 3.76001L12.75 3.76001V5.26001H11.25V3.76001ZM8.25 3.76001H9.75V5.26001H8.25V3.76001ZM12.75 18.01V18.76C12.75 18.9589 12.671 19.1497 12.5303 19.2903C12.3897 19.431 12.1989 19.51 12 19.51C11.8011 19.51 11.6103 19.431 11.4697 19.2903C11.329 19.1497 11.25 18.9589 11.25 18.76V18.01H10.5C10.3011 18.01 10.1103 17.931 9.96967 17.7903C9.82902 17.6497 9.75 17.4589 9.75 17.26C9.75 17.0611 9.82902 16.8703 9.96967 16.7297C10.1103 16.589 10.3011 16.51 10.5 16.51H12.75C12.9489 16.51 13.1397 16.431 13.2803 16.2903C13.421 16.1497 13.5 15.9589 13.5 15.76C13.5 15.5611 13.421 15.3703 13.2803 15.2297C13.1397 15.089 12.9489 15.01 12.75 15.01H11.25C10.6533 15.01 10.081 14.773 9.65901 14.351C9.23705 13.929 9 13.3567 9 12.76C9 12.1633 9.23705 11.591 9.65901 11.169C10.081 10.7471 10.6533 10.51 11.25 10.51V9.76001C11.25 9.5611 11.329 9.37033 11.4697 9.22968C11.6103 9.08903 11.8011 9.01001 12 9.01001C12.1989 9.01001 12.3897 9.08903 12.5303 9.22968C12.671 9.37033 12.75 9.5611 12.75 9.76001V10.51H13.5C13.6989 10.51 13.8897 10.589 14.0303 10.7297C14.171 10.8703 14.25 11.0611 14.25 11.26C14.25 11.4589 14.171 11.6497 14.0303 11.7903C13.8897 11.931 13.6989 12.01 13.5 12.01H11.25C11.0511 12.01 10.8603 12.089 10.7197 12.2297C10.579 12.3703 10.5 12.5611 10.5 12.76C10.5 12.9589 10.579 13.1497 10.7197 13.2903C10.8603 13.431 11.0511 13.51 11.25 13.51H12.75C13.3467 13.51 13.919 13.7471 14.341 14.169C14.7629 14.591 15 15.1633 15 15.76C15 16.3567 14.7629 16.929 14.341 17.351C13.919 17.773 13.3467 18.01 12.75 18.01ZM15.75 5.26001H14.25V3.76001H15.75V5.26001Z"
                fill={isActive("/pots") ? "#277C78" : "#B3B3B3"}
              />
            </svg>
          </button>
        </Link>
        <Link href="/bills">
          <button
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded-tl-lg rounded-tr-lg ${
              isActive("/bills")
                ? "bg-white border-b-4 border-green"
                : "bg-[#201f24]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.25 4.51001L3.75 4.51001C3.35218 4.51001 2.97064 4.66804 2.68934 4.94935C2.40804 5.23065 2.25 5.61219 2.25 6.01001L2.25 20.26C2.25007 20.3878 2.28281 20.5135 2.34511 20.6251C2.40741 20.7368 2.49721 20.8306 2.60597 20.8978C2.71474 20.9649 2.83887 21.0032 2.96657 21.0089C3.09427 21.0146 3.22131 20.9875 3.33563 20.9303L6 19.5981L8.66437 20.9303C8.76857 20.9825 8.88348 21.0096 9 21.0096C9.11652 21.0096 9.23143 20.9825 9.33563 20.9303L12 19.5981L14.6644 20.9303C14.7686 20.9825 14.8835 21.0096 15 21.0096C15.1165 21.0096 15.2314 20.9825 15.3356 20.9303L18 19.5981L20.6644 20.9303C20.7787 20.9875 20.9057 21.0146 21.0334 21.0089C21.1611 21.0032 21.2853 20.9649 21.394 20.8978C21.5028 20.8306 21.5926 20.7368 21.6549 20.6251C21.7172 20.5135 21.7499 20.3878 21.75 20.26L21.75 6.01001C21.75 5.61219 21.592 5.23065 21.3107 4.94935C21.0294 4.66804 20.6478 4.51001 20.25 4.51001ZM16.5 14.26L7.5 14.26C7.30109 14.26 7.11032 14.181 6.96967 14.0403C6.82902 13.8997 6.75 13.7089 6.75 13.51C6.75 13.3111 6.82902 13.1203 6.96967 12.9797C7.11032 12.839 7.30109 12.76 7.5 12.76L16.5 12.76C16.6989 12.76 16.8897 12.839 17.0303 12.9797C17.171 13.1203 17.25 13.3111 17.25 13.51C17.25 13.7089 17.171 13.8997 17.0303 14.0403C16.8897 14.181 16.6989 14.26 16.5 14.26ZM16.5 11.26L7.5 11.26C7.30109 11.26 7.11032 11.181 6.96967 11.0403C6.82902 10.8997 6.75 10.7089 6.75 10.51C6.75 10.3111 6.82902 10.1203 6.96967 9.97968C7.11032 9.83903 7.30109 9.76001 7.5 9.76001L16.5 9.76001C16.6989 9.76001 16.8897 9.83903 17.0303 9.97968C17.171 10.1203 17.25 10.3111 17.25 10.51C17.25 10.7089 17.171 10.8997 17.0303 11.0403C16.8897 11.181 16.6989 11.26 16.5 11.26Z"
                fill={isActive("/bills") ? "#277C78" : "#B3B3B3"}
              />
            </svg>
          </button>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;