import React from "react";

function WhyComponent() {
  return (
    <div className=" px-4 my-20">
      <h1 
      className="text-center text-3xl font-bold mb-10"
      >Why Telusko Docs?</h1>

      <div className="grid max-sm:p-4 p-8 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px]">
        {/* why 1 - spans 2 cols */}
        <div className="why-card flex flex-col justify-between col-span-1 lg:col-span-2 row-span-2 p-6 rounded-2xl shadow-sm hover:scale-[1.02] transition">
          <div className="flex gap-3">
            <img className="stack-icon" src="/java.svg" alt="Java" />
            <img className="stack-icon" src="/python.svg" alt="Python" />
            <img className="stack-icon" src="/springboot.svg" alt="Spring Boot" />
            <img className="stack-icon" src="/react1.png" alt="React" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">One place, Many stacks</h2>
            <p className="text-gray-400">
              Instead of scattered tutorials and outdated articles, find all essential documentation neatly organized.
            </p>
          </div>
        </div>

        {/* why 2 */}
        <div className="why-card flex flex-col justify-center p-6 rounded-2xl shadow-sm hover:scale-[1.02] transition">
          <img className="stack-icon mb-3" src="/roadmap.svg" alt="Roadmap Icon" />
          <h2 className="text-xl font-semibold mb-1">Beginner to Advanced</h2>
          <p className="text-gray-400">
            Structured like a roadmap — start with the basics, grow into real-world applications.
          </p>
        </div>

        {/* why 3 */}
        <div className="why-card flex flex-col justify-center p-6 rounded-2xl shadow-sm hover:scale-[1.02] transition">
          <img className="stack-icon mb-3" src="/terminal.svg" alt="Code Icon" />
          <h2 className="text-xl font-semibold mb-1">Code-first approach</h2>
          <p className="text-gray-400">
            Learn by doing — with examples, snippets, and project setups.
          </p>
        </div>

        {/* why 4 - bigger tile */}
        <div className="why-card flex flex-col justify-center p-6 rounded-2xl shadow-sm hover:scale-[1.02] transition col-span-1 lg:col-span-2 sm:col-span-2">
          <img className="stack-icon mb-3" src="/refresh.svg" alt="Update Icon" />
          <h2 className="text-xl font-semibold mb-1">Regularly updated</h2>
          <p className="text-gray-400">
            Tech moves fast, so do we. Docs are continuously refined for accuracy and clarity.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default WhyComponent;
