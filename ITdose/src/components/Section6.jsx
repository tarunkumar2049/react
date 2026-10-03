import { IoStarSharp } from "react-icons/io5";

export default function Section6() {
  return (
    <div className="flex flex-col items-center pb-10 lg:py-22 bg-[#f0f4f8]">
      <div>
        <h1 className="text-3xl font-semibold py-12 px-12 lg:px-0">
          Trusted by Healthcare Leaders
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mx-8 lg:mx-38">
        <div className="bg-white px-10 py-6 flex flex-col gap-4 rounded-2xl shadow-xl">
          <span className="flex text-orange-400 text-2xl py-2">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </span>
          <p className="italic text-gray-700">
            "ITdose has completely transformed our OPD efficiency. Waiting times
            are down by 40% and our doctors have all patient history at their
            fingertips."
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 rounded-full"
              src="src/assets/unnamed (1).png"
            />
            <span>
              <h1 className="font-semibold ">Dr. Sharma</h1>
              <p className="text-gray-500 text-sm">Chief Medical Officer</p>
            </span>
          </div>
        </div>
        <div className="bg-white px-10 py-6 flex flex-col gap-4 rounded-2xl shadow-xl">
          <span className="flex text-orange-400 text-2xl py-2">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </span>
          <p className="italic text-gray-700">
            "The multi-branch management feature is a game-changer for our
            group. Centralized inventory and billing have saved us millions in
            leaks."
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 rounded-full"
              src="src/assets/unnamed (2).png"
            />
            <span>
              <h1 className="font-semibold">Dr. Sharma</h1>
              <p className="text-gray-500 text-sm">Chief Medical Officer</p>
            </span>
          </div>
        </div>
        <div className="bg-white px-10 py-6 hidden lg:flex flex-col gap-4 rounded-2xl shadow-xl ">
          <span className="flex text-orange-400 text-2xl py-2">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </span>
          <p className="italic text-gray-700">
            "The Pharmacy module's auto-inventory alerts and barcode integration
            have eliminated manual errors. It's the best investment we made."
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 rounded-full"
              src="src/assets/unnamed (3).png"
            />
            <span>
              <h1 className="font-semibold">Dr. Sharma</h1>
              <p className="text-gray-500 text-sm">Chief Medical Officer</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
