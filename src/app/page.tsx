"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number): void => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section>
      <header>
        <h1 className="text-preset-1 font-sans px-5 py-5">Overview</h1>
      </header>
      <main>
        <div className="flex flex-col items-center mx-5">
          <div className="bg-grey-900 w-full h-28 rounded-xl my-4 ">
            <h2 className="text-white font-mono text-preset-4 px-4 py-4">
              Current Balance
            </h2>
            <h1 className="text-white font-sans text-preset-1 px-4">
              $4,835.00
            </h1>
          </div>
          <div className="bg-white w-full  h-28 rounded-xl my-4 ">
            <h2 className="text-grey-900 font-mono text-preset-4 px-4 py-4">
              Income
            </h2>
            <h1 className="text-grey-900 font-sans text-preset-1 px-4">
              $3,814.25
            </h1>
          </div>
          <div className="bg-white w-full  h-28 rounded-xl my-4 ">
            <h2 className="text-grey-900 font-mono text-preset-4 px-4 py-4">
              Income
            </h2>
            <h1 className="text-grey-900 font-sans text-preset-1 px-4">
              $1,700.50
            </h1>
          </div>
        </div>
        <div className="bg-white rounded-xl mx-5 px-5 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-grey-900 font-sans text-preset-1 py-5">Pots</h1>
            <div className="flex items-center gap-2">
              <p className="text-grey-500 font-mono text-preset-4">
                See Details
              </p>

              <Image
                width={12}
                height={12}
                src={"/assets/icons/Icon=caret-right.png"}
                alt="person"
                priority
                className="rounded-full filter brightness-[0] saturate-[100%] invert-[42%] sepia-[6%] hue-rotate-[333deg] contrast-[80%]"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center rounded-xl bg-grey-100 py-4 px-4 mt-5">
            <svg
              _ngcontent-ng-c2202246646=""
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                _ngcontent-ng-c2202246646=""
                d="M28.4375 7.8875V5C28.4375 4.41984 28.207 3.86344 27.7968 3.4532C27.3866 3.04297 26.8302 2.8125 26.25 2.8125H13.75C13.1698 2.8125 12.6134 3.04297 12.2032 3.4532C11.793 3.86344 11.5625 4.41984 11.5625 5V7.8875C10.1688 8.11196 8.90036 8.82505 7.98427 9.89915C7.06819 10.9733 6.5642 12.3383 6.5625 13.75V31.25C6.5625 32.8247 7.18806 34.3349 8.30155 35.4484C9.41505 36.5619 10.9253 37.1875 12.5 37.1875H27.5C29.0747 37.1875 30.5849 36.5619 31.6984 35.4484C32.8119 34.3349 33.4375 32.8247 33.4375 31.25V13.75C33.4358 12.3383 32.9318 10.9733 32.0157 9.89915C31.0996 8.82505 29.8312 8.11196 28.4375 7.8875ZM26.5625 5V7.8125H23.4375V4.6875H26.25C26.3329 4.6875 26.4124 4.72042 26.471 4.77903C26.5296 4.83763 26.5625 4.91712 26.5625 5ZM18.4375 7.8125V4.6875H21.5625V7.8125H18.4375ZM13.75 4.6875H16.5625V7.8125H13.4375V5C13.4375 4.91712 13.4704 4.83763 13.529 4.77903C13.5876 4.72042 13.6671 4.6875 13.75 4.6875ZM31.5625 31.25C31.5625 31.7835 31.4574 32.3118 31.2533 32.8047C31.0491 33.2975 30.7499 33.7454 30.3726 34.1226C29.9954 34.4999 29.5475 34.7991 29.0547 35.0033C28.5618 35.2074 28.0335 35.3125 27.5 35.3125H12.5C11.9665 35.3125 11.4382 35.2074 10.9453 35.0033C10.4525 34.7991 10.0046 34.4999 9.62738 34.1226C9.25014 33.7454 8.9509 33.2975 8.74674 32.8047C8.54258 32.3118 8.4375 31.7835 8.4375 31.25V13.75C8.4375 12.6726 8.86551 11.6392 9.62738 10.8774C10.3892 10.1155 11.4226 9.6875 12.5 9.6875H27.5C28.5774 9.6875 29.6108 10.1155 30.3726 10.8774C31.1345 11.6392 31.5625 12.6726 31.5625 13.75V31.25ZM24.6875 25C24.6875 25.9117 24.3253 26.786 23.6807 27.4307C23.036 28.0753 22.1617 28.4375 21.25 28.4375H20.9375V30C20.9375 30.2486 20.8387 30.4871 20.6629 30.6629C20.4871 30.8387 20.2486 30.9375 20 30.9375C19.7514 30.9375 19.5129 30.8387 19.3371 30.6629C19.1613 30.4871 19.0625 30.2486 19.0625 30V28.4375H17.5C17.2514 28.4375 17.0129 28.3387 16.8371 28.1629C16.6613 27.9871 16.5625 27.7486 16.5625 27.5C16.5625 27.2514 16.6613 27.0129 16.8371 26.8371C17.0129 26.6613 17.2514 26.5625 17.5 26.5625H21.25C21.6644 26.5625 22.0618 26.3979 22.3549 26.1049C22.6479 25.8118 22.8125 25.4144 22.8125 25C22.8125 24.5856 22.6479 24.1882 22.3549 23.8951C22.0618 23.6021 21.6644 23.4375 21.25 23.4375H18.75C17.8383 23.4375 16.964 23.0753 16.3193 22.4307C15.6747 21.786 15.3125 20.9117 15.3125 20C15.3125 19.0883 15.6747 18.214 16.3193 17.5693C16.964 16.9247 17.8383 16.5625 18.75 16.5625H19.0625V15C19.0625 14.7514 19.1613 14.5129 19.3371 14.3371C19.5129 14.1613 19.7514 14.0625 20 14.0625C20.2486 14.0625 20.4871 14.1613 20.6629 14.3371C20.8387 14.5129 20.9375 14.7514 20.9375 15V16.5625H22.5C22.7486 16.5625 22.9871 16.6613 23.1629 16.8371C23.3387 17.0129 23.4375 17.2514 23.4375 17.5C23.4375 17.7486 23.3387 17.9871 23.1629 18.1629C22.9871 18.3387 22.7486 18.4375 22.5 18.4375H18.75C18.3356 18.4375 17.9382 18.6021 17.6451 18.8951C17.3521 19.1882 17.1875 19.5856 17.1875 20C17.1875 20.4144 17.3521 20.8118 17.6451 21.1049C17.9382 21.3979 18.3356 21.5625 18.75 21.5625H21.25C22.1617 21.5625 23.036 21.9247 23.6807 22.5693C24.3253 23.214 24.6875 24.0883 24.6875 25Z"
                fill="#277C78"
              ></path>
            </svg>

            <div className="flex flex-col items-center">
              <p className="text-grey-500 font-mono text-preset-4 pt-2">
                Total Saved
              </p>
              <h1 className="text-grey-900 font-sans text-preset-1 py-3">
                $850
              </h1>
            </div>
          </div>
          <div className="flex gap-4 justify-between mt-5">
            <div className="flex gap-4 w-36">
              <div className="w-1 h-11 bg-green rounded-lg"></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-preset-5 font-mono">Savings</p>
                <h1 className="text-gray-900 text-preset-4 font-sans">$159</h1>
              </div>
            </div>
            <div className="flex gap-4 w-36">
              <div className="w-1 h-11 bg-cyan rounded-lg"></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-preset-5 font-mono">Gift</p>
                <h1 className="text-gray-900 text-preset-4 font-sans">$40</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between mt-4">
            <div className="flex gap-4 w-36">
              <div className="w-1 h-11 bg-navy rounded-lg"></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-preset-5 font-mono">
                  Concert Ticket
                </p>
                <h1 className="text-gray-900 text-preset-4 font-sans">$110</h1>
              </div>
            </div>
            <div className="flex gap-4 w-36">
              <div className="w-1 h-11 bg-yellow rounded-lg"></div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-preset-5 font-mono">
                  New Laptop
                </p>
                <h1 className="text-gray-900 text-preset-4 font-sans">$10</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl mx-5 p-5  mt-5">
          <div className="flex items-center justify-between">
            <h1 className="text-grey-900 font-sans text-preset-1">
              Transactions
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-grey-500 font-mono text-preset-4">View All</p>
              <Image
                width={12}
                height={12}
                src={"/assets/icons/Icon=caret-right.png"}
                alt="person"
                priority
                className="rounded-full filter brightness-[0] saturate-[100%] invert-[42%] sepia-[6%] hue-rotate-[333deg] contrast-[80%]"
              />
            </div>
          </div>
          <div className="flex w-full justify-between border-b pb-5 mt-8  border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={"/assets/photos/Person 1.jpg"}
                alt="person"
                priority
                className="rounded-full"
              />
              <p>Emma Richardson</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-green font-sans text-preset-4 ">+$75.50</p>
              <p className="text-preset-5 text-grey-500">19 Aug 2024</p>
            </div>
          </div>

          <div className="flex w-full justify-between border-b pb-5 mt-8  border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={"/assets/logos/Logo 8.jpg"}
                alt="person"
                priority
                className="rounded-full"
              />
              <p>Emma Richardson</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-grey-900 font-sans text-preset-4 ">-$55.50</p>
              <p className="text-preset-5 text-grey-500">19 Aug 2024</p>
            </div>
          </div>

          <div className="flex w-full justify-between border-b pb-5 mt-8  border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={"/assets/photos/Person 9.jpg"}
                alt="person"
                priority
                className="rounded-full"
              />
              <p>Daniel Carter</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-grey-900 font-sans text-preset-4 ">-$42.30</p>
              <p className="text-preset-5 text-grey-500">18 Aug 2024</p>
            </div>
          </div>

          <div className="flex w-full justify-between border-b pb-5 mt-8  border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={"/assets/photos/Person 2.jpg"}
                alt="person"
                priority
                className="rounded-full"
              />
              <p>Sun Park</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-green font-sans text-preset-4 ">+$120.00</p>
              <p className="text-preset-5 text-grey-500">17 Aug 2024</p>
            </div>
          </div>

          <div className="flex w-full justify-between border-b pb-5 mt-8  border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={"/assets/logos/Logo 14.jpg"}
                alt="person"
                priority
                className="rounded-full"
              />
              <p>Emma Richardson</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-grey-900 font-sans text-preset-4 ">-$65.00</p>
              <p className="text-preset-5 text-grey-500">17 Aug 2024</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl mx-5 p-5  mt-5">
          <div className="flex items-center justify-between">
            <h1 className="text-grey-900 font-sans text-preset-1 py-5">
              Budgets
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-grey-500 font-mono text-preset-4">
                See Details
              </p>
              <Image
                width={12}
                height={12}
                src={"/assets/icons/Icon=caret-right.png"}
                alt="person"
                priority
                className="rounded-full filter brightness-[0] saturate-[100%] invert-[42%] sepia-[6%] hue-rotate-[333deg] contrast-[80%]"
              />
            </div>
          </div>
          <h1 className="text-center text-grey-900">No available budgets</h1>
        </div>
      </main>
      <footer className="pt-2 px-4 flex  items-start bg-gray-900 text-white sticky bottom-0 h-[52px] rounded-t-lg ">
        <nav className=" flex justify-between w-full">
          <button
            onClick={() => handleClick(0)}
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded ${
              activeIndex === 0 ? "bg-white" : "bg-gray-900"
            } `}
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
                fill={activeIndex === 0 ? "green" : "#B3B3B3"}
              />
            </svg>
          </button>

          <button
            onClick={() => handleClick(1)}
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded ${
              activeIndex === 1 ? "bg-white" : "bg-gray-900"
            } `}
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
                fill={activeIndex === 1 ? "green" : "#B3B3B3"}
              />
            </svg>
          </button>
          <button
            onClick={() => handleClick(2)}
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded ${
              activeIndex === 2 ? "bg-white" : "bg-gray-900"
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M2.32038 11.5919C2.54185 9.73474 3.30145 7.98288 4.50569 6.55187C4.63894 6.39119 4.80425 6.2601 4.99106 6.16696C5.17787 6.07383 5.38206 6.02071 5.59057 6.01101C5.79908 6.0013 6.00732 6.03522 6.20198 6.11059C6.39663 6.18597 6.57341 6.30114 6.721 6.44875L9.31507 9.09812C9.56489 9.34737 9.71799 9.67731 9.74701 10.029C9.77603 10.3807 9.67909 10.7313 9.4735 11.0181C9.31778 11.239 9.2005 11.4847 9.12663 11.7447C9.10316 11.8214 9.05572 11.8886 8.99126 11.9363C8.9268 11.9841 8.84873 12.0099 8.7685 12.01L2.6935 12.01C2.64057 12.0101 2.58821 11.999 2.53988 11.9774C2.49155 11.9558 2.44834 11.9242 2.4131 11.8847C2.37785 11.8452 2.35137 11.7987 2.33539 11.7482C2.31941 11.6977 2.31429 11.6445 2.32038 11.5919ZM12.8804 3.01562C12.6732 2.99755 12.4645 3.02277 12.2676 3.08966C12.0707 3.15655 11.8898 3.26366 11.7365 3.40419C11.5832 3.54472 11.4608 3.71559 11.377 3.90596C11.2933 4.09632 11.2501 4.30202 11.2501 4.50999V8.32281C11.2475 8.6766 11.3711 9.01972 11.5988 9.29053C11.8265 9.56135 12.1433 9.74209 12.4923 9.80031C13.1494 9.90872 13.7518 10.2327 14.2044 10.7212C14.6571 11.2098 14.9344 11.835 14.9925 12.4985C15.0506 13.162 14.8863 13.8259 14.5254 14.3857C14.1646 14.9455 13.6277 15.3693 12.9994 15.5903C12.9263 15.6172 12.8632 15.6658 12.8186 15.7297C12.774 15.7936 12.7501 15.8696 12.7501 15.9475L12.7501 22.0628C12.7497 22.1159 12.7606 22.1685 12.7821 22.217C12.8036 22.2656 12.8352 22.309 12.8747 22.3445C12.9142 22.3799 12.9608 22.4066 13.0114 22.4227C13.062 22.4388 13.1154 22.4439 13.1682 22.4378C15.5081 22.1489 17.6649 21.0247 19.2417 19.272C20.8185 17.5193 21.7093 15.256 21.7501 12.8987C21.8204 7.80906 17.9241 3.4675 12.8804 3.01562ZM10.9923 15.5875C10.573 15.438 10.1923 15.197 9.87775 14.8821C9.56317 14.5672 9.32261 14.1863 9.1735 13.7669C9.14794 13.6925 9.09996 13.6279 9.03617 13.5819C8.97237 13.5359 8.8959 13.5108 8.81725 13.51L2.69257 13.51C2.63956 13.5097 2.58709 13.5206 2.5386 13.542C2.49012 13.5634 2.44673 13.5949 2.41129 13.6343C2.37586 13.6737 2.34918 13.7202 2.33303 13.7707C2.31687 13.8212 2.3116 13.8745 2.31757 13.9272C2.58017 16.0941 3.56166 18.1105 5.10514 19.654C6.64862 21.1975 8.66498 22.179 10.8319 22.4416C10.8846 22.4475 10.9379 22.4423 10.9884 22.4261C11.0389 22.4099 11.0854 22.3833 11.1248 22.3478C11.1642 22.3124 11.1957 22.269 11.2171 22.2205C11.2386 22.172 11.2495 22.1196 11.2491 22.0666L11.2491 15.9475C11.2493 15.8682 11.2246 15.7908 11.1785 15.7262C11.1324 15.6617 11.0673 15.6132 10.9923 15.5875Z"
                fill={activeIndex === 2 ? "green" : "#B3B3B3"}
              />
            </svg>
          </button>
          <button
            onClick={() => handleClick(3)}
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded ${
              activeIndex === 3 ? "bg-white" : "bg-gray-900"
            } `}
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
                fill={activeIndex === 3 ? "green" : "#B3B3B3"}
              />
            </svg>
          </button>
          <button
            onClick={() => handleClick(4)}
            className={`flex items-center justify-center w-[73px] pt-2 pb-3 rounded ${
              activeIndex === 4 ? "bg-white" : "bg-gray-900"
            } `}
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
                fill={activeIndex === 4 ? "green" : "#B3B3B3"}
              />
            </svg>
          </button>
        </nav>
      </footer>
    </section>
  );
}
