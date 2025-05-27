import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

const FrequentlyAskQuestions = () => {
  const accordionItems: AccordionItemData[] = [
    {
      id: "item-1",
      question: "What exactly is 'excess capacity' in the context of EGTOS?",
      answer:
        "Excess capacity refers to the time and skills of your employees that are currently not fully utilized on internal projects. This could be due to project completion, temporary lulls in workload, or specific expertise that is not immediately required. EGTOS allows you to offer this capacity to other network members.",
    },
    {
      id: "item-2",
      question: "How does EGTOS ensure the quality and reliability of the experts available on the platform?",
      answer:
        "EGTOS implements a rigorous vetting process for all network members and resources. We include peer reviews, skill verification, and performance tracking to maintain high-quality standards across the platform.",
    },
    {
      id: "item-3",
      question: "What are EGTOS Tokens and how are they earned and used?",
      answer:
        "EGTOS supports a wide range of industries including technology, consulting, creative services, engineering, and more. Our platform is designed to be flexible enough to accommodate various professional service sectors.",
    },
    {
      id: "item-4",
      question: "Is my company's data and the information shared within our network secure on the EGTOS platform?",
      answer:
        "No, EGTOS operates on a flexible basis. You can engage with the platform as needed, whether for short-term projects or ongoing capacity sharing arrangements.",
    },
    {
      id: "item-5",
      question: "How does EGTOS ensure the quality and reliability of the experts available on the platform?",
      answer:
        "No, EGTOS operates on a flexible basis. You can engage with the platform as needed, whether for short-term projects or ongoing capacity sharing arrangements.",
    },
    {
      id: "item-6",
      question: "How does EGTOS differ from traditional freelance platforms or consulting marketplaces?",
      answer:
        "No, EGTOS operates on a flexible basis. You can engage with the platform as needed, whether for short-term projects or ongoing capacity sharing arrangements.",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-3 md:px-5">
      <div className="text-center md:py-10">
        <button className="bg-[#EFFEFC] border border-[#00A099] rounded-full px-12 py-1 ">
          FAQ
        </button>
        <h1 className="text-[#1A1A1A] py-5 text-3xl font-medium md:text-5xl">
          Frequently Ask <br /> Questions
        </h1>
      </div>
      <Accordion type="single" collapsible className="w-full cursor-pointer">
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-2xl border shadow-2xl border-[#E7E7E7] p-4 md:p-6 mb-4"
            style={{
              boxShadow: "2px 2px 16px 4px #1018280A",
            }}
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <span className="text-xl font-semibold text-left">
                  {item.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-[#475467]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentlyAskQuestions;
