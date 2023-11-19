'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const first = useRef(null);
  // console.log(first.current, 'ref');

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 50) {
        document
          .getElementById('navbar')
          ?.classList.replace('bg-transparent', 'bg-slate-100');
        document.getElementById('navbar')?.classList.add('shadow-green');
      } else {
        document
          .getElementById('navbar')
          ?.classList.replace('bg-slate-100', 'bg-transparent');
        document.getElementById('navbar')?.classList.remove('shadow-green');
      }
    });
  }, []);

  return (
    <nav
      id="navbar"
      ref={first}
      className=" sticky w-full top-5 rounded-full z-10 bg-transparent"
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="flex sm:flex-1 gap-5 px-2 py-3 justify-between items-center ">
            <Link href="/" className="">
              <Image
                src="/icon/endabelyu.logo.svg"
                width={30}
                height={30}
                alt="mode icon"
                className="sm:w-12"
              />
              {/* <p className=" rounded-full font-bold text-2xl">NW</p> */}
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
            {/* will activated when fight mode available */}
            {/* <button className="switch">
              <Image
                src="/icon/light-bulb.svg"
                width={30}
                height={30}
                alt="mode icon"
                className="sm:w-10"
              />
            </button> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
