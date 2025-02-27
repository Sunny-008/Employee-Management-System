import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header changeUser={props.changeuser} data={props.Data} />

        <TaskListNumber data={props.Data} />
        <TaskList data={props.Data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
