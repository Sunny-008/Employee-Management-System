import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  const [tasktittle, settasktittle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [Assign, setAssign] = useState("");
  const [Category, setCategory] = useState("");

  const [NewTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      tasktittle,
      taskDescription,
      taskDate,
      Assign,
      Category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;
    // console.log(data);

    data.forEach(function (elem) {
      if (Assign == elem.firstName) {
        elem.tasks.push(NewTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setuserData(data);
    console.log(data);

    settasktittle("");
    settaskDate("");
    setAssign("");
    setCategory("");
    settaskDescription("");
    // console.log("Task Created");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className=" w-1/2  ">
          <div className="mb-5 ">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={tasktittle}
              onChange={(e) => {
                settasktittle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div className="mb-5 ">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="date"
            />
          </div>
          <div className="mb-5 ">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={Assign}
              onChange={(e) => {
                setAssign(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Emplooyee name"
            />
          </div>
          <div className="mb-5 ">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="design,div ,etc"
            />
          </div>
        </div>

        <div className=" flex flex-col w-2/5 items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            className="rounded outline-none text-sm py-2 px-4 w-full h-44 bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="10"
            rows="10"
          ></textarea>
          <button className="w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-500">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
