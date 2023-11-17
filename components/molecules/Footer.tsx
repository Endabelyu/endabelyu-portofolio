'use client';
import { Socmeds } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  return (
    <footer className=" text-slate-500  pt-2 sm:pt-4 text-[12px] sm:text-base bg-slate-50  border-t-[3px]">
      <AnimatePresence>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="">
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
          <div className="p-3">
            <p className="text-center sm">
              &copy; Naswa Wilantama 2023 • Inspired By Baymax
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
