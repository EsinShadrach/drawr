"use client";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import faqsmemo from "./faqsmemo.png";
import Image from "next/image";

interface Faq {
  question: string;
  answer: string;
  isOpen: boolean;
}

export function Faqs() {
  return (
    <section className={`mt-[300px] mx-[94px]`}>
      <div className="flex items-center">
        <div>
          <h2
            className={`max-w-[932px] text-black font-aeonik text-[110px] leading-[90px] font-bold -tracking-[5.5px]`}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <Image
          src={faqsmemo}
          alt="create account illustration"
          placeholder="blur"
          fetchPriority="high"
          priority
          className="max-w-[200px]"
          draggable="false"
        />
      </div>

      <div>
        <FAQs />
      </div>
    </section>
  );
}

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Do I need to be a business to host a raffle event?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      isOpen: true,
    },
    {
      question: "Do I need to be a business to host a raffle event?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      isOpen: false,
    },
    {
      question: "Do I need to be a business to host a raffle event?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      isOpen: false,
    },
    {
      question: "Do I need to be a business to host a raffle event?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      isOpen: false,
    },
    {
      question: "Do I need to be a business to host a raffle event?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      isOpen: false,
    },
  ]);

  const handleToggle = (index: number): void => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
      return updatedFaqs;
    });
  };

  return (
    <div className="items-center justify-center mx-auto mt-[71px]">
      {faqs.map((faq, index) => (
        <div
          className={`w-[350px] md:w-[1316px] bg-[#F0F0F0] p-6 my-[35px] transition-all duration-300 ease-in-out ${
            faq.isOpen ? "h-[160px] md:h-[140px]" : "h-[70px] md:h-[70px] pb-4" // Set initial height and expanded height
          }`}
          key={index}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => handleToggle(index)}
          >
            <span className="text-[14px] md:text-[28px] leading-[24px] font-aeonik font-[700] text-[#001534] py-2 ">
              {faq.question}
            </span>
            {faq.isOpen ? (
              <ChevronUpIcon className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-[#7A71FE]" />
            ) : (
              <ChevronDownIcon className="w-[30px] h-[30px] md:h-[40px] md:w-[40px] text-[#7A71FE]" />
            )}
          </div>
          <div
            className={`text-[12px] md:text-[18px]  leading-[30px] w- md:w-[700px] text-[#A1A1A] mt-2 ${
              faq.isOpen ? "block opacity-100" : "hidden opacity-25"
            } text-gray-800`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
