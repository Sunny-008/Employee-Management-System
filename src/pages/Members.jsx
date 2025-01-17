import React from "react";
import { useState } from "react";

const Members = () => {
  const [showMembers, setShowMembers] = useState(false);

  const members = [
    {
      name: "Admin",
      email: "admin@i.com",
      passeord: "123",
    },
    { name: "Arjun", email: "e@e.com", passeord: "123" },
    { name: "Sneha", email: "employee2@example.com", passeord: "123" },
    { name: "Ravi", email: "employee3@example.com", passeord: "123" },
    { name: "Priya Kumari", email: "employee4@example.com", passeord: "123" },
    { name: "Karan", email: "employee5@example.com", passeord: "123" },
  ];

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  return (
    <div className="absolute top-5 right-7 font-bold w-[30rem] p-2  ">
      {/* Button */}
      <div className="flex items-center justify-end ">
        <button
          onClick={toggleMembers}
          className="font-bold bg-emerald-600  w-24 rounded-sm hover:bg-emerald-700 "
        >
          Members
        </button>
      </div>

      {/* Members List (Right Panel) */}
      {showMembers && (
        <div className="rounded-xl p-2 flex ">
          <div className="border-l-2 border-t-2 border-r-2 border-emerald-600  w-40">
            <h3 className="border-b-2 border-emerald-600">NAME</h3>
            <ul>
              {members.map((member, index) => (
                <li key={index} className="border-b-2 border-emerald-600">
                  {member.name}
                </li>
              ))}
            </ul>
          </div>
          <div className=" border-t-2 border-r-2 border-emerald-600  w-[16rem]">
            <h3 className="border-b-2 border-emerald-600">Email</h3>
            <ul>
              {members.map((member, index) => (
                <li key={index} className="border-b-2 border-emerald-600 ">
                  {member.email}
                </li>
              ))}
            </ul>
          </div>
          <div className=" border-t-2 border-r-2 border-emerald-600  w-[8rem]">
            <h3 className="border-b-2 border-emerald-600">Password</h3>
            <ul>
              {members.map((member, index) => (
                <li key={index} className="border-b-2 border-emerald-600 ">
                  {member.passeord}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
