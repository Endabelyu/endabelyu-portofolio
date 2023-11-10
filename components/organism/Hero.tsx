import Image from 'next/image';
import Title from '../atoms/Title';
import { NavLinks, Socmeds } from '@/constants';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=" sm:h-[70vh] h-[35vh] flex  flex-col gap-2  sm:gap-6  ">
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

      <section className="flex gap-7 sm:mb-20">
        {Socmeds.map((socmed) => (
          <Link
            href={socmed.href}
            key={socmed.key}
            className="flex gap-2 "
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
      </section>
      <div className="mouse_scroll ">
        <div className="mouse  hidden sm:block">
          <div className="wheel  "></div>
        </div>
        <div className="hidden sm:block">
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
