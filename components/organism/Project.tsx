import Image from 'next/image';
import Title from '../atoms/Title';
import Link from 'next/link';

const Project = () => {
  return (
    <section id="projects" className="sm:flex sm:flex-col sm:gap-6 ">
      <Title text="Featured Project" position="text-center" />
      <div className=" flex justify-center sm:gap-6 flex-col sm:flex-row  sm:justify-start">
        <div className="car-card mt-5 sm:w-[1/3] flex flex-col flex-1">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            width={350}
            height={125}
            className="rounded-md shadow-green w-80% sm:h-[9rem]    "
          />
          <ul className="shadow-icon ">
            <li className="">
              <Image
                src="/icon/linkedin-sign.svg"
                width={20}
                height={20}
                alt="icon languange"
              />
            </li>
            <li className="">
              <Image
                src="/icon/linkedin-sign.svg"
                width={20}
                height={20}
                alt="icon languange"
              />
            </li>
          </ul>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold  text-lg">Fyp Web</h2>
            <p className="text-sm sm:text-base  text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <Link href="/projects/1 " className="w-full">
            <button className="button-primary">See Details</button>
          </Link>
        </div>
        <div className="car-card mt-5 sm:w-1/3 flex flex-col flex-1">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            width={350}
            height={125}
            className="rounded-md shadow-green w-80% sm:h-[9rem]    "
          />
          <ul className="shadow-icon ">
            <li className="">
              <Image
                src="/icon/linkedin-sign.svg"
                width={20}
                height={20}
                alt="icon languange"
              />
            </li>
            <li className="">
              <Image
                src="/icon/linkedin-sign.svg"
                width={20}
                height={20}
                alt="icon languange"
              />
            </li>
          </ul>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold  text-lg">Fyp Web</h2>
            <p className="text-sm sm:text-base  text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <Link href="/projects/1 " className="w-full">
            <button className="button-primary">See Details</button>
          </Link>
        </div>
        <div className="car-card mt-5 sm:w-1/3 flex flex-col flex-1">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            width={350}
            height={125}
            className="rounded-md shadow-green w-80% sm:h-[9rem]    "
          />
          <ul className="shadow-icon ">
            <li className="">
              <Image
                src="/icon/linkedin-sign.svg"
                width={20}
                height={20}
                alt="icon languange"
              />
            </li>
            <li className="">
              <Image
                src="/icon/linkedin-sign.svg"
                width={20}
                height={20}
                alt="icon languange"
              />
            </li>
          </ul>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold  text-lg">Fyp Web</h2>
            <p className="text-sm sm:text-base  text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <Link href="/projects/1 " className="w-full">
            <button className="button-primary">See Details</button>
          </Link>
        </div>
      </div>
      <div className="mt-5   w-3/4 mx-auto sm:ml-auto sm:mr-0 sm:w-[15%]  ">
        <Link href="/projects">
          <button className="button-secondary hover:bg-[#83d4a5] hover:shadow-slate-100 hover:text-white">
            See More Project
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Project;
