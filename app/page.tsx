import Hero from '@/components/organism/Hero';
import Learn from '@/components/organism/Learn';
import Post from '@/components/organism/Post';
import Project from '@/components/organism/Project';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto md:w-3/5 sm:pt-24 pt-16 sm:px-4 px-8 flex flex-col  gap-16 sm:gap-20">
      <Hero />
      <Project />
      <Learn />
      <Post />
    </main>
  );
}
