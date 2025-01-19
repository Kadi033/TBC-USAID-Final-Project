import Footer from "@/components/Footer";
import PcFooter from "@/components/PcFooter";
import Image from "next/image";
export default function Transactions() {
  return (
    <section className="lg:flex">
      <PcFooter />
      <div className="w-full lg:ml-[300px]">
      <header className="lg:pt-3 pl-5">
        <h1 className="text-preset-1 font-sans px-5 py-5">Transactions</h1>
      </header>
      <main className="mb-20 lg:mb-5 pl-5">
        <div className="bg-white rounded-tl-xl rounded-tr-xl px-5 py-6 mt-2 mx-5 gap-6 flex items-center justify-between ">
          <div className="relative">
            <input
              className="w-[230px] px-5 py-3 border text-grey-900 border-beige-500 rounded-lg outline-none font-mono font-normal text-preset-5"
              type="text"
              name=""
              id=""
              placeholder="Search Transactions"
            />
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
              <svg
                _ngcontent-ng-c4230364666=""
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  _ngcontent-ng-c4230364666=""
                  d="M14.3538 14.1462L11.2244 11.0175C12.1314 9.92856 12.5837 8.53186 12.4872 7.11795C12.3906 5.70404 11.7527 4.38177 10.7061 3.42622C9.65951 2.47067 8.2848 1.9554 6.86796 1.9876C5.45113 2.0198 4.10125 2.59699 3.09913 3.5991C2.09702 4.60122 1.51983 5.9511 1.48763 7.36793C1.45543 8.78477 1.9707 10.1595 2.92625 11.2061C3.88181 12.2527 5.20407 12.8906 6.61798 12.9871C8.03189 13.0837 9.42859 12.6314 10.5175 11.7244L13.6463 14.8537C13.6927 14.9002 13.7479 14.937 13.8086 14.9622C13.8693 14.9873 13.9343 15.0003 14 15.0003C14.0657 15.0003 14.1308 14.9873 14.1915 14.9622C14.2522 14.937 14.3073 14.9002 14.3538 14.8537C14.4002 14.8073 14.4371 14.7521 14.4622 14.6914C14.4874 14.6307 14.5003 14.5657 14.5003 14.5C14.5003 14.4343 14.4874 14.3692 14.4622 14.3085C14.4371 14.2478 14.4002 14.1927 14.3538 14.1462ZM2.50002 7.49999C2.50002 6.60997 2.76394 5.73994 3.25841 4.99992C3.75287 4.2599 4.45568 3.68313 5.27795 3.34253C6.10021 3.00194 7.00501 2.91282 7.87793 3.08646C8.75084 3.26009 9.55266 3.68867 10.182 4.31801C10.8113 4.94735 11.2399 5.74917 11.4136 6.62208C11.5872 7.495 11.4981 8.3998 11.1575 9.22207C10.8169 10.0443 10.2401 10.7471 9.50009 11.2416C8.76007 11.7361 7.89004 12 7.00002 12C5.80695 11.9987 4.66313 11.5241 3.8195 10.6805C2.97587 9.83688 2.50134 8.69306 2.50002 7.49999Z"
                  fill="#201F24"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex h-full gap-5">
            <svg
              _ngcontent-ng-c3246554856=""
              id="mobile-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                _ngcontent-ng-c3246554856=""
                d="M16.25 3L3.75 3C3.41848 3 3.10054 3.1317 2.86612 3.36612C2.6317 3.60054 2.5 3.91848 2.5 4.25L2.5 16.75C2.5 17.0815 2.6317 17.3995 2.86612 17.6339C3.10054 17.8683 3.41848 18 3.75 18H16.25C16.5815 18 16.8995 17.8683 17.1339 17.6339C17.3683 17.3995 17.5 17.0815 17.5 16.75V4.25C17.5 3.91848 17.3683 3.60054 17.1339 3.36612C16.8995 3.1317 16.5815 3 16.25 3ZM5.625 6.125L13.125 6.125C13.2908 6.125 13.4497 6.19085 13.5669 6.30806C13.6842 6.42527 13.75 6.58424 13.75 6.75C13.75 6.91576 13.6842 7.07473 13.5669 7.19194C13.4497 7.30915 13.2908 7.375 13.125 7.375L5.625 7.375C5.45924 7.375 5.30027 7.30915 5.18306 7.19194C5.06585 7.07473 5 6.91576 5 6.75C5 6.58424 5.06585 6.42527 5.18306 6.30806C5.30027 6.19085 5.45924 6.125 5.625 6.125ZM8.75 14.875L5.625 14.875C5.45924 14.875 5.30027 14.8092 5.18306 14.6919C5.06585 14.5747 5 14.4158 5 14.25C5 14.0842 5.06585 13.9253 5.18306 13.8081C5.30027 13.6908 5.45924 13.625 5.625 13.625L8.75 13.625C8.91576 13.625 9.07473 13.6908 9.19194 13.8081C9.30915 13.9253 9.375 14.0842 9.375 14.25C9.375 14.4158 9.30915 14.5747 9.19194 14.6919C9.07473 14.8092 8.91576 14.875 8.75 14.875ZM9.375 11.125L5.625 11.125C5.45924 11.125 5.30027 11.0592 5.18306 10.9419C5.06585 10.8247 5 10.6658 5 10.5C5 10.3342 5.06585 10.1753 5.18306 10.0581C5.30027 9.94085 5.45924 9.875 5.625 9.875H9.375C9.54076 9.875 9.69973 9.94085 9.81694 10.0581C9.93415 10.1753 10 10.3342 10 10.5C10 10.6658 9.93415 10.8247 9.81694 10.9419C9.69973 11.0592 9.54076 11.125 9.375 11.125ZM15.4422 13.4422L13.5672 15.3172C13.5091 15.3753 13.4402 15.4214 13.3643 15.4529C13.2885 15.4843 13.2071 15.5005 13.125 15.5005C13.0429 15.5005 12.9615 15.4843 12.8857 15.4529C12.8098 15.4214 12.7409 15.3753 12.6828 15.3172L10.8078 13.4422C10.6905 13.3249 10.6247 13.1659 10.6247 13C10.6247 12.8341 10.6905 12.6751 10.8078 12.5578C10.9251 12.4405 11.0841 12.3747 11.25 12.3747C11.4159 12.3747 11.5749 12.4405 11.6922 12.5578L12.5 13.3664V9.875C12.5 9.70924 12.5658 9.55027 12.6831 9.43306C12.8003 9.31585 12.9592 9.25 13.125 9.25C13.2908 9.25 13.4497 9.31585 13.5669 9.43306C13.6842 9.55027 13.75 9.70924 13.75 9.875V13.3664L14.5578 12.5578C14.6751 12.4405 14.8341 12.3747 15 12.3747C15.1659 12.3747 15.3249 12.4405 15.4422 12.5578C15.5595 12.6751 15.6253 12.8341 15.6253 13C15.6253 13.1659 15.5595 13.3249 15.4422 13.4422Z"
                fill="#201F24"
              ></path>
            </svg>
            <svg
              _ngcontent-ng-c3246554856=""
              id="mobile-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                _ngcontent-ng-c3246554856=""
                d="M17.7981 5.71563L17.7919 5.72266L12.5005 11.3727V15.7078C12.5008 15.914 12.4501 16.117 12.3529 16.2989C12.2557 16.4807 12.115 16.6357 11.9434 16.75L9.44344 18.4172C9.25504 18.5427 9.0361 18.6147 8.80999 18.6254C8.58388 18.6362 8.35909 18.5854 8.15961 18.4784C7.96013 18.3714 7.79345 18.2122 7.67736 18.0179C7.56127 17.8236 7.50013 17.6014 7.50047 17.375L7.50047 11.3727L2.20906 5.72266L2.20281 5.71563C2.04011 5.53657 1.93287 5.31416 1.89409 5.07536C1.85531 4.83656 1.88667 4.59163 1.98435 4.3703C2.08203 4.14897 2.24184 3.96074 2.44439 3.82844C2.64695 3.69615 2.88354 3.62548 3.12547 3.625L16.8755 3.625C17.1176 3.62502 17.3545 3.69537 17.5574 3.82749C17.7603 3.9596 17.9205 4.14781 18.0185 4.36923C18.1164 4.59065 18.148 4.83576 18.1093 5.07478C18.0706 5.31379 17.9633 5.53643 17.8005 5.71563H17.7981Z"
                fill="#201F24"
              ></path>
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-br-xl rounded-bl-xl mx-5 p-5">
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
      </main>
      </div>
      
      <Footer />
    </section>
  );
}
