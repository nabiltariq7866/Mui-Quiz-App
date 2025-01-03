import React, { useContext, useState } from "react";
import AppContext from "../../context/AuthContext";
import Button from "@mui/material/Button";
import AllTask from "./AllTask";
import { useNavigate } from "react-router";
import didu9 from "../../assets/didu9.png";
const TakeQuiz = () => {
  const context = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();
  console.log(index);
  let data = context.adminQuestionCollection[index];
  console.log(data);
  const length = context.adminQuestionCollection.length - 1;
  console.log(length);
  const handleNextQuestion = () => {
    if (answerSelected) {
      setIndex((prev) => prev + 1);
      setAnswerSelected(false);
      setSelectedAnswer(null); // Reset the answerSelected state for the next question
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };
  function handleFinalResult() {
    console.log("click");
    let totalScore = 0;
    const temp = context.quizData;
    console.log(temp[0].questions);
    // temp.questions.forEach((question) => {
    //   let questionScore = 0;
    //   if (question.isCorrect) {
    //     questionScore = question.QuestionType === "mcqs" ? 10 : 5;
    //   }
    //   totalScore += questionScore;
    // });
    // console.log(totalScore)
    // const newQuiz = {
    //   quizid: Date.now(),
    //   quizTime: new Date().toISOString(),
    //   Questions: temp.questions,
    //   scoreCard: totalScore,
    // };
    // console.log(newQuiz)
    // context.setUserHistoryData((prev) => {
    //   const updatedHistory = [...prev];
    //   updatedHistory[context.userHistoryIndex] = {
    //     ...updatedHistory[context.userHistoryIndex],
    //     scoreCard: totalScore,
    //   };
    //   return updatedHistory;
    // });
    // const existingUserQuizData = context.userHistoryData.find(
    //   (quiz) => quiz.email === temp.email
    // );
    // if (existingUserQuizData) {
    //   context.setUserHistoryData((prevQuizData) =>
    //     prevQuizData.map((quiz) =>
    //       quiz.email === temp.email
    //         ? { ...quiz, quizzes: [...quiz.quizzes, newQuiz] }
    //         : quiz
    //     )
    //   );
    // } else {
    //   context.setUserHistoryData((prevQuizData) => [
    //     ...prevQuizData,
    //     { email: temp.email, quizzes: [newQuiz] },
    //   ]);
    // }
    // navigate("/EmployeeDashboard/FinalResult", { replace: true });
  }
  return (
    <>
      <div className="flex items-center mt-[-2rem]">
        <img src={didu9} alt="" className="w-[11rem]" />
        <h1 className="text-3xl font-semibold">Your Question space Here</h1>
      </div>
    { data ? <div className="flex flex-col items-center mt-[-2rem]">
        <AllTask
          data={data}
          index={index}
          setAnswerSelected={setAnswerSelected}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={selectedAnswer}
        />
        {index < length ? (
          <Button
            variant="contained"
            onClick={handleNextQuestion}
            disabled={!answerSelected}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={!answerSelected}
            onClick={handleFinalResult}
          >
            Submit
          </Button>
        )}
      </div>:<h1 className="text-center my-5 text-2xl text-[#43b5a0] font-sans font-semibold">No Question Yet</h1>}
    </>
  );
};

export default TakeQuiz;
