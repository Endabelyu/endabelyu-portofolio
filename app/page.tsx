'use client';
import Hero from '@/components/organism/Hero';
import Learn from '@/components/organism/Learn';
import Post from '@/components/organism/Post';
import Project from '@/components/organism/Project';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=" my-10 sm:my-20 px-2 relative">
      <Hero />

      {/* <Project />
      <Learn />
      <Post /> */}
    </main>
  );
}
