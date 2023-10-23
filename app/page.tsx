import Hero from '@/components/organism/Hero';
import Learn from '@/components/organism/Learn';
import Post from '@/components/organism/Post';
import Project from '@/components/organism/Project';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl sm:pt-40 pt-16 px-5 flex flex-col gap-20">
      <Hero />
      <Project />
      <Learn />
      <Post />
    </main>
  );
}
