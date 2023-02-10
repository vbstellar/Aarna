import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import axios from "axios";

// import mobIcon from "../Assets/mobile-phone.png";

export default function Modal(props) {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  if (!props.open) return null;

  const onSubmit = (data) => {
    const postData = {
      bloodTest: data.bloodTest,
      mobile: data.mobile,
      name: data.name,
      scan: data.scan,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/fc0855fc-ca9f-4f7c-bb84-bcdf48cefab0",
        postData
      )
      .then((response) => {
        console.log(response);
      });
  };

  console.log(error);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed border-b-2 border-transparent top-0 left-0 right-0 bottom-0 bg-black/70 z-[1000] "
        onClick={props.handleClick}
      />
      <div className="fixed border-b-2 border-transparent rounded-lg w-[40%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-[50px] z-[1000]">
        <button
          onClick={props.handleClick}
          className="border-gray-300 bg-secondary text-white font-bold border-2 w-[40px] h-[40px] rounded-full fixed right-[calc(10%_-_75px)] top-[calc(10%_-_50px)] hover:bg-primary transition ease-out duration-500"
        >
          X
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center p-1">
            <input
              className="mt-8 px-4 w-[85%] h-[50px] border-gray-400 rounded border-[1px]"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name *"
              required
              {...register("name")}
            />
          </div>{" "}
          <div className="flex justify-center p-1">
            <input
              className="mt-2 px-4 w-[85%] h-[50px] border-gray-400 rounded border-[1px]"
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your Mobile No. *"
              required
              {...register("mobile")}
            />
          </div>
          <div className=" p-4 flex justify-around">
            <div>
              <label className=" text-gray-400">
                <input
                  type="checkbox"
                  id="bloodTest"
                  name="bloodTest"
                  value="bloodTest"
                  {...register("bloodTest")}
                ></input>
                Blood Test
              </label>
            </div>
            <div>
              <label className=" text-gray-400">
                <input
                  type="checkbox"
                  id="scan"
                  name="scan"
                  value="scan"
                  {...register("scan")}
                ></input>
                MRI/CT Scan/X-Ray etc
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-6 mx-4 w-[75%]  h-auto text-lg rounded border-transparent bg-secondary border-2 py-1 px-5 text-white font-semibold hover:bg-primary transition ease-out duration-500"
              type="submit"
            >
              Get Free Call Now
            </button>
          </div>
          <br></br>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

// bg-[url('components/popup/mobile-phone.png')] bg-no-repeat bg-contain
