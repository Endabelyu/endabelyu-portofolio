import Image from 'next/image';
import Title from '../atoms/Title';
import Link from 'next/link';
import { project } from '@/constants';

const Project = () => {
  return (
    <section id="projects" className="sm:flex sm:flex-col sm:gap-6 ">
      <Title text="Featured Project" position="text-center" />
      <div className=" flex justify-center sm:gap-6 flex-col sm:flex-row  sm:justify-start ">
        {project.map(
          ({ key, image, title, description, techStack, alert }, i) => (
            <div
              key={key}
              className="car-card mt-5 h-[60vh] sm:w-[18vw] sm:h-[45vh] flex flex-col"
            >
              <Image
                src={image}
                alt="Project Thumbnail"
                width={350}
                height={125}
                className="rounded-md  w-80% sm:h-[9rem]"
              />
              <ul className="w-full flex gap-2 justify-between">
                <ul className="shadow-icon ">
                  {techStack.map(({ src, key }) => (
                    <li key={key} className="self-center">
                      <Image
                        src={src}
                        width={20}
                        height={20}
                        alt="icon language"
                      />
                    </li>
                  ))}
                </ul>
                {alert && (
                  <li className="self-center">
                    <p className="text-red-600 sm:text-sm">{alert}</p>
                  </li>
                )}
              </ul>

              <div className="flex flex-col gap-1 h-32">
                <h2 className="font-bold  text-lg">{title}</h2>
                <p className="text-sm sm:text-base   text-[#3B3B3B]">
                  {description}
                </p>
              </div>
              <Link href={`/projects/${key}`} className="w-full">
                <button className="button-primary">See Details</button>
              </Link>
            </div>
          )
        )}
      </div>
      {/* <div className="mt-5   w-3/4 mx-auto sm:ml-auto sm:mr-0 sm:w-[15%]  ">
        <Link href="/projects">
          <button className="button-secondary hover:bg-[#83d4a5] hover:shadow-slate-100 hover:text-white">
            See More Project
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default Project;
