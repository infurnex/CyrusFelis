import { useState } from 'react';
import "./FAQItem.css"
function FAQItem({ question, answer }) {
  const [visible, setVisible] = useState(false);

  const toggleAnswerTrue = () => {
    setVisible(true);
  }
  const toggleAnswerFalse = () => {
    setVisible(false);
  }

  const answerStyle = {
    overflow: 'hidden',
    maxHeight: visible ? '100vh' : '0',
    // transition: 'max-height 0.3s cubic-bezier(0.42, 0, 0.58, 1)',
    transitionProperty: "max-height",
    transitionDuration: "2s",
    transitionDelay: "0s",
    // transitionTimingFunction: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    transitionTimingFunction: "ease",

  };

  return (
    <div className="faq-item"  onMouseEnter={toggleAnswerTrue} onMouseLeave={toggleAnswerFalse}>
      <h2 className="faq-question">{question}</h2>
      <p className="faq-answer" style={answerStyle}>
        {answer}
      </p>
    </div>
  );
}

export default FAQItem;
