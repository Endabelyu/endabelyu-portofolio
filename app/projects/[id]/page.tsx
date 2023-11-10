'use client';

import Title from '@/components/atoms/Title';
import { Console } from 'console';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Project = () => {
  useEffect(() => {
    // const div =
    // console.log(div, 'div');
    // const { top: t, left: l } = document
    //   .querySelector('#backgrounds')
    //   .getBoundingClientRect();
    // console.log(t, l);
  }, []);

  // window.onscroll = function () {
  //   let rect = element.getBoundingClientRect();
  //   let x = rect.left;
  //   let y = rect.top;
  //   console.log('Element X: ' + x);
  //   console.log('Element Y: ' + y);
  // };
  return (
    <main className=" mx-auto max-w-5xl mb-5 p-5">
      <section id="titleProject" className="border-b-4 my-4 pb-2">
        <Image
          src="/dummyImage.png"
          width={800}
          height={600}
          alt="image project"
          className="w-full shadow-default rounded-xl mx-auto my-6"
        />
        <div className="flex flex-col gap-2">
          <Title text="Fyp Web " size="sm:text-4xl" />
          <p>Website for developer show they wonderful works.</p>
          <ul className="flex gap-8 w-1/2 items-center font-semibold ">
            <li className="flex gap-4 ">
              <Image
                src="/icon/eyeIcon.svg"
                width={24}
                height={24}
                alt="eye icon"
              />
              <p>2000</p>
            </li>
            <li className=" hover:cursor-pointer hover:bg-green-100">
              <Link href="#" className="flex gap-2 ">
                <p>Visit Web</p>
                <Image
                  src="/icon/externalLink.svg"
                  width={24}
                  height={24}
                  alt="eye icon"
                />
              </Link>
            </li>
            <li>
              <p className="font-semibold">Year: 2023</p>
            </li>
          </ul>
          <span className="flex gap-4 font-semibold items-center">
            <Image
              src="/icon/peopleIcon.svg"
              width={28}
              height={28}
              alt="people icon"
            />
            <p>Team of 2, Frontend Developer</p>
          </span>
        </div>
      </section>
      <section id="bodyProject" className="flex justify-between gap-20">
        <div className="w-4/6">
          <ul className="flex flex-col gap-6">
            <li className="h-[50vh]">
              <div id="backgrounds">
                <Title text="Backround of The Project" size="sm:text-2xl" />
                <p>
                  I entered a bootcamp in Harisenin Fullstack Development, and
                  to complete the final assignment, we had to construct one
                  project with our team, so after a discussion with the whole
                  team, this was the project that was chosen to develop.
                </p>
              </div>
            </li>
            <li className="h-[50vh]">
              <Title text="Project Goals" size="sm:text-2xl" />
              <p>
                The goal of this project is to make it simpler for developers to
                display their projects to the public, so that they are more
                reachable for more people.
              </p>
            </li>
            <li className="h-[50vh] flex flex-col gap-3">
              <Title text="Tech Stack" size="sm:text-2xl" />
              <ul className="flex gap-5  items-center">
                <li>
                  <Image
                    src="/icon/react_logo.svg"
                    alt="stack icon"
                    width={50}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/icon/Tailwind_CSS_logo.svg"
                    alt="stack icon"
                    width={50}
                    height={50}
                  />
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea
                illum repellendus expedita maxime ut. Sint aperiam perspiciatis
                itaque, fuga accusamus libero tenetur cumque hic, dolores velit
                voluptate sit a?
              </p>
            </li>
            <li className="h-[50vh]">
              <Title text="The Features" size="sm:text-2xl" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea
                illum repellendus expedita maxime ut. Sint aperiam perspiciatis
                itaque, fuga accusamus libero tenetur cumque hic, dolores velit
                voluptate sit a?
              </p>
            </li>
          </ul>
        </div>
        <aside className="w-2/6">
          <div className="sticky top-32">
            <div className=" hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block">
              <Title text="Table Of Content" size="sm:text-2xl" />
              <ul>
                <li className="hover:font-semibold hover:text-[#32db7b]">
                  <p>Background of The Project</p>
                </li>
                <li className="hover:font-semibold hover:text-[#32db7b]">
                  <p>Project Goals</p>
                </li>
                <li className="hover:font-semibold hover:text-[#32db7b]">
                  <p>Tech Stack</p>
                </li>
                <li className="hover:font-semibold hover:text-[#32db7b]">
                  <p>The Features</p>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Project;
