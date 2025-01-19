import Footer from "@/components/Footer";
import PcFooter from "@/components/PcFooter";
import Image from "next/image";
export default function Home() {
  return (
    <section className="lg:flex">
      <PcFooter />
      <div className="w-full lg:ml-[300px]">
        <header className="lg:pt-3 lg:pl-5">
          <h1 className="text-preset-1 font-sans px-5 py-5">Overview</h1>
        </header>
        <main className="mb-20 lg:mb-5 lg:pl-5">
          <div className="flex flex-col items-center mx-5 mb-8 md:flex-row gap-0 md:gap-6">
            <div className="bg-grey-900 w-full h-28 rounded-xl my-2 ">
              <h2 className="text-white font-mono text-preset-4 px-4 py-4">
                Current Balance
              </h2>
              <h1 className="text-white font-sans text-preset-1 px-4">
                $4,835.00
              </h1>
            </div>
            <div className="bg-white w-full  h-28 rounded-xl my-2 ">
              <h2 className="text-grey-900 font-mono text-preset-4 px-4 py-4">
                Income
              </h2>
              <h1 className="text-grey-900 font-sans text-preset-1 px-4">
                $3,814.25
              </h1>
            </div>
            <div className="bg-white w-full  h-28 rounded-xl my-2 ">
              <h2 className="text-grey-900 font-mono text-preset-4 px-4 py-4">
                Income
              </h2>
              <h1 className="text-grey-900 font-sans text-preset-1 px-4">
                $1,700.50
              </h1>
            </div>
          </div>
          <div className="bg-white rounded-xl mx-5 px-5 py-6 md:flex flex-col ">
            <div className="flex items-center justify-between">
              <h1 className="text-grey-900 font-sans text-preset-2 ">Pots</h1>
              <div className="flex items-center gap-2">
                <p className="text-grey-500 font-mono text-preset-4">
                  See Details
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="m-l-150"
                >
                  <path
                    d="M4.76531 1.98468L8.51531 5.73468C8.55018 5.76951 8.57784 5.81087 8.59671 5.85639C8.61558 5.90192 8.62529 5.95071 8.62529 5.99999C8.62529 6.04927 8.61558 6.09807 8.59671 6.1436C8.57784 6.18912 8.55018 6.23048 8.51531 6.26531L4.76531 10.0153C4.71287 10.0678 4.64602 10.1036 4.57324 10.1181C4.50046 10.1326 4.42501 10.1251 4.35645 10.0967C4.28789 10.0683 4.22931 10.0202 4.1881 9.95849C4.1469 9.89677 4.12494 9.82421 4.125 9.74999L4.125 2.24999C4.12494 2.17578 4.1469 2.10322 4.1881 2.0415C4.22931 1.97978 4.28789 1.93167 4.35645 1.90326C4.42501 1.87485 4.50046 1.86743 4.57324 1.88192C4.64602 1.89641 4.71287 1.93218 4.76531 1.98468Z"
                    fill="#696868"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-around gap-5">
              <div className="flex gap-4 items-center rounded-xl bg-grey-100 py-4 px-4 mt-5 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
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
              <div className="flex flex-col">
                <div className="flex gap-4 justify-between mt-5 ">
                  <div className="flex gap-6 w-36 md:w-44">
                    <div className="w-1 h-11 bg-green rounded-lg"></div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-preset-5 font-mono">
                        Savings
                      </p>
                      <h1 className="text-gray-900 text-preset-4 font-sans">
                        $159
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-6 w-36 md:w-44">
                    <div className="w-1 h-11 bg-cyan rounded-lg"></div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-preset-5 font-mono">
                        Gift
                      </p>
                      <h1 className="text-gray-900 text-preset-4 font-sans">
                        $40
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-4">
                  <div className="flex gap-6 w-36 md:w-44">
                    <div className="w-1 h-11 bg-navy rounded-lg"></div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-preset-5 font-mono">
                        Concert Ticket
                      </p>
                      <h1 className="text-gray-900 text-preset-4 font-sans">
                        $110
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-6 w-36 md:w-44">
                    <div className="w-1 h-11 bg-yellow rounded-lg"></div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-preset-5 font-mono">
                        New Laptop
                      </p>
                      <h1 className="text-gray-900 text-preset-4 font-sans">
                        $10
                      </h1>
                    </div>
                  </div>
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
                <p className="text-grey-500 font-mono text-preset-4">
                  View All
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="m-l-150"
                >
                  <path
                    d="M4.76531 1.98468L8.51531 5.73468C8.55018 5.76951 8.57784 5.81087 8.59671 5.85639C8.61558 5.90192 8.62529 5.95071 8.62529 5.99999C8.62529 6.04927 8.61558 6.09807 8.59671 6.1436C8.57784 6.18912 8.55018 6.23048 8.51531 6.26531L4.76531 10.0153C4.71287 10.0678 4.64602 10.1036 4.57324 10.1181C4.50046 10.1326 4.42501 10.1251 4.35645 10.0967C4.28789 10.0683 4.22931 10.0202 4.1881 9.95849C4.1469 9.89677 4.12494 9.82421 4.125 9.74999L4.125 2.24999C4.12494 2.17578 4.1469 2.10322 4.1881 2.0415C4.22931 1.97978 4.28789 1.93167 4.35645 1.90326C4.42501 1.87485 4.50046 1.86743 4.57324 1.88192C4.64602 1.89641 4.71287 1.93218 4.76531 1.98468Z"
                    fill="#696868"
                  ></path>
                </svg>
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
                <p className="text-grey-900 font-sans text-preset-4 ">
                  -$55.50
                </p>
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
                <p className="text-grey-900 font-sans text-preset-4 ">
                  -$42.30
                </p>
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
                <p className="text-grey-900 font-sans text-preset-4 ">
                  -$65.00
                </p>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="m-l-150"
                >
                  <path
                    d="M4.76531 1.98468L8.51531 5.73468C8.55018 5.76951 8.57784 5.81087 8.59671 5.85639C8.61558 5.90192 8.62529 5.95071 8.62529 5.99999C8.62529 6.04927 8.61558 6.09807 8.59671 6.1436C8.57784 6.18912 8.55018 6.23048 8.51531 6.26531L4.76531 10.0153C4.71287 10.0678 4.64602 10.1036 4.57324 10.1181C4.50046 10.1326 4.42501 10.1251 4.35645 10.0967C4.28789 10.0683 4.22931 10.0202 4.1881 9.95849C4.1469 9.89677 4.12494 9.82421 4.125 9.74999L4.125 2.24999C4.12494 2.17578 4.1469 2.10322 4.1881 2.0415C4.22931 1.97978 4.28789 1.93167 4.35645 1.90326C4.42501 1.87485 4.50046 1.86743 4.57324 1.88192C4.64602 1.89641 4.71287 1.93218 4.76531 1.98468Z"
                    fill="#696868"
                  ></path>
                </svg>
              </div>
            </div>
            <h1 className="text-center text-grey-900">No available budgets</h1>
          </div>
          <div className="bg-white rounded-xl mx-5 p-5  mt-5">
            <div className="flex items-center justify-between">
              <h1 className="text-grey-900 font-sans text-preset-2 py-5">
                Recurring Bills
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-grey-500 font-mono text-preset-4">
                  See Details
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="m-l-150"
                >
                  <path
                    d="M4.76531 1.98468L8.51531 5.73468C8.55018 5.76951 8.57784 5.81087 8.59671 5.85639C8.61558 5.90192 8.62529 5.95071 8.62529 5.99999C8.62529 6.04927 8.61558 6.09807 8.59671 6.1436C8.57784 6.18912 8.55018 6.23048 8.51531 6.26531L4.76531 10.0153C4.71287 10.0678 4.64602 10.1036 4.57324 10.1181C4.50046 10.1326 4.42501 10.1251 4.35645 10.0967C4.28789 10.0683 4.22931 10.0202 4.1881 9.95849C4.1469 9.89677 4.12494 9.82421 4.125 9.74999L4.125 2.24999C4.12494 2.17578 4.1469 2.10322 4.1881 2.0415C4.22931 1.97978 4.28789 1.93167 4.35645 1.90326C4.42501 1.87485 4.50046 1.86743 4.57324 1.88192C4.64602 1.89641 4.71287 1.93218 4.76531 1.98468Z"
                    fill="#696868"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-beige-100 py-5 px-4 flex justify-between rounded-lg border-l-4 border-green ">
                <p className="text-grey-500 font-mono text-preset-4">
                  Paid Bills
                </p>
                <p className="text-grey-900 font-sans text-preset-4">$190.00</p>
              </div>
              <div className="bg-beige-100 py-5 px-4 flex justify-between rounded-lg border-l-4 border-yellow ">
                <p className="text-grey-500 font-mono text-preset-4">
                  Total Upcoming
                </p>
                <p className="text-grey-900 font-sans text-preset-4">$194.98</p>
              </div>
              <div className="bg-beige-100 py-5 px-4 flex justify-between rounded-lg border-l-4 border-cyan ">
                <p className="text-grey-500 font-mono text-preset-4">
                  Due Soon
                </p>
                <p className="text-grey-900 font-sans text-preset-4">$59.98</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </section>
  );
}
