import reactLogo from "./assets/react.svg";
import bgImage from "./assets/react-icon-large.png";
import FaqQuestion from "./FaqQuestion";

function App() {
  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a self-contained module that renders some output. It can be a button, a form, a header, a footer, or any other UI element.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM (VDOM) is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM. This process is called reconciliation.",
    },
    {
      question: "What is a prop in React?",
      answer:
        "A prop is a special keyword in React, which stands for properties and is being used for passing data from one component to another.",
    },
    {
      question: "What is state in React?",
      answer:
        "State is a built-in React object that allows components to keep track of changing information in between renders. It is a plain JavaScript object used by React to represent the component's current state.",
    },
  ];
  return (
    <>
      <img
        src={bgImage}
        alt=""
        className="absolute h-2/4 right-0 bottom-48 -z-10"
      />
      <nav className="z-10 flex justify-between">
        <div className="flex gap-4">
          <img src={reactLogo} alt="React Logo" className="spin " />
          <h1 className="nav--logo_text">ReactFacts</h1>
        </div>
        <h2 className="nav--title">React Course - Project 1</h2>
      </nav>
      <main>
        <h2 className="main--title">Fun Facts About React</h2>

        {/* <ul className="main--facts ml-6 list-disc">
          <li>React is a JavaScript library for building user interfaces.</li>
          <li>
            React was created by Jordan Walke, a software engineer at Facebook.
          </li>
          <li>
            React was first deployed on Facebook's newsfeed in 2011 and on
            Instagram.com in 2012.
          </li>
          <li>
            React allows developers to create large web applications that can
            change data, without reloading the page.
          </li>
          <li>
            React is often described as the V in MVC (Model View Controller).
          </li>
          <li>
            React allows developers to create reusable UI components. A
            component is a self-contained module that renders some output.
          </li>
        </ul> */}
        <h3 className="main--faq_title">FAQ</h3>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FaqQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
