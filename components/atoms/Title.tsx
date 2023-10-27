type Props = {
  text: string;
  size?: string;
  position?: string;
};

const Title = ({ text, size, position }: Props) => {
  return (
    <h1
      className={` text-3xl font-bold  ${
        position ? position : ''
      } sm:text-left  ${size ? size : '2xl:text-5xl'} `}
    >
      {text}
    </h1>
  );
};

export default Title;
