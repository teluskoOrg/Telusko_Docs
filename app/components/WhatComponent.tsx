import React from 'react'
import { Link } from 'react-router'

function WhatComponent() {
  return (
    <div className="my-40 px-4 md:px-8">
      <h1 className="text-center text-3xl font-bold mb-12">
        What You’ll Find Here
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Frontend */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200/20 bg-white/5 backdrop-blur-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Frontend Stacks</h3>
          <div className="flex gap-4 items-center">
            <div className="icon-wrapper">
              <img className="icon" src="/icons/react1.png" alt="React" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/angular.png" alt="Angular" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/vue.png" alt="Vue" />
            </div>
          </div>
          <p className="text-gray-400 mt-3">React, Angular, Vue</p>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200/20 bg-white/5 backdrop-blur-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Backend Stacks</h3>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="icon-wrapper">
              <img className="icon" src="/icons/springboot.svg" alt="Spring Boot" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/nodejs.svg" alt="Node.js" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/django.svg" alt="Django" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/express.svg" alt="Express" />
            </div>
          </div>
          <p className="text-gray-400 mt-3">Spring Boot, Node.js, Django, Express</p>
        </div>

        {/* Databases */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200/20 bg-white/5 backdrop-blur-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Databases</h3>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="icon-wrapper">
              <img className="icon" src="/icons/mysql.png" alt="MySQL" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/postgresql.png" alt="PostgreSQL" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/MongoDB.svg" alt="MongoDB" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/redis.png" alt="Redis" />
            </div>
          </div>
          <p className="text-gray-400 mt-3">MySQL, PostgreSQL, MongoDB, Redis</p>
        </div>

        {/* DevOps & Cloud */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200/20 bg-white/5 backdrop-blur-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">DevOps & Cloud</h3>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="icon-wrapper">
              <img className="icon" src="/icons/docker.png" alt="Docker" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/kubernetes.svg" alt="Kubernetes" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/aws.svg" alt="AWS" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/azure.svg" alt="Azure" />
            </div>
          </div>
          <p className="text-gray-400 mt-3">Docker, Kubernetes, AWS, Azure</p>
        </div>

        {/* Programming Languages */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200/20 bg-white/5 backdrop-blur-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="icon-wrapper">
            <img className="icon" src="/icons/java.svg" alt="Java" />
          
            </div>
            <div className="icon-wrapper">
                 <img className="icon" src="/icons/python.svg" alt="Python" />
            </div>

            <div className="icon-wrapper">
              <img className="icon" src="/icons/js.svg" alt="JavaScript" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/go.png" alt="Go" />
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="/icons/rust.png" alt="Rust" />
            </div>
          </div>
          <p className="text-gray-400 mt-3">Java, Python, JavaScript, Go, Rust</p>
        </div>

        {/* Extra Guides */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200/20 bg-white/5 backdrop-blur-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Extra Guides</h3>
          <div className="flex gap-4 flex-wrap items-center">
            <div className="icon-wrapper">
              <img className="icon" src="/icons/git.svg" alt="Git" />
            </div>
          </div>
          <p className="text-gray-400 mt-auto">Git, APIs, Testing, Security Best Practices</p>
        </div>

      </div>
    </div>
  )
}

export default WhatComponent
