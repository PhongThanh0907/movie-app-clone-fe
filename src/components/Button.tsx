import React from "react";

interface Props {
  name: string;
}

const Button = (props: Props) => {
  return (
    <button className="py-2 px-6 bg-mainColor rounded text-[white] font-semibold hover:bg-[white] hover:text-mainColor duration-300">
      {props.name}
    </button>
  );
};

export default Button;
