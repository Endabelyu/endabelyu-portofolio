'use client';

import { useRouter } from 'next/navigation';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  const route = useRouter();
  return (
    <div className="">
      <button
        type="button"
        className="button-primary hover:opacity-60"
        onClick={() => route.push('/')}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
