import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Item = {
  title: string;
  content: string;
};

const whoItems: Item[] = [
  { 
    title: "Students", 
    content: "Whether you’re just starting out or diving deeper into advanced topics, our docs provide step-by-step guidance that feels approachable. You’ll find simple explanations, visuals, and hands-on examples designed to make learning smoother and less overwhelming." 
  },
  { 
    title: "Developers", 
    content: "Every developer needs a place to quickly check a concept, revisit a tricky detail, or find inspiration. These docs act as a reliable companion—organized, searchable, and always clear—so you can spend less time stuck and more time building." 
  },
  { 
    title: "Educators", 
    content: "Teaching is easier when you have structured, well-crafted material at hand. Our resources give you ready-to-use outlines, examples, and explanations that can be directly integrated into your lessons, workshops, or tutorials, saving time while keeping quality high." 
  },
  { 
    title: "Teams", 
    content: "Onboarding a new teammate or aligning on best practices often takes a lot of back-and-forth. With a shared knowledge base like this, your team can access clear documentation, ensure consistency, and build faster together without repeating the same explanations." 
  },
];

function FAQ({ title, content }: Item) {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow((prev) => !prev)}
      className={`p-4 cursor-pointer transition-all hover:dark:bg-[#262629] hover:bg-[#F7F7F8]  ${ show && 'dark:bg-[#262629] bg-[#F7F7F8]'}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <ChevronRight
          className={`transition-transform duration-200 ${
            show ? "rotate-90 text-violet-600" : "text-gray-500"
          }`}
          size={20}
        />
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>

      {/* Content */}
      <AnimatePresence>
      {show && (
        <motion.p 
        initial={{
          opacity : 0,
          y : -20,
          height : 0,
        }}
        animate={{
          opacity : 1,
          y : 0,
          height : 'auto'
        }}
        exit={{
          opacity : 0,
          y : -20,
          height : 0,
        }}
        transition={{
          duration : 0.3
        }}
        className="ml-8 mt-3 text-gray-400  ">
          {content}
        </motion.p>
      )}</AnimatePresence>
    </div>
  );
}

function WhoComponent() {
  return (
    <div className="max-sm:p-4 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Who Is This For?
      </h1>
      <div className="border dark:border-[#262629] dark:divide-[#262629] border-gray-200 rounded-2xl shadow-sm divide-y divide-gray-200">
        {whoItems.map((item, index) => (
          <FAQ key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default WhoComponent;
