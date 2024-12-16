import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="bg-blue-400 flex-shrink-0 p-5 h-full w-[348px] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm ">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl mt-5 font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className=" mt-6">
        <button className="bg-green-500 py-1 px-2 w-full text-sm rounded-md hover:bg-green-700">
          Accept
        </button>
      </div>
    </div>
  );
};

export default NewTask;
