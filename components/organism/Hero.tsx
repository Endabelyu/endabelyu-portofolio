'use client';
import Image from 'next/image';
import Title from '../atoms/Title';
import { NavLinks, Socmeds } from '@/constants';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import Project from './Project';
import Post from './Post';
import Underconstruction from '../molecules/Underconstruction';

const Hero = () => {
  const path = usePathname();
  const params = useParams();
  const [active, setActive] = useState('Projects');
  const tabs = [
    { label: 'Projects', component: <Project /> },
    { label: 'Blog', component: <Underconstruction /> },
    { label: 'About', component: <Underconstruction /> },
    // Add more tabs as needed
  ];
  return (
    <div className=" flex flex-col gap-2  sm:gap-6  sm:first-letter:my-8">
      <h1 className="text-3xl 2xl:text-6xl font-bold">
        Hi, I am <span className="text-[#32db7b]">Endabelyu</span> !
      </h1>
      <p className=" font-roboto  text-xl   leading-8  sm:text-2xl  ">
        A Front-end Developer based on indonesia
        <span className="ml-1">
          <Image
            src="/icon/indonesiaFlag.png"
            alt="indonesia logo"
            width={20}
            height={20}
            className="inline"
          />
        </span>
        . Passionate about crafting visually appealing, seamless user
        experiences and impactful work for our environment.
      </p>

      <section>
        <ul className="flex gap-5 sm:gap-8 sm:w-7/12 my-2 cursor-pointer">
          {Socmeds.map((socmed) => (
            <Link
              href={socmed.href}
              key={socmed.key}
              className="flex gap-2 flex-1
               "
              target="_blank"
            >
              <Image
                src={socmed.src}
                alt="icon"
                width={20}
                height={20}
                className="inline sm:w-[24px] sm:h-[24px]"
              />

              <p className="text-xs sm:text-lg font-medium items-center self-center hover:font-semibold">
                {socmed.text}
              </p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="tab-container border-y-4   mb-4">
        <ul className=" flex gap-5 p-3   justify-between ">
          {NavLinks.map((link) => (
            <span
              key={link.key}
              className={`text-slate-600 text-sm sm:text-2xl hover:text-slate-900 cursor-pointer  ${
                active === link.key ? 'text-slate-900 active font-medium' : ''
              }  links `}
              onClick={() => setActive(link.key)}
            >
              {link.text}
            </span>
          ))}
        </ul>
      </section>

      {/* render component when tab active */}
      {tabs.map((tab) => (
        <Fragment key={tab.label}>
          {active === tab.label ? tab.component : ''}
        </Fragment>
      ))}
      {/*  */}

      {/* <div className="mouse_scroll ">
        <div className="mouse  hidden sm:block">
          <div className="wheel  "></div>
        </div>
        <div className="hidden sm:block">
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
