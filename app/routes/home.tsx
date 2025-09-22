import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';
import { useRef, useState } from 'react';
import TopicCard from '@/components/TopicCard';
import { AnimatePresence, motion } from "motion/react";
import SNSButton from '@/components/SNSButton';
import { Cards, Card } from 'fumadocs-ui/components/card';
import WhyComponent from '@/components/WhyComponent';
import WhatComponent from '@/components/WhatComponent';
import WhoComponent from '@/components/WhoComponent';
import HeroSection from '@/components/HeroSection';
import { X } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Telusko Docs' },
  ];
}


export default function Home() {

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
  const [ docsMessage , setDocsMessage ] = useState(false); 
  const id = useRef<number | null>(null);
  console.log(id);

  
  return (
    <HomeLayout {
      ...baseOptions()
      }>
        <div className='relative' id="main" >  
          <AnimatePresence>
          { docsMessage &&  
          <div 
          className="fixed font-DM-Sans z-49 top-20 left-[50%] translate-x-[-50%] w-full flex justify-center">
            <motion.div
            initial={{
              y : -20,
              opacity : .0,
              scale : .95
            }} 
            animate={{
              y : 0,
              opacity : 1,
              scale : 1
            }}
            exit={{
              y : -20,
              opacity : 0,
              scale : .95
            }} 
            >
              
              <div className="flex flex-col dark:text-black rounded-md dark:bg-[#FFF] text-white text-wh bg-[#000] er w-fit">
                <div className='flex gap-4 items-center justify-center px-4 py-2'>
                  <p className="text-sm dark:text-black text-white">
                    we're still working on it!
                  </p>
                  <button
                  onClick={()=>{
                    setDocsMessage(false);
                  }} 
                  className="p-1 rounded">
                    <X size={16} />
                    
                  </button>
                </div>
                <motion.div 
                initial={{
                  width : '100%',
                }}
                animate={{
                  width : 0
                }}
                transition={{
                  duration : 2
                }}
                className='bg-red-700 h-[4px] rounded-b-md'>
                </motion.div>
            </div>
      
            </motion.div>
          </div> }  
          </AnimatePresence>
          <HeroSection />
          <WhatComponent setDocsMessage={setDocsMessage} id={id} />
          <WhyComponent />
        </div>
    </HomeLayout>
  );
}
