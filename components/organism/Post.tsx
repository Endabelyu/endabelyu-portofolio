import Image from 'next/image';
import Title from '../atoms/Title';
import Link from 'next/link';

const Post = () => {
  return (
    <section className="mb-10 p-4  sm:flex sm:flex-col sm:gap-6">
      <Title text="Current Posts" position="text-center" />
      <div className="sm:flex sm:gap-5 flex-wrap justify-between">
        <div className="car-card flex flex-col mt-5 sm:w-[30%]">
          <h2 className="font-bold text-lg">Fyp Web</h2>

          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={350}
            className="rounded-xl shadow-green"
          />

          <div className="flex flex-col">
            <p className="text-sm text-[#3B3B3B] sm:text-base">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <Link href="/blog/1 " className="w-full">
            <button className="button-primary">Read Post</button>
          </Link>
        </div>
        <div className="car-card flex flex-col mt-5 sm:w-[30%]">
          <h2 className="font-bold text-base">Fyp Web</h2>

          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl shadow-green"
          />

          <div className="flex flex-col">
            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">Read Post</button>
        </div>
        <div className="car-card flex flex-col mt-5 sm:w-[30%]">
          <h2 className="font-bold text-base">Fyp Web</h2>

          <Image
            src="/dummyImage.png"
            alt="Project Thumbnail"
            height={125}
            width={250}
            className="rounded-xl shadow-green"
          />

          <div className="flex flex-col">
            <p className="text-sm text-[#3B3B3B]">
              Creating online stores and platforms for businesses to sell
              products and services to customers worldwide.
            </p>
          </div>
          <button className="button-primary">Read Post</button>
        </div>
        <div className="mt-5 sm:ml-auto sm:mr-0 sm:w-[15%]  w-3/4 mx-auto">
          <Link href="/blog " className="w-full">
            <button className="button-secondary hover:bg-[#83d4a5] hover:shadow-slate-100 hover:text-white">
              See More Post
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Post;
