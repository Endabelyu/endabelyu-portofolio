type Props = {
  text: string;
  size: string;
  position?: string;
};

const Title = ({ text, size, position }: Props) => {
  return (
    <h1 className={`sm:${size} text-3xl font-bold  ${position} sm:text-left`}>
      {text}
    </h1>
  );
};

export default Title;
