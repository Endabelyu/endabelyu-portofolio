'use client';

import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="p-3 bg-white flex justify-center">
      <div className="flex flex-1 gap-5 justify-between items-center  sm:justify-around ">
        <Link href="/" className="">
          <Image src="/favicon.ico" width={30} height={30} alt="Logo NW" />
        </Link>
        <ul className=" gap-6 hidden sm:flex ">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`text-slate-600 text-sm sm:text-lg hover:text-slate-900  ${
                path === link.href ? 'text-slate-900 active font-medium' : ''
              }  links `}
            >
              {link.text}
            </Link>
          ))}
        </ul>
        <button className="switch">
          <Image
            src="/icon/light-bulb.svg"
            width={20}
            height={20}
            alt="mode icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
