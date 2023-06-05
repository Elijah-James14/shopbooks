import { useState } from "react";

const Accordion = ({ faq }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="dark: text-white">
      <h2>
        <button
          onClick={() => setShow(!show)}
          className="content shadow-xl w-full mb-10 p-5"
        >
          <span className="text-black dark:text-white text-xl">
            {faq.question}
          </span>
          <span className="bi bi-chevron-down"></span>
        </button>
      </h2>

      <div className="mt-3 mb-3 content text-black dark:text-white">
        {" "}
        {show ? faq.answer : ""}
      </div>
    </div>
  );
};

export default Accordion;
