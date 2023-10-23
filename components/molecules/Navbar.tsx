import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-3 bg-white flex justify-center">
      <div className="flex flex-1 gap-5 justify-between items-center  sm:justify-around ">
        <Link href="/" className="hidden sm:block">
          <Image src="/favicon.ico" width={30} height={30} alt="Logo NW" />
        </Link>
        <ul className="flex gap-3">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-slate-600 text-[12px] sm:text-sm"
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
