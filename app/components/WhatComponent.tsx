import React from 'react'

function WhatComponent() {
  return (
    <div>
        <h1 
        className="text-center text-3xl font-bold mb-10"
        >What You’ll Find Here</h1>

        <div className="max-sm:p-4 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-2xl shadow-md border bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Frontend Stacks</h3>
                <p className="text-gray-500">React, Angular, Vue, Svelte</p>
            </div>

            
            <div className="p-6 rounded-2xl shadow-md border bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Backend Stacks</h3>
                <p className="text-gray-500">Spring Boot, Node.js, Django, Express</p>
            </div>

            
            <div className="p-6 rounded-2xl shadow-md border bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <p className="text-gray-500">MySQL, PostgreSQL, MongoDB, Redis</p>
            </div>

            
            <div className="p-6 rounded-2xl shadow-md border bg-white/5">
                <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
                <p className="text-gray-500">Docker, Kubernetes, AWS, GCP, Azure</p>
            </div>

            
            <div className="p-6 rounded-2xl shadow-md border bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                <p className="text-gray-500">Java, Python, JavaScript, Go, Rust</p>
            </div>

            
            <div className="p-6 rounded-2xl shadow-md border bg-white/5">
                <h3 className="text-xl font-semibold mb-2">Extra Guides</h3>
                <p className="text-gray-500">Git, APIs, Testing, Security Best Practices</p>
            </div>
        </div>
    </div>
  )
}

export default WhatComponent