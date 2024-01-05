"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl border-b border-yellow-300 ">Contact us!</h1>
      <h3 className="text-xl py-6">
        Book a call or fill out the form below and we’ll get back to you once
        we’ve processed your request.
      </h3>
      <form className="flex items-center gap-10 flex-wrap">
        <input
          className="min-w-96 p-2 rounded-sm placeholder:text-black text-black outline-none"
          type="text"
          placeholder="Name*"
        />
        <input
          className="min-w-96 p-2 rounded-sm placeholder:text-black text-black outline-none"
          type="text"
          placeholder="Company*"
        />
        <input
          className="min-w-96 p-2 rounded-sm placeholder:text-black text-black outline-none"
          type="email"
          placeholder="Email*"
        />
        <input
          className="min-w-96 p-2 rounded-sm placeholder:text-black text-black outline-none"
          type="number"
          placeholder="Phone*"
        />
        <input
          className="min-w-96 p-2 rounded-sm  placeholder:text-black text-black outline-none"
          type="text"
          placeholder="Subject*"
        />
        <div className="min-w-96">
          <select className="text-black outline-none p-2">
            <option value="" className="text-black">
              Project Budget(Min 100,000RWF)
            </option>
            <option className="text-black" value="100,000 - 200,000">
              {" "}
              100,000 - 200,000
            </option>
            <option className="text-black" value="200,000 - 300,000">
              {" "}
              200,000 - 300,000
            </option>
            <option className="text-black" value="200,000 - 400,000">
              {" "}
              200,000 - 400,000
            </option>
            <option className="text-black" value="400,000 - 500,000">
              {" "}
              400,000 - 500,000
            </option>
            <option className="text-black" value=" 500,000 - 1,000,000">
              {" "}
              500,000 - 1,000,000
            </option>
            <option className="text-black" value="1,000,000 - More">
              {" "}
              1,000,000 - More
            </option>
          </select>
        </div>
        <textarea
          className="min-w-96 p-2 rounded-sm  placeholder:text-black text-black outline-none"
          placeholder="Describe your needs in detail*"
        ></textarea>
        <button className="text-lg bg-yellow-500 px-4 py-2 mt-10 rounded-sm hover:bg-yellow-300 hover:text-black">
          Visit Website
        </button>
      </form>
    </div>
  );
};

export default Contact;
