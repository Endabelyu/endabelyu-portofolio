import Image from 'next/image';
import Title from '../atoms/Title';

const Project = () => {
  return (
    <section>
      <Title text="Featured Project" />
      <div className="sm:flex sm:gap-5 flex-wrap justify-between">
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
      <div className="mt-5 ml-auto mr-0 w-[15%] ">
        <button className="button-secondary hover:bg-[#83d4a5] hover:shadow-slate-100 hover:text-white">
          See More Project
        </button>
      </div>
    </section>
  );
};

export default Project;
