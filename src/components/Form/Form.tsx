"use client";

import { useState } from "react";
import { Button } from "@/components";

export default function Form() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    typeMessage: "",
  };
  const [values, setValues] = useState(initialState);

  const onSubmin = () => {
    console.log(values);
    setValues(initialState);
  };

  return (
    <div className="bg">
      <div className="_container pt-[150px] pb-[90px] grid grid-cols-[1fr_1fr] lg:pt-[100px] lg:grid-cols-[1fr] gap-5 md:pt-[60px] md:pb-[120px] sm:pb-[100px]">
        <div>
          <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[90px] lg:text-[41px] md:text-[27px] md:mb-[60px] sm:mb-[54px]">
            <span className="text-[#1a1b1d] underline">WHEN</span>
            <span className="text-[#929298]">WE CAN DO IT</span>
          </h2>
          <h2 className="ml-[130px] font-medium text-[55px] leading-[108%] uppercase flex flex-col xl:ml-[70px] lg:ml-0 lg:flex-row lg:gap-3 flex-wrap md:text-[45px] sm:text-[31px]">
            <span className="text-[#000] ml-[100px] lg:ml-0">
              BOOK A MEETING
            </span>
            <span className="text-[#929298] flex gap-6">
              WITH
              <video
                muted
                loop
                autoPlay
                playsInline
                src="video/video.mp4"
                className="w-[72px]"
              ></video>
            </span>
            <span className="text-[#000] ml-[174px] lg:ml-0">OUR TEAM</span>
          </h2>
        </div>
        <form
          action="#"
          className="flex flex-col gap-12 mt-20 lg:mt-[120px] md:mt-[60px]"
        >
          <input
            type="text"
            placeholder="your name"
            className="bg-transparent h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
            value={values.name}
            onChange={(e: any) =>
              setValues({ ...values, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="your e-mail"
            className="bg-transparent h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
            value={values.email}
            onChange={(e: any) =>
              setValues({ ...values, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="subject"
            className="bg-transparent h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
            value={values.subject}
            onChange={(e: any) =>
              setValues({ ...values, subject: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="type your message here"
            className="bg-transparent h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
            value={values.typeMessage}
            onChange={(e: any) =>
              setValues({ ...values, typeMessage: e.target.value })
            }
          />
          <div className="flex justify-between items-center sm:flex-col sm:gap-5 sm:items-end">
            <p className="font-medium text-[15px] leading-[157%] text-[#929298] sm:text-right">
              By sending this form I confirm that I have read and accept{" "}
              <a href="#" className="underline">
                the Privacy Policy
              </a>
            </p>
            <Button
              text="SEND"
              className="w-[185px]"
              onClick={(e) => {
                e.preventDefault();
                onSubmin();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
