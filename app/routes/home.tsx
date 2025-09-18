import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';
import { useRef } from 'react';
import TopicCard from '@/components/TopicCard';
import { motion } from "motion/react";
import SNSButton from '@/components/SNSButton';
import { Cards, Card } from 'fumadocs-ui/components/card';
import WhyComponent from '@/components/WhyComponent';
import WhatComponent from '@/components/WhatComponent';
import WhoComponent from '@/components/WhoComponent';
import HeroSection from '@/components/HeroSection';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Telusko Docs' },
  ];
}


export default function Home() {


  //topics
  const topics = [
    {
      id : 1,
      title: 'Java',
      description : '“Learn Java, the language that powers millions of applications — from Android apps to enterprise systems. This section covers the essentials: syntax, object-oriented programming, and hands-on examples to get you building real projects quickly',
      path : 'docs/Java/01Getting-Started-with-Java',
      icon : '/java.svg'
    },
    {
      id : 2,
      title: 'Python',
      description: 'Learn Python, one of the most beginner-friendly and versatile languages. This section covers the essentials: syntax, data types, functions, and hands-on examples to help you start building projects right away.',
      path: 'docs/Python/01Getting-Started-with-Python',
      icon : '/python.svg'
    },
    {
      id: 4,
      title: 'Spring Boot',
      description: 'Learn Spring Boot, the framework that simplifies Java backend development. This section covers project setup, REST APIs, database integration, and practical examples to help you build production-ready applications with ease.',
      path: 'docs/Springboot/01Getting-Started-with-Springboot',
      icon : '/springboot.svg'
    },
  ];

  //animation - hero-text
  const letter = {
    hidden : {
      opacity : 0,
      y : 20
    },
    visible : {
      opacity : 1,
      y : 0,
      transition :{
        duration : 0.3,
        ease : "easeIn"
      }
      
    }
  }
  const HeroTitle = {
    hidden : {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      transition :{
        staggerChildren  : 0.02
      }
    }
  }
  //animation - hero-text


  //animation - card
  const card = {
    hidden : {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      transition :{
        staggerChildren  : .05
      }
    }
  }


  const title = "Welcome to Telusko Docs";

  
  return (
    <HomeLayout {
      ...baseOptions()
      }>
        <div className='relative' >      

        <HeroSection />
        <WhyComponent />
        <WhatComponent />
        <WhoComponent />


  
        </div>
    </HomeLayout>
  );
}
