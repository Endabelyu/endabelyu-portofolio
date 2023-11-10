'use client';

import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  const params = useParams();

  return (
    <nav
      className="px-3 py-2 z-auto flex justify-center sm:w-[55%]  fixed align-middle bg-slate-50 mx-auto top-14 left-1/2 translate-x-[-50%]  rounded-full
    "
    >
      <div className="flex flex-1 gap-5  justify-between items-center ">
        <Link href="/" className="">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo NW" />
        </Link>
        {/* <ul className=" gap-6 hidden sm:flex ">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`text-slate-600 text-sm sm:text-2xl hover:text-slate-900  ${
                path === link.href || path === `${link.href}/${params.id}`
                  ? 'text-slate-900 active font-medium'
                  : ''
              }  links `}
            >
              {link.text}
            </Link>
          ))}
        </ul> */}
        <button className="switch">
          <Image
            src="/icon/light-bulb.svg"
            width={40}
            height={40}
            alt="mode icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
