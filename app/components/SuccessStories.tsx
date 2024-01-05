import React from "react";
import projects from "../constants/project";
import Image from "next/image";

const SuccessStories = () => {
  return (
    <div className="">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-slate-900  flex justify-between my-8 min-w-[80rem] px-8"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="h-[30rem] w-[30rem] object-fill"
          />
          <div>
            <h1 className="text-2xl text-yellow-300 pb-4">{project.title}</h1>
            <div className="flex gap-10 flex-wrap">
              {project.technologies.map((technologie, index) => (
                <div key={index} className="bg-slate-800 px-4 py-2">
                  {technologie}
                </div>
              ))}
            </div>
            <button className="bg-yellow-500 px-4 py-2 mt-10 rounded-sm hover:bg-yellow-300 hover:text-black">
              Visit Website
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuccessStories;
