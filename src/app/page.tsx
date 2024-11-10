export default function Home() {
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
      </main>
      <footer></footer>
    </section>
  );
}