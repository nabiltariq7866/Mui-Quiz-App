import React from "react";
import AllTask from "./AllTask";

const SelectedQuizdetail = ({ selectedQuiz }) => {
  return (
    <div className="h-[90vh] w-[1423px]  mt-16  p-4 rounded-3xl overflow-y-auto bg-white">
      <h1 className="text-[30px] font-semibold text-[#43b5a0] underline   ">
        Score:{selectedQuiz.scoreCard}
      </h1>
      <div className="flex justify-between flex-wrap">
        {selectedQuiz.Questions.map((quiz, index) => (
          <AllTask
            key={quiz.questionId}
            index={index}
            data={quiz}
            finalResult={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedQuizdetail;
