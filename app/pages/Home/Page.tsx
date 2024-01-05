import Image from "next/image";
import React from "react";
import hero from "@/public/assets/hero.jpg";
import logo from "@/public/assets/logo.jpeg";
import services from "@/app/constants/services";
import SuccessStories from "@/app/components/SuccessStories";
import Contact from "@/app/components/Contact";
const Page = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-5xl">Let's create your website together.</h1>
          <button className="bg-yellow-500 px-4 py-2 mt-4 rounded-sm hover:bg-yellow-300 hover:text-black">
            Contact Us
          </button>
        </div>
        <Image
          src={hero}
          alt="hero_image"
          className=" w-[40rem] h-[32rem] object-contain"
          priority
        />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl border-b border-yellow-300">About Us</h1>
        <h2 className="text-xl p-4">
          We are Company that Build Digital Platforms We'd be happy to help
          guide you through the process of upgrading online presence and
          branding for local businesses in East Africa, starting with Rwanda and
          Burundi.{" "}
        </h2>
      </div>
      <div className="flex items-center  flex-col my-8">
        <h1 className="text-3xl border-b border-yellow-300 ">Services</h1>
        <div className="flex flex-wrap gap-6 items-center mt-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-96 border border-yellow-300 p-3">
              <h1 className="text-xl py-4 text-slate-200">{service.title}</h1>
              <h3>{service.description}</h3>
            </div>
          ))}
        </div>
        <div className="flex items-center  flex-col my-8">
          <h1 className="text-3xl border-b border-yellow-300 ">
            Success Stories
          </h1>
          <SuccessStories />
              </div>
              <div>
                  <Contact/>
              </div>
      </div>
    </>
  );
};

export default Page;
