import { content } from "../components/packages/content";
import { BiRupee } from "react-icons/bi";

export default function Packages() {
  return (
    <div className="container p-24 grid grid-cols-3 gap-4">
      {content.map((item) => {
        return (
          <div
            key={item.id}
            className="container h-[450px] relative text-white bg-[#1a0e69] bg-opacity-95 rounded-xl p-10  overflow-hidden drop-shadow-lg border-2 border-transparent  transition ease-out-300"
          >
            <h1 className="abolute top-0 font-bold text-white text-4xl mb-2">
              {item.title}
            </h1>
            <div className="top-[100px]absolute px-2 text-sm font-semibold">
              Includes: {item.numberOfTests} Tests
            </div>
            <div className=" text-base">
              {/* test list start */}
              <div className="">
                <ul className="px-6 py-2 list-disc">
                  {item.tests.map((test) => {
                    return <li className="p-[1px]">{test}</li>;
                  })}
                </ul>
              </div>

              {/* price and button start */}
              <div className="bottom-5 absolute">
                <div className="font-bold text-md">Normal Price:</div>{" "}
                <div className="line-through">
                  <BiRupee className="inline" />
                  {item.price}/-
                </div>
                <div className="font-bold text-xl text-[#0aee9c]">
                  Offer Price:
                </div>{" "}
                <div className="text-xl text-[#0aee9c]">
                  <BiRupee className="inline" />
                  {item.offerPrice}/-
                </div>
                <div className="flex justify-around">
                  <button className=" text-white mt-6 font-semibold border-white border-2  hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                    Book Now
                  </button>
                  <button className="ml-[120px] text-white mt-6 font-semibold border-white border-2 hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                    Know More
                  </button>
                </div>
              </div>
              {/* /* price and button end */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
