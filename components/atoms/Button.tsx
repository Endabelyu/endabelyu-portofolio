type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <div>
      <button type="button">{text}</button>
    </div>
  );
};

export default Button;
