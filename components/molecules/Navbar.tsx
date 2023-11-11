'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  return (
    <nav className="w-full  sticky top-5 bg-slate-50  rounded-full z-10 bg-transparent shadow-green">
      <div className="flex sm:flex-1 gap-5 px-2 py-3 justify-between items-center ">
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
