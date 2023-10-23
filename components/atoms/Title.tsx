type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return <h1 className="sm:text-5xl text-3xl font-bold ">{text}</h1>;
};

export default Title;
