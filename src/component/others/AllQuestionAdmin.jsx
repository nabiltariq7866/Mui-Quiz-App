import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";
import AllTask from "./AllTask";
import { useNavigate, replace } from "react-router-dom";
import Modal from "./Modal";
import ChartBar from "./ChartBar";
const AllQuestionAdmin = () => {
  const context = useContext(AppContext);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [chartData, setChartData] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      context.userHistoryIndex !== -1 &&
      context.userHistoryData?.[context.userHistoryIndex]
    ) {
      const answeredQuestions =
        context.userHistoryData[context.userHistoryIndex].questions.length || 0;
      const totalQuestions = context.adminQuestionCollection.length || 0;
      setIsSubmitEnabled(answeredQuestions === totalQuestions);
    }
  }, [
    context.userHistoryData,
    context.adminQuestionCollection,
    context.userHistoryIndex,
    context.userData.email,
  ]);
 


  function handleChartItem(data) {
    console.log("Eye Click");
    console.log(data);
    setChartData(data);
    setActiveModal("chart");
    context.setIsOpen(true);
  }

  return (
    <>
      <div className="flex  flex-wrap w-full   justify-evenly">
        {context.adminQuestionCollection.length > 0||context.userData.role === "admin" ? (
          context.adminQuestionCollection.map((value, index) => (
            <AllTask
              key={value.id}
              index={index}
              data={value}
              handleChartItem={handleChartItem}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
            />
          ))
        ) : (
          <h1 className="text-[8rem] mt-16 text-green-600">No Question Yet</h1>
        )}
      </div>
      {/* {context.userData.role === "user" &&
        context.adminQuestionCollection.length > 0 && (
          <div className="flex  bg-red-200 items-center justify-center">


            <button
              onClick={handleFinalResult}
              disabled={!isSubmitEnabled}
              className={`bg-[#21888e] ${
                isSubmitEnabled
                  ? "opacity-100 "
                  : "opacity-40 cursor-not-allowed"
              }  text-white px-5 py-2 rounded-sm text-lg font-medium mt-3  `}
            >
              Submit
            </button>
          </div>
        )} */}
      {activeModal === "chart" && (
        <Modal>
          <ChartBar data={chartData} />
        </Modal>
      )}
    </>
  );
};

export default AllQuestionAdmin;
