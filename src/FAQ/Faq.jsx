import FAQItem from "../components/FAQItem";
import "./Faq.css"
function FAQ() {
  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces. ",
    },
    {
      question: "What are some of the key features of React?",
      answer:
        "Some of the key features of React include virtual DOM, component-based architecture, and JSX syntax.",
    },
    // add more questions and answers as needed
  ];

  return (
    <><div className="faqHeader">FAQs</div><div className="faq-container">

      {faqs.map((faq, index) => (
        <FAQItem question={faq.question} answer={faq.answer} />
      ))}
    </div></>
  );
}

export default FAQ;
