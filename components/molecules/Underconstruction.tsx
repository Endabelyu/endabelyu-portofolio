import Image from 'next/image';
import Button from '../atoms/Button';

const Underconstruction = () => {
  return (
    <div className="w-full h-[80vh] flex p-3 sm:p-0 flex-col gap-10 align-middle justify-center items-center ">
      <h1 className="font-bold text-5xl sm:text-9xl text-[#32db7b]">
        Coming Soon
      </h1>
      <p className="text-semibold w-[85%] sm:w-full text-xl sm:text-2xl">
        Sorry, this page is under development. Will be available as soon as
        possible.
      </p>
      <Button text="Back To Home" />
    </div>
  );
};

export default Underconstruction;
