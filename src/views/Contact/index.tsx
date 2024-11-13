"use client";
import React, { useState } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "", label: "— Select an option —", disabled: true, hidden: true },
    { value: "value 1", label: "UI/UX Designing" },
    { value: "value 2", label: "Web Designing" },
    { value: "value 3", label: "Brand Designing" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const handleOptionClick = (option: { label: string }) => {
    setSelectedOption(option.label); // Update selected option
    closeDropdown();
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-12 lg:gap-6 px-3 p-20 lg:py-28 lg:px-6"
    >
      <div className="w-full order-2 lg:order-1 lg:w-6/12 flex flex-col px-4 py-[30px] lg:p-[50px] gap-6 bg-[#0f0715] rounded-[10px] text-base">
       
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <div className="text-5xl text-800 font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text">
                Lets work together!
              </div>
              <p className="text-gray">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
            </div>
            <div className="">
              <form>
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex flex-col lg:flex-row gap-4">
                    <div className="w-full flex">
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-full px-[20px] py-[14px] bg-black text-white rounded-[10px] border border-[#22272c] hover:border-accent outline-none"
                      />
                    </div>
                    <div className="w-full flex">
                      <input
                        type="text"
                        placeholder="Last name"
                        className="w-full px-[20px] py-[14px] bg-black text-white rounded-[10px] border border-[#22272c] hover:border-accent outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row gap-4">
                    <div className="w-full flex">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full px-[20px] py-[14px] bg-black text-white rounded-[10px] border border-[#22272c] hover:border-accent outline-none"
                      />
                    </div>
                    <div className="w-full flex">
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="w-full px-[20px] py-[14px] bg-black text-white rounded-[10px] border border-[#22272c] hover:border-accent outline-none"
                      />
                    </div>
                  </div>
                  <div
                    className="relative w-full"
                    onBlur={closeDropdown}
                    tabIndex={0}
                  >
                    <div
                      className="w-full px-5 py-3 bg-black text-white rounded-lg border border-[#22272c] hover:border-accent focus:border-accent transition-colors duration-300 cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <span className="">
                        {selectedOption ||
                          options.find((option) => option.value === "")?.label}
                      </span>

                      {isOpen ? (
                        // Up Arrow (shown when dropdown is open)
                        <svg
                          className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 15l-6-6-6 6"></path>
                        </svg>
                      ) : (
                        // Down Arrow (shown when dropdown is closed)
                        <svg
                          className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      )}
                    </div>

                    {/* Dropdown Options */}
                    {isOpen && (
                      <div className="absolute w-full bg-black text-white rounded-lg border border-[#22272c] mt-1 z-10 max-w-xs">
                        {options.slice(1).map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              handleOptionClick(option);
                              console.log(`Selected: ${option.label}`);
                            }}
                            className="px-5 py-3 cursor-pointer hover:bg-[#333] transition-colors"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="">
                    <textarea
                      name=""
                      id=""
                      rows={5}
                      className="w-full px-[20px] py-[14px] bg-black text-white rounded-[10px] border border-[#22272c] hover:border-accent outline-none"
                    />
                  </div>
                  <div className="w-full flex">
                    <div className=" text-white font-semibold rounded-[50px] bg-gradient-to-r from-accent to-accent_dark px-[35px] py-5 cursor-pointer">
                      Send Message
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
      {/* <Fade direction="right" delay={400} duration={2000}> */}
        <div className="w-full lg:w-6/12 flex flex-col gap-6 px-3 justify-center items-start text-left order-1 lg:order-2">
          {/* Phone Item */}

          <div className="w-full flex items-center gap-4 justify-start">
            {/* Icon */}
            <div className="p-4 flex justify-center items-center rounded-full bg-gradient-to-t from-accent to-accent_dark">
              <FiPhoneCall size={20} color="#dddddd" />
            </div>
            {/* Text */}
            <div>
              <div className="text-sm text-gray-400">Phone</div>
              <div className="text-xl font-bold text-white">+91 9340605735</div>
            </div>
          </div>

          {/* Email Item */}
          <div className="w-full flex items-center gap-4 justify-start">
            <div className="p-4 flex justify-center items-center rounded-full bg-gradient-to-t from-accent to-accent_dark">
              <FiMail size={20} color="#dddddd" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <div className="text-xl font-bold text-white">
                shrivasyogesh2000@gmail.com
              </div>
            </div>
          </div>

          {/* Address Item */}
          {/* <div className="w-full flex items-center gap-4 justify-start">
          <div className="p-4 flex justify-center items-center rounded-full bg-gradient-to-t from-accent to-accent_dark">
            <FiMapPin size={20} color="#dddddd" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Address</div>
            <div className="text-xl font-bold text-white">
              Warne Park Street Pine, FL 33157, New York
            </div>
          </div>
        </div> */}
        </div>
      {/* </Fade> */}
    </div>
  );
};

export default ContactUs;
