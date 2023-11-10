import Hero from '@/components/organism/Hero';
import Learn from '@/components/organism/Learn';
import Post from '@/components/organism/Post';
import Project from '@/components/organism/Project';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto md:w-3/5  pt-16  px-8 flex flex-col  gap-16  sm:pt-24 rounded-xl sm:gap-20 shadow-card">
      <Hero />
      <Project />
      <Learn />
      <Post />
    </main>
  );
}
