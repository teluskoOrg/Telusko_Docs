import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";

const colorPallete = [
  "#D7E9D1",
  "#F2EFF9",
  "#D3ECF0",
  "#CFBBA2",
  "#E8DFF5",
  "#F9EAE1",
  "#CCE2CB",
  "#F6F7D7",
];

const sections = [
  {
    title: "Frontend Stacks",
    description: "React, Angular, Vue",
    icons: [
      { src: "/icons/react1.png", alt: "React" , link : '' },
      { src: "/icons/angular.png", alt: "Angular" , link : '' },
      { src: "/icons/vue.png", alt: "Vue" ,  link : '' },
    ],
  },
  {
    title: "Backend Stacks",
    description: "Spring Boot, Node.js, Django, Express",
    icons: [
      { src: "/icons/springboot.svg", alt: "Spring Boot" ,  link : '' },
      { src: "/icons/nodejs.svg", alt: "Node.js" ,  link : '' },
      { src: "/icons/django.svg", alt: "Django" ,  link : '' },
      { src: "/icons/express.svg", alt: "Express" ,  link : '' },
    ],
  },
  {
    title: "Databases",
    description: "MySQL, PostgreSQL, MongoDB, Redis",
    icons: [
      { src: "/icons/mysql.png", alt: "MySQL" ,  link : '' },
      { src: "/icons/postgresql.png", alt: "PostgreSQL" ,  link : '' },
      { src: "/icons/MongoDB.svg", alt: "MongoDB" ,  link : '' },
      { src: "/icons/redis.png", alt: "Redis" ,  link : '' },
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Docker, Kubernetes, AWS, Azure",
    icons: [
      { src: "/icons/docker.png", alt: "Docker" ,  link : '' },
      { src: "/icons/kubernetes.svg", alt: "Kubernetes" ,  link : '' },
      { src: "/icons/aws.svg", alt: "AWS" ,  link : '' },
      { src: "/icons/azure.svg", alt: "Azure" ,  link : '' },
    ],
  },
  {
    title: "Programming Languages",
    description: "Java, Python, JavaScript, Go, Rust",
    icons: [
      { src: "/icons/java.svg", alt: "Java",  link : 'docs/Java/core-java/01_java_introduction.md' },
      { src: "/icons/python.svg", alt: "Python",  link : '' },
      { src: "/icons/js.svg", alt: "JavaScript",  link : '' },
      { src: "/icons/go.png", alt: "Go",  link : '' },
      { src: "/icons/rust.png", alt: "Rust",  link : '' },
    ],
  },
  {
    title: "Extra Guides",
    description: "Git, APIs, Testing, Security Best Practices",
    icons: [{ src: "/icons/git.svg", alt: "Git" ,  link : '' }],
  },
];

function WhatComponent({ setDocsMessage, id }) {
  const navigate = useNavigate();

  return (
    <div className="my-40 px-4 md:px-8">
      <h1 className="text-center text-3xl font-bold mb-12">
        What You’ll Find Here
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section,index) => (
          <div
            key={section.title}
            style={{
              background : `${colorPallete[index]}`
            }}
            className="p-6 rounded-2xl shadow-lg border border-gray-200/20 backdrop-blur-sm hover:shadow-xl transition"
          >
            <h3 className="text-xl text-[#3C3C43] font-semibold mb-4">{section.title}</h3>
            <div className=" flex gap-4 flex-wrap items-center">
              {section.icons.map((icon) => (
                <button 
                onClick={()=>{
                  if(icon.link){
                    navigate(icon.link);
                  }else{
                   
                    setDocsMessage(true);
                    if(id.current) clearTimeout(id.current);
                    console.log(id.current,"form ");
                    id.current = setTimeout(()=>{
                      setDocsMessage(false);
                    },2000)
                    console.log(id.current);
                  }
                }}
                key={icon.alt} 
                className="icon-wrapper cursor-pointer">
                  <img className="icon" src={icon.src} alt={icon.alt} />
                </button>
              ))}
            </div>
            <p className="text-gray-600 mt-3">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatComponent;
