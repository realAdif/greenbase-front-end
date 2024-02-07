import IconComponent from '../components/IconComponent';
import { questions } from '../utils/faqList';
import { useState } from 'react';

function FAQPage() {
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(2);
  const handleButtonClick = (index) => {
    if (visibleAnswerIndex === index) {
      setVisibleAnswerIndex(null);
    } else {
      setVisibleAnswerIndex(index);
    }
  };

  return (
    <div className="bg-white rounded-md drop-shadow-sm p-7 mb-10">
      <h2 className="pb-7">Frequently Asked Questions</h2>
      <div>
        {questions.map((question, index) => {
          return (
            <div
              key={index}
              className=" py-5 px-6 odd:border-y border-[#E6E9F4] "
            >
              <div className="flex justify-between mb-5">
                <p
                  className={
                    visibleAnswerIndex === index && 'text-black font-bold'
                  }
                >
                  {question.title}
                </p>
                <button onClick={() => handleButtonClick(index)}>
                  <IconComponent imgKey="arrowdownIcon" alt="arrow down icon" />
                </button>
              </div>
              {visibleAnswerIndex === index && (
                <p>
                  You can cancel or change your subscription at any time without
                  any additional charges. If you want to cancel your
                  subscription go to your profile page and click on billing
                  information.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQPage;
