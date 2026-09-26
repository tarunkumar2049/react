import unnamed from "../assets/unnamed.png";

export default function Section1() {
  return (
    <div className="flex h-screen bg-[#ff6b2c1a] mt-20">
      <div className="flex flex-col gap-8 m-40">
        <p className="bg-red-100 text-orange-500 w-40 px-2 rounded-2xl">
          ENTERPRISE READY
        </p>
        <span>
          <h1 className="font-bold text-5xl">ITdose: Next-Gen</h1>
          <h1 className="font-bold text-5xl text-orange-500">
            Hospital Intelligence
          </h1>
        </span>
        <p className="text-xl text-gray-500">
          Unify your OPD, IPD, Pharmacy, and Diagnostics in a single,
          high-performance ecosystem. Built for scale, security, and superior
          patient care
        </p>
        <span className="flex gap-6 ">
          <button className="border bg-orange-500 shadow-orange-300 shadow-2xl hover:-translate-y-1 font-bold text-white px-8 py-4 rounded-2xl">
            Book Demo Now
          </button>
          <button className="border border-gray-400 hover:-translate-y-1 font-bold px-8 py-4 rounded-2xl">
            Watch Overview
          </button>
        </span>
      </div>
      <div className="flex mt-20 mr-36">
        <img className="rounded-3xl h-140 w-300" src={unnamed} />
      </div>
    </div>
  );
}
