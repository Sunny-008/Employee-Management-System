import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex overflow-scroll mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-6 md:px-9 px-5 bg-blue-400">
        <h2 className="md:text-3xl text-lg  font-bold">
          {data.taskCounts.newTask}
        </h2>
        <h3 className="md:text-xl  text[3vw] mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 md:px-9 px-5 bg-green-400">
        <h2 className="md:text-3xl text-lg  font-bold">
          {data.taskCounts.completed}
        </h2>
        <h3 className="md:text-xl  text[3vw] mt-0.5 font-medium">
          Completed Task
        </h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 md:px-9 px-5 bg-yellow-400 ">
        <h2 className="md:text-3xl text-lg  text-black font-bold">
          {data.taskCounts.active}
        </h2>
        <h3 className="md:text-xl  text[3vw] mt-0.5 text-black font-medium">
          Accepted Task
        </h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 md:px-9 px-5 bg-red-400">
        <h2 className="md:text-3xl text-lg  font-bold">
          {data.taskCounts.failed}
        </h2>
        <h3 className="md:text-xl  text[3vw] mt-0.5 font-medium">
          Failed Task
        </h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
