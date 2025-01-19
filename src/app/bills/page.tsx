import Footer from "@/components/Footer";
import PcFooter from "@/components/PcFooter";
import Image from "next/image";

export default function Bills() {
  return (
    <section className="lg:flex">
      <PcFooter />
      <div className="w-full lg:ml-[300px]">
        <header className="lg:pt-3 pl-5">
          <h1 className="text-preset-1 font-sans px-5 py-5">Recurring Bills</h1>
        </header>
        <main className="mb-20 lg:mb-5 pl-5">
          <div className="flex bg-grey-900 py-6 px-5 rounded-xl gap-6 items-center mx-5 mt-5">
            <div>
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  
                  d="M28.4375 16.25C28.4375 16.4986 28.3387 16.7371 28.1629 16.9129C27.9871 17.0887 27.7486 17.1875 27.5 17.1875H12.5C12.2514 17.1875 12.0129 17.0887 11.8371 16.9129C11.6613 16.7371 11.5625 16.4986 11.5625 16.25C11.5625 16.0014 11.6613 15.7629 11.8371 15.5871C12.0129 15.4113 12.2514 15.3125 12.5 15.3125H27.5C27.7486 15.3125 27.9871 15.4113 28.1629 15.5871C28.3387 15.7629 28.4375 16.0014 28.4375 16.25ZM27.5 20.3125H12.5C12.2514 20.3125 12.0129 20.4113 11.8371 20.5871C11.6613 20.7629 11.5625 21.0014 11.5625 21.25C11.5625 21.4986 11.6613 21.7371 11.8371 21.9129C12.0129 22.0887 12.2514 22.1875 12.5 22.1875H27.5C27.7486 22.1875 27.9871 22.0887 28.1629 21.9129C28.3387 21.7371 28.4375 21.4986 28.4375 21.25C28.4375 21.0014 28.3387 20.7629 28.1629 20.5871C27.9871 20.4113 27.7486 20.3125 27.5 20.3125ZM35.9375 8.75V32.5C35.9373 32.6598 35.8963 32.8168 35.8184 32.9563C35.7404 33.0958 35.6282 33.213 35.4922 33.2969C35.3446 33.389 35.174 33.4378 35 33.4375C34.8547 33.4376 34.7113 33.4039 34.5813 33.3391L30 31.0484L25.4187 33.3391C25.2887 33.404 25.1453 33.4378 25 33.4378C24.8547 33.4378 24.7113 33.404 24.5813 33.3391L20 31.0484L15.4187 33.3391C15.2887 33.404 15.1453 33.4378 15 33.4378C14.8547 33.4378 14.7113 33.404 14.5813 33.3391L10 31.0484L5.41875 33.3391C5.2758 33.4104 5.11697 33.4441 4.95736 33.4368C4.79775 33.4295 4.64264 33.3816 4.50676 33.2975C4.37089 33.2135 4.25875 33.0961 4.18099 32.9565C4.10324 32.8169 4.06245 32.6598 4.0625 32.5V8.75C4.0625 8.16984 4.29297 7.61344 4.7032 7.2032C5.11344 6.79297 5.66984 6.5625 6.25 6.5625H33.75C34.3302 6.5625 34.8866 6.79297 35.2968 7.2032C35.707 7.61344 35.9375 8.16984 35.9375 8.75ZM34.0625 8.75C34.0625 8.66712 34.0296 8.58763 33.971 8.52903C33.9124 8.47042 33.8329 8.4375 33.75 8.4375H6.25C6.16712 8.4375 6.08763 8.47042 6.02903 8.52903C5.97042 8.58763 5.9375 8.66712 5.9375 8.75V30.9828L9.58125 29.1609C9.71129 29.096 9.85465 29.0622 10 29.0622C10.1453 29.0622 10.2887 29.096 10.4187 29.1609L15 31.4516L19.5813 29.1609C19.7113 29.096 19.8547 29.0622 20 29.0622C20.1453 29.0622 20.2887 29.096 20.4187 29.1609L25 31.4516L29.5813 29.1609C29.7113 29.096 29.8547 29.0622 30 29.0622C30.1453 29.0622 30.2887 29.096 30.4187 29.1609L34.0625 30.9828V8.75Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-white text-preset-5 font-sans">Total Bills</p>
              <h2 className="text-white pt-3 text-preset-1 font-sans">
                $384.98
              </h2>
            </div>
          </div>
          <div className="flex flex-col bg-white p-5 rounded-xl mx-5 mt-2 ">
            <h1 className="font-sans text-preset-3 text-grey-900">Summery</h1>
            <div className="flex items-center justify-between mt-5">
              <p className="text-grey-500 text-preset-5 font-mono">
                Paid Bills
              </p>
              <h2 className="text-grey-900 text-preset-5 font-sans">
                3 ($180.00)
              </h2>
            </div>
            <hr className="mt-4 mb-4 w-full bg-grey-300" />
            <div className="flex items-center justify-between">
              <p className="text-grey-500 text-preset-5 font-mono">
                Total Upcoming
              </p>
              <h2 className="text-grey-900 text-preset-5 font-sans">
                5 ($204.98)
              </h2>
            </div>
            <hr className="mt-4 mb-4 w-full bg-grey-300" />
            <div className="flex items-center justify-between">
              <p className="text-red text-preset-5 font-mono">Due Soon</p>
              <h2 className="text-red text-preset-5 font-sans">1 ($10.00)</h2>
            </div>
          </div>

          <div className="bg-white rounded-tl-xl rounded-tr-xl px-5 pt-6 pb-0 mt-6 mx-5 flex gap-6 items-center justify-between ">
            <div className="relative w-full">
              <input
                className="w-full px-5 py-3 border text-grey-900 border-beige-500 rounded-lg outline-none font-mono font-normal text-preset-5"
                type="text"
                name=""
                id=""
                placeholder="Search Bills"
              />
              <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                <svg
                 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    
                    d="M14.3538 14.1462L11.2244 11.0175C12.1314 9.92856 12.5837 8.53186 12.4872 7.11795C12.3906 5.70404 11.7527 4.38177 10.7061 3.42622C9.65951 2.47067 8.2848 1.9554 6.86796 1.9876C5.45113 2.0198 4.10125 2.59699 3.09913 3.5991C2.09702 4.60122 1.51983 5.9511 1.48763 7.36793C1.45543 8.78477 1.9707 10.1595 2.92625 11.2061C3.88181 12.2527 5.20407 12.8906 6.61798 12.9871C8.03189 13.0837 9.42859 12.6314 10.5175 11.7244L13.6463 14.8537C13.6927 14.9002 13.7479 14.937 13.8086 14.9622C13.8693 14.9873 13.9343 15.0003 14 15.0003C14.0657 15.0003 14.1308 14.9873 14.1915 14.9622C14.2522 14.937 14.3073 14.9002 14.3538 14.8537C14.4002 14.8073 14.4371 14.7521 14.4622 14.6914C14.4874 14.6307 14.5003 14.5657 14.5003 14.5C14.5003 14.4343 14.4874 14.3692 14.4622 14.3085C14.4371 14.2478 14.4002 14.1927 14.3538 14.1462ZM2.50002 7.49999C2.50002 6.60997 2.76394 5.73994 3.25841 4.99992C3.75287 4.2599 4.45568 3.68313 5.27795 3.34253C6.10021 3.00194 7.00501 2.91282 7.87793 3.08646C8.75084 3.26009 9.55266 3.68867 10.182 4.31801C10.8113 4.94735 11.2399 5.74917 11.4136 6.62208C11.5872 7.495 11.4981 8.3998 11.1575 9.22207C10.8169 10.0443 10.2401 10.7471 9.50009 11.2416C8.76007 11.7361 7.89004 12 7.00002 12C5.80695 11.9987 4.66313 11.5241 3.8195 10.6805C2.97587 9.83688 2.50134 8.69306 2.50002 7.49999Z"
                    fill="#201F24"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="">
              <svg
               
                id="mobile-logo"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  
                  d="M16.25 3L3.75 3C3.41848 3 3.10054 3.1317 2.86612 3.36612C2.6317 3.60054 2.5 3.91848 2.5 4.25L2.5 16.75C2.5 17.0815 2.6317 17.3995 2.86612 17.6339C3.10054 17.8683 3.41848 18 3.75 18H16.25C16.5815 18 16.8995 17.8683 17.1339 17.6339C17.3683 17.3995 17.5 17.0815 17.5 16.75V4.25C17.5 3.91848 17.3683 3.60054 17.1339 3.36612C16.8995 3.1317 16.5815 3 16.25 3ZM5.625 6.125L13.125 6.125C13.2908 6.125 13.4497 6.19085 13.5669 6.30806C13.6842 6.42527 13.75 6.58424 13.75 6.75C13.75 6.91576 13.6842 7.07473 13.5669 7.19194C13.4497 7.30915 13.2908 7.375 13.125 7.375L5.625 7.375C5.45924 7.375 5.30027 7.30915 5.18306 7.19194C5.06585 7.07473 5 6.91576 5 6.75C5 6.58424 5.06585 6.42527 5.18306 6.30806C5.30027 6.19085 5.45924 6.125 5.625 6.125ZM8.75 14.875L5.625 14.875C5.45924 14.875 5.30027 14.8092 5.18306 14.6919C5.06585 14.5747 5 14.4158 5 14.25C5 14.0842 5.06585 13.9253 5.18306 13.8081C5.30027 13.6908 5.45924 13.625 5.625 13.625L8.75 13.625C8.91576 13.625 9.07473 13.6908 9.19194 13.8081C9.30915 13.9253 9.375 14.0842 9.375 14.25C9.375 14.4158 9.30915 14.5747 9.19194 14.6919C9.07473 14.8092 8.91576 14.875 8.75 14.875ZM9.375 11.125L5.625 11.125C5.45924 11.125 5.30027 11.0592 5.18306 10.9419C5.06585 10.8247 5 10.6658 5 10.5C5 10.3342 5.06585 10.1753 5.18306 10.0581C5.30027 9.94085 5.45924 9.875 5.625 9.875H9.375C9.54076 9.875 9.69973 9.94085 9.81694 10.0581C9.93415 10.1753 10 10.3342 10 10.5C10 10.6658 9.93415 10.8247 9.81694 10.9419C9.69973 11.0592 9.54076 11.125 9.375 11.125ZM15.4422 13.4422L13.5672 15.3172C13.5091 15.3753 13.4402 15.4214 13.3643 15.4529C13.2885 15.4843 13.2071 15.5005 13.125 15.5005C13.0429 15.5005 12.9615 15.4843 12.8857 15.4529C12.8098 15.4214 12.7409 15.3753 12.6828 15.3172L10.8078 13.4422C10.6905 13.3249 10.6247 13.1659 10.6247 13C10.6247 12.8341 10.6905 12.6751 10.8078 12.5578C10.9251 12.4405 11.0841 12.3747 11.25 12.3747C11.4159 12.3747 11.5749 12.4405 11.6922 12.5578L12.5 13.3664V9.875C12.5 9.70924 12.5658 9.55027 12.6831 9.43306C12.8003 9.31585 12.9592 9.25 13.125 9.25C13.2908 9.25 13.4497 9.31585 13.5669 9.43306C13.6842 9.55027 13.75 9.70924 13.75 9.875V13.3664L14.5578 12.5578C14.6751 12.4405 14.8341 12.3747 15 12.3747C15.1659 12.3747 15.3249 12.4405 15.4422 12.5578C15.5595 12.6751 15.6253 12.8341 15.6253 13C15.6253 13.1659 15.5595 13.3249 15.4422 13.4422Z"
                  fill="#201F24"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-bl-xl rounded-br-xl px-5 pt-0 mx-5">
            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 3.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  Spark Electric Solutions
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 2nd
                  </p>
                  <Image
                    width={14}
                    height={18}
                    src={"/assets/logos/download.svg"}
                    alt="logo"
                    priority
                    className="rounded-full"
                  />
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">
                  -$100.00
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 2.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  Serenity Spa & Wellness
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 3rd
                  </p>
                  <Image
                    width={14}
                    height={18}
                    src={"/assets/logos/download.svg"}
                    alt="logo"
                    priority
                    className="rounded-full"
                  />
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$30.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 1.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  Elevate Education
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 4th
                  </p>
                  <Image
                    width={14}
                    height={18}
                    src={"/assets/logos/download.svg"}
                    alt="logo"
                    priority
                    className="rounded-full"
                  />
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$50.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 5.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  Pixel Playground
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 11th
                  </p>
                  <Image
                    width={14}
                    height={18}
                    src={"/assets/logos/download.svg"}
                    alt="logo"
                    priority
                    className="rounded-full"
                  />
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$10.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 15.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  Nimbus Data Storage
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 21st
                  </p>
                  <Image
                    width={14}
                    height={18}
                    src={"/assets/logos/download1.svg"}
                    alt="logo"
                    priority
                    className="rounded-full"
                  />
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$9.99</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 13.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  ByteWise
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 23rd
                  </p>
                  <Image
                    width={14}
                    height={18}
                    src={"/assets/logos/download1.svg"}
                    alt="logo"
                    priority
                    className="rounded-full"
                  />
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$49.99</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 7.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  EcoFuel Energy
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 29th
                  </p>
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$35.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  width={32}
                  height={32}
                  src={"/assets/logos/Logo 6.jpg"}
                  alt="logo"
                  priority
                  className="rounded-full"
                />
                <p className="text-preset-4 text-grey-900 font-sans">
                  Aqua Flow Utilities
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-preset-5 text-green font-mono">
                    Monthly - 30th
                  </p>
                </div>

                <p className="text-preset-4 text-grey-900 font-sans">$100.00</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </section>
  );
}
