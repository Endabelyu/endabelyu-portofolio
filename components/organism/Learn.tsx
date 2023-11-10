import Image from 'next/image';
import Title from '../atoms/Title';
import Link from 'next/link';

const Learn = () => {
  return (
    <section className="flex flex-col gap-6">
      <Title text="Current Learning" position="text-center" />
      <div className="sm:flex sm:gap-5 flex-row flex-wrap sm:flex-nowrap justify-between ">
        <div className="car-card flex flex-col sm:flex-row sm:w-[50%]  mt-5 relative">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            width={300}
            height={160}
            className="rounded-xl shadow-green sm:h-[9rem] sm:w-[200px]"
          />
          <span>
            <div className="flex flex-col ">
              <h2 className="font-bold text-base">Fyp Web</h2>
              <p className="text-sm text-slate-800">
                Creating online stores and platforms for businesses to sell
                products and services to customers worldwide.To make bussiness
                better
              </p>
            </div>
            <Link href="#" className="flex gap-2 w-full justify-end">
              <p className=" text-[#2EB85C] text-semibold sm:hidden">Detail</p>
              <Image
                src="/icon/link-icon.svg"
                alt="link icon"
                height={24}
                width={24}
              />
            </Link>
          </span>
        </div>
        <div className="car-card flex flex-col sm:flex-row sm:w-[50%]  mt-5 relative">
          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            width={300}
            height={160}
            className="rounded-xl shadow-green sm:h-[9rem] sm:w-[200px]"
          />
          <span>
            <div className="flex flex-col ">
              <h2 className="font-bold text-base">Fyp Web</h2>
              <p className="text-sm text-slate-800">
                Creating online stores and platforms for businesses to sell
                products and services to customers worldwide.To make bussiness
                better
              </p>
            </div>
            <Link href="#" className="flex gap-2 w-full justify-end">
              <p className=" text-[#2EB85C] text-semibold sm:hidden">Detail</p>
              <Image
                src="/icon/link-icon.svg"
                alt="link icon"
                height={24}
                width={24}
              />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Learn;
