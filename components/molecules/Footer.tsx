import { Socmeds } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=" text-slate-500 text-[12px] sm:text-base ">
      <div className="mx-auto w-full">
        <p className="text-center mb-2">Let&apos;s connect with me</p>
        <div className="flex gap-1 sm:gap-4 justify-center">
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
            </Link>
          ))}
        </div>
      </div>
      <div className="p-3 bg-white   ">
        <p className="text-center sm">
          &copy; Naswa Wilantama 2023 • Inspired By Baymax
        </p>
      </div>
    </div>
  );
};

export default Footer;
