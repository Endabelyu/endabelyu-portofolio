import Title from '@/components/atoms/Title';
import Underconstruction from '@/components/molecules/Underconstruction';
import Image from 'next/image';

const About = () => {
  return (
    <main className=" sm:p-0 mx-auto mt-5 sm:mt-[-20px]">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <Title text="About" />
          <Title text="Naswa Wilantama" color="text-[#32db7b]" />
        </header>

        <section>
          <Image
            src="/image/naswa.jpg"
            width={140}
            height={100}
            alt="Endabelyu Picture"
            className="sm:w-[13vw] float-right ml-5 mb-1 shadow-green rounded-md"
          />
          <p className="text-justify mb-2 tracking-tight">
            Hi! i am Endabelyu, i start my journey in web development after
            graduation of my study in refractionist optician on december 2020,
            still have a big interest in tech since a teenage made me want to
            learn to build something and in the end i think web development is
            easier more then any technologies.Then start from watching a lot of
            youtube videos, try some learning web development site like
            freecodecamp to learn and explore about web development.
          </p>
          <p className="text-justify mb-2">
            There are a lot of things and new knowledge to learn in web
            development, especially for frontend development. With a lot of a
            new things and knowledge i get when i learn web development, make me
            feel motivated to learn this things seriously. I enjoy my learning
            journey and always want to improve my current skills and knowledge.
          </p>
          <p className="text-justify mb-2">
            In this personal website i will showcase my project and maybe
            writing some post and share my journey about learning a new thing,
            becasue i belive share our knowledge is the best way to sharpen our
            knowledge too.
          </p>
        </section>
        <section className="currentStack">
          <Title text="Current Tech Stack" size="text-2xl" />
          <ul className="flex gap-5 mt-3 items-center ">
            <li>
              <Image
                src="/icon/React_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/nextjs_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/Typescript_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/Tailwind_CSS_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/Bootstrap_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/Svelte_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
          </ul>
        </section>
        <section className="favouriteStack">
          <Title text="Favourite Tech Stack" size="text-2xl" />
          <ul className="flex gap-5 mt-3 items-center ">
            <li>
              <Image
                src="/icon/React_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/nextjs_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/Typescript_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
            <li>
              <Image
                src="/icon/Tailwind_CSS_logo.svg"
                width={30}
                height={30}
                alt="Tech Logo"
                className="sm:w-[2.5vw]"
              />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About;
