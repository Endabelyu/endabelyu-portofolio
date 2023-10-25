import Image from 'next/image';
import Title from '../atoms/Title';
import Link from 'next/link';

const Project = () => {
  return (
    <section id="projects">
      <Title text="Featured Project" size="text-4xl" position="text-center" />
      <div className="sm:flex sm:gap-5 flex-wrap justify-between ">
        <div className="car-card mt-5 sm:w-[30%] flex flex-col">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            width={300}
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
            <h2 className="font-bold text-base ">Fyp Web</h2>

            <p className="text-sm sm:text-[15px]  text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <Link href="/projects/1 " className="w-full">
            <button className="button-primary">See Details</button>
          </Link>
        </div>
        <div className="car-card mt-5 sm:w-[30%] flex flex-col">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl "
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
          <div className="flex flex-col">
            <h2 className="font-bold text-base">Fyp Web</h2>

            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">See Details</button>
        </div>
        <div className="car-card mt-5 sm:w-[30%] flex flex-col">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl "
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
          <div className="flex flex-col">
            <h2 className="font-bold text-base">Fyp Web</h2>

            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">See Details</button>
        </div>
        <div className="car-card mt-5 sm:w-[30%] flex flex-col">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl "
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
          <div className="flex flex-col">
            <h2 className="font-bold text-base">Fyp Web</h2>

            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">See Details</button>
        </div>
        <div className="car-card mt-5 sm:w-[30%] flex flex-col">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl "
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
          <div className="flex flex-col">
            <h2 className="font-bold text-base">Fyp Web</h2>

            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">See Details</button>
        </div>
        <div className="car-card mt-5 sm:w-[30%] flex flex-col">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl "
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
          <div className="flex flex-col">
            <h2 className="font-bold text-base">Fyp Web</h2>

            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">See Details</button>
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
