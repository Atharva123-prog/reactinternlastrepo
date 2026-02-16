import React, { useState } from 'react';
import { Pencil, Trash2, ChevronDown } from 'lucide-react';

/* --- Individual FAQ Item Component --- */
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className={`rounded-lg border border-gray-200 overflow-hidden mb-4 shadow-sm transition-all duration-200 ${isOpen ? 'ring-1 ring-blue-100' : ''}`}>
      
      {/* 1. Header Section */}
      <div 
        onClick={onClick}
        className="bg-white p-4 flex items-center justify-between cursor-pointer select-none h-[54px]"
      >
        {/* Question Text */}
        <div className="flex items-center gap-4">
          <span className="text-[15px] font-normal text-black">{index}.</span>
          <h4 className="text-[15px] font-normal text-black">{question}</h4>
        </div>

        {/* Dynamic Icon Logic */}
        <div>
          {isOpen ? (
            // IF OPEN: Show Edit & Delete icons
            <div className="flex items-center gap-3">
              <button className="text-black hover:text-gray-700 transition-colors">
                <Pencil className="w-[16px] h-[16px]" strokeWidth={1.5} />
              </button>
              <button className="text-black hover:text-red-600 transition-colors">
                <Trash2 className="w-[16px] h-[16px]" strokeWidth={1.5} />
              </button>
            </div>
          ) : (
            // IF CLOSED: Show Chevron Down icon
            <ChevronDown className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
          )}
        </div>
      </div>

      {/* 2. Answer Section (Light Blue Background) */}
      {/* Only visible when isOpen is true */}
      {isOpen && (
        <div className="bg-[#f0f9ff] p-4 pl-10 border-t border-gray-100">
          <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  // Default to first item open (index 0) as seen in screenshot
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    // If clicking the already open item, close it (set to null), otherwise open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  // Exact Questions from your image
  const faqData = [
    {
      question: "What is the possession date of the project?",
      answer: "The expected possession date will be announced soon." 
    },
    {
      question: "Is the project RERA approved?",
      answer: "Yes, the project is RERA approved. It adheres to all regulatory compliances to ensure a safe investment for buyers."
    },
    {
      question: "What amenities are included in the project?",
      answer: "The project includes a wide range of amenities such as a swimming pool, clubhouse, gym, landscaped gardens, and 24/7 security."
    },
    {
      question: "What types of units are available?",
      answer: "We offer 2 BHK, 3 BHK, and 4 BHK units with various floor plan configurations designed to suit different family needs."
    },
    {
      question: "How can I book a site visit?",
      answer: "You can book a site visit by contacting our sales team directly or by filling out the inquiry form available on our website."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, we believe in transparent pricing. All charges including maintenance, parking, and other fees are mentioned upfront."
    },
    {
      question: "What is the total land area of the project?",
      answer: "The project is spread over a vast area of 10 acres, ensuring ample open space and greenery for a healthy lifestyle."
    }
  ];

  return (
    <div className="p-8 pb-20 bg-white min-h-screen font-inter">
      <h3 className="text-[16px] font-bold text-black mb-6">Frequent Ask Questions</h3>
      
      <div className="max-w-4xl space-y-3">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index}
            index={index + 1}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;