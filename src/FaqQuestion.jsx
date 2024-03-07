import React, { useState } from "react";

const FaqQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-full bg-transparent backdrop-blur-md border-2 border-gray-700 rounded-md ">
      <h4
        className="main--faq_question w-full p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </h4>
      <div
        className={`${
          isOpen ? "h-24" : "h-0"
        } transition-all overflow-hidden duration-300`}
      >
        <p className={`main--faq_answer p-2 rounded-md  `}>{answer}</p>
      </div>
    </div>
  );
};

export default FaqQuestion;
