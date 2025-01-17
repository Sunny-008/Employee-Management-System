import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="bg-yellow-400 flex-shrink-0 p-5 md:h-full h-[80vw] md:w-[300px] lg:w-[348px] w-[65vw] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm ">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl mt-5 font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-md hover:bg-green-700">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-md hover:bg-red-700">
          Mark as Failde
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
