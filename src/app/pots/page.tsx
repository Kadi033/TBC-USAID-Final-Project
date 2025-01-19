import Footer from "@/components/Footer";
import PcFooter from "@/components/PcFooter";

export default function Pots() {

  return (
    <section className="relative min-h-screen lg:flex">
      <PcFooter />
      <div className="w-full lg:ml-[300px]">
      <header className="flex justify-between rounded-lg mt-2 lg:pt-3 pl-5">
        <h1 className="text-preset-1 font-sans px-5 py-5">Pots</h1>
        <button className="p-4 font-sans bg-grey-900 text-preset-4 text-white rounded-lg m-5">+ Add New Pot</button>
      </header>
      <main className="mb-20 lg:mb-5 pl-5">
        <h1 className="text-center text-preset-2 text-grey-900 font-sans mt-2">No pots available</h1>
      </main>
      </div>
      
      <Footer />
      
      
    </section>
  );
}
