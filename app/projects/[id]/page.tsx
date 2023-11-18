'use client';

import Title from '@/components/atoms/Title';
import { Console } from 'console';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { detailProject } from '@/constants';
import { useParams } from 'next/navigation';
const Project = () => {
  let details;
  const params = useParams();
  for (const data of detailProject) {
    if (data.key === params.id) details = [data];
  }
  // console.log(details?.image);
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ bounce: false }}
    >
      {details?.map(
        ({
          key,
          title,
          description,
          image,
          link,
          year,
          role,
          background,
          goals,
          stack,
          features,
        }) => (
          <main key={key} className=" mx-auto max-w-5xl mb-5 p-5 ">
            <section id="titleProject" className="border-b-4 my-4 pb-2">
              <div className="p-5 bg-green-50 shadow-default rounded-xl my-6">
                <Image
                  src={image}
                  width={800}
                  height={800}
                  alt="image project"
                  className="sm:w-full sm:h-[400px]  rounded-xl  mx-auto "
                />
              </div>

              <div className="flex flex-col gap-2 p-1">
                <Title text={title} size="sm:text-4xl" />
                <p>{description}</p>
                <ul className="flex  gap-4 sm:gap-8 sm:w-1/2 items-center font-semibold h-5 ">
                  {/* <li className="flex gap-2 sm:gap-4 ">
              <Image
                src="/icon/eyeIcon.svg"
                width={24}
                height={24}
                alt="eye icon"
              />
              <p>2000</p>
            </li> */}
                  <li className=" hover:cursor-pointer hover:bg-green-100 hover:bg-none ">
                    <Link
                      href="#"
                      className="flex gap-1 sm:gap-2   hover:text-black border-b-2 border-green-200"
                    >
                      <p className="">Visit Web</p>
                      <Image
                        src="/icon/externalLink.svg"
                        width={24}
                        height={24}
                        alt="eye icon"
                        className=""
                      />
                    </Link>
                  </li>
                  <li>
                    <p className="font-semibold">Year: {year}</p>
                  </li>
                </ul>
                <span className="flex sm:gap-4 font-semibold items-center">
                  <Image
                    src="/icon/peopleIcon.svg"
                    width={28}
                    height={28}
                    alt="people icon"
                  />
                  <p>{role}</p>
                </span>
              </div>
            </section>
            <section
              id="bodyProject"
              className="sm:flex sm:justify-between gap-20"
            >
              <div className="">
                <ul className="flex flex-col gap-6">
                  <li className=" ">
                    <div id="backgrounds" className="flex flex-col gap-4">
                      <Title
                        text="Backround of The Project"
                        size="sm:text-2xl"
                      />
                      <p>{background}</p>
                    </div>
                  </li>
                  <li className=" flex flex-col gap-4">
                    <Title text="Project Goals" size="sm:text-2xl" />
                    <p>{goals}</p>
                  </li>
                  <li className=" flex flex-col gap-4">
                    <Title text="Tech Stack" size="sm:text-2xl" />
                    <ul className="flex gap-5  items-center">
                      {stack.techStack.map(({ key, src }) => (
                        <li key={key}>
                          <Image
                            src={src}
                            alt="stack icon"
                            width={30}
                            height={30}
                          />
                        </li>
                      ))}
                    </ul>
                    <p>{stack.description}</p>
                  </li>
                  <li className="flex flex-col gap-4">
                    <Title text="The Features" size="sm:text-2xl" />
                    {/* bisa mnenambah project baru, bisa merubah data project and profile  mengubah profile, menagatur profile,   */}
                    <p>{features}</p>
                  </li>
                </ul>
              </div>
              {/* used when blog is available */}
              {/* <aside className="w-2/6" id="cotainerTOC">
          <div className="sticky top-32">
            <div className=" hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block">
              <Title text="Table Of Content" size="sm:text-2xl" />
              <ul>
                <li
                  className="hover:font-semibold hover:text-[#32db7b]"
                  id="link-1"
                >
                  <p>Background of The Project</p>
                </li>
                <li
                  className="hover:font-semibold hover:text-[#32db7b]"
                  id="link-2"
                >
                  <p>Project Goals</p>
                </li>
                <li
                  className="hover:font-semibold hover:text-[#32db7b]"
                  id="link-3"
                >
                  <p>Tech Stack</p>
                </li>
                <li
                  className="hover:font-semibold hover:text-[#32db7b]"
                  id="link-4"
                >
                  <p>The Features</p>
                </li>
              </ul>
            </div>
          </div>
        </aside> */}
            </section>
          </main>
        )
      )}
    </motion.div>
  );
};

export default Project;
