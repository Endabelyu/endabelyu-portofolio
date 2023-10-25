import Image from 'next/image';
import Title from '../atoms/Title';
import { NavLinks, Socmeds } from '@/constants';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="max-w-5xl sm:h-[60vh] h-[40vh] flex flex-col gap-1  ">
      <Title text="Hi, I am Endabelyu !" size="text-5xl" />
      <p className="text-xl font-roboto mt-3 mb-3  leading-8">
        Front-end Developer based on indonesia
        <span className="ml-1">
          <Image
            src="/icon/indonesiaFlag.png"
            alt="indonesia logo"
            width={20}
            height={20}
            className="inline"
          />
        </span>
        . have a passion to creating tools in simple, efficient way and the
        important thing to make life easier for everyone.
      </p>

      <section className="flex gap-7">
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
    </div>
  );
};

export default Hero;
